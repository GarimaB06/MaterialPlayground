import React, { useState } from "react";
import { MaterialProps, MaterialPreviewProps } from "../types";
import ThreeDObject from "./ThreeDObject";
import MaterialForm from "./MaterialForm";

const MaterialPreview: React.FC<MaterialPreviewProps> = () => {
	const [materialOptions, setMaterialOptions] = useState<MaterialProps>({
		color: "#4C95CD",
		metalness: 0.5,
		roughness: 0.5,
		materialType: "meshStandardMaterial",
	});

	const handleMaterialChange = (newOptions: Partial<MaterialProps>) => {
		setMaterialOptions((prevOptions) => ({
			...prevOptions,
			...newOptions,
		}));
	};

	return (
		<div
			className="material-preview"
			style={{
				width: "100vw",
				display: "flex",
				flexDirection: "row",
				height: "100vh",
			}}
		>
			<MaterialForm
				onMaterialChange={handleMaterialChange}
				materialOptions={materialOptions}
			/>
			<ThreeDObject materialOptions={materialOptions} />
		</div>
	);
};

export default MaterialPreview;
