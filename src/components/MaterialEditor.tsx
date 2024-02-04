import { useEffect } from "react";
import { MaterialEditorProps } from "../types";
import { MATERIAL_STRINGS, DEFAULT_MATERIAL_CONFIG } from "../utils/constants";

const MaterialEditor: React.FC<MaterialEditorProps> = ({
	onMaterialChange,
	materialOptions,
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
		setObjectList((prevObjectList: any) => [...prevObjectList, newObject]);
		resetOptions();
	};

	const updateObject = () => {
		setObjectList((prevObjectList: any) => {
			const newList = [...prevObjectList];
			const objectToBeUpdatedIndex = newList.findIndex(
				(obj) => obj.materialId === currentSelectionId
			);
			newList.splice(objectToBeUpdatedIndex, 1, {
				materialId: currentSelectionId,
				materialOptions,
			});

			return newList;
		});

		resetOptions();
	};

	const handleFormValueChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
		key: string
	) => {
		onMaterialChange?.({ ...materialOptions, [key]: event.target.value });
	};

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
			<button
				aria-label={currentSelectionId ? "Update Object" : "Create Object"}
				type="button"
				onClick={currentSelectionId ? updateObject : createObject}
			>
				{currentSelectionId ? "Update Object" : "Create Object"}
			</button>
		</form>
	);
};

export default MaterialEditor;
