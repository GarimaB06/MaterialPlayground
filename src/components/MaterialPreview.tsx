import React, { useState } from "react";
import { MaterialProps, MaterialPreviewProps } from "../types";
import ThreeDObject from "./ThreeDObject";
import MaterialForm from "./MaterialForm";

const MaterialPreview: React.FC<MaterialPreviewProps> = ({ sideBarWidth }) => {
	const [materialOptions, setMaterialOptions] = useState<MaterialProps>({
		color: "#ffffff",
		metalness: 0.5,
		roughness: 0.5,
		materialType: "meshStandardMaterial",
	});

	const handleMaterialChange = (newOptions: Partial<MaterialProps>) => {
		// setMaterialOptions(newOptions);
		setMaterialOptions((prevOptions) => ({
			...prevOptions,
			...newOptions,
		}));
	};

	return (
		<div
			className="material-preview"
			style={{
				width: `calc(100% - ${sideBarWidth}px)`,
				display: "flex",
				flexDirection: "row",
				height: "100vh",
			}}
		>
			<MaterialForm
				onMaterialChange={handleMaterialChange}
				materialOptions={materialOptions}
			/>
			<div>
				<ThreeDObject materialOptions={materialOptions} />
			</div>
		</div>
	);
};

export default MaterialPreview;
