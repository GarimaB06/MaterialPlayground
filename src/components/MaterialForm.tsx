import React from "react";
import { MaterialFormProps } from "../types";
import { MATERIAL_STRINGS } from "../utils/constants";

const MaterialForm: React.FC<MaterialFormProps> = ({
	onMaterialChange,
	materialOptions,
}) => {
	const handleFormValueChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
		key: string
	) => {
		onMaterialChange?.({ ...materialOptions, [key]: event.target.value });
	};

	return (
		<form className="material-form">
			<label>
				Material Type:
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
					Color:
					<input
						type="color"
						value={materialOptions.color}
						onChange={(event) => handleFormValueChange(event, "color")}
					/>
				</label>
			</div>
			<div>
				<label>
					Metalness:
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
					Roughness:
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
			<button type="button">Create Object</button>
		</form>
	);
};

export default MaterialForm;
