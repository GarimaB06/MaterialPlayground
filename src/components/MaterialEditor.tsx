import { useEffect } from "react";
import { MaterialEditorProps } from "../types";
import {
	MATERIAL_STRINGS,
	DEFAULT_MATERIAL_CONFIG,
	BASIC_MATERIAL_TYPES,
} from "../utils/constants";

const MaterialEditor: React.FC<MaterialEditorProps> = ({
	onMaterialChange,
	materialOptions,
	objectList,
	setObjectList,
	currentSelectionId,
	setMaterialOptions,
	setCurrentSelectionId,
}) => {
	useEffect(() => {
		if (currentSelectionId === null) {
			resetOptions();
		}
	}, [currentSelectionId]);

	const resetOptions = () => {
		setCurrentSelectionId(null);
		setMaterialOptions(DEFAULT_MATERIAL_CONFIG);
	};

	const createObject = () => {
		const uniqueKey = `${Date.now()}-${Math.random()}`;
		const newObject = {
			materialId: uniqueKey,
			materialOptions,
		};
		setObjectList([...objectList, newObject]);
		resetOptions();
	};

	const updateObject = () => {
		const newList = [...objectList];
		const updateIndex = newList.findIndex(
			(obj) => obj.materialId === currentSelectionId
		);
		newList.splice(updateIndex, 1, {
			materialId: currentSelectionId,
			materialOptions,
		});
		setObjectList(newList);
		resetOptions();
	};

	const handleFormValueChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
		key: string
	) => {
		onMaterialChange?.({ ...materialOptions, [key]: event.target.value });
	};

	const isBasicMaterialType = BASIC_MATERIAL_TYPES.includes(
		materialOptions.materialType
	);

	return (
		<form className="material-form">
			<label>
				Material Type
				<select
					value={materialOptions.materialType}
					onChange={(event) => handleFormValueChange(event, "materialType")}
				>
					{MATERIAL_STRINGS.map((string, index) => (
						<option value={string} key={`${index}-${string}`}>
							{string}
						</option>
					))}
				</select>
			</label>
			<div>
				<label>
					Color
					<input
						type="color"
						value={materialOptions.color}
						onChange={(event) => handleFormValueChange(event, "color")}
					/>
				</label>
			</div>
			<div>
				<label>
					Metalness
					<input
						disabled={isBasicMaterialType}
						type="range"
						min={0}
						max={1}
						step={0.01}
						value={materialOptions.metalness}
						onChange={(event) => handleFormValueChange(event, "metalness")}
					/>
					{materialOptions.metalness}
				</label>
			</div>
			<div>
				<label>
					Roughness
					<input
						disabled={isBasicMaterialType}
						type="range"
						min={0}
						max={1}
						step={0.01}
						value={materialOptions.roughness}
						onChange={(event) => handleFormValueChange(event, "roughness")}
					/>
					{materialOptions.roughness}
				</label>
			</div>
			<div className="form-buttons">
				<button type="button" onClick={resetOptions} className="secondary">
					{currentSelectionId ? "Cancel Edit" : "Reset"}
				</button>
				<button
					className="primary"
					aria-label={currentSelectionId ? "Update Object" : "Create Object"}
					type="button"
					onClick={currentSelectionId ? updateObject : createObject}
				>
					{currentSelectionId ? "Update Object" : "Create Object"}
				</button>
			</div>
		</form>
	);
};

export default MaterialEditor;
