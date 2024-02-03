import React, { useEffect, useState } from "react";
import { MaterialProps, MaterialPreviewProps } from "../types";
import { DEFAULT_MATERIAL_CONFIG } from "../utils/constants";
import ThreeDObject from "./ThreeDObject";
import MaterialEditor from "./MaterialEditor";

const MaterialPreview: React.FC<MaterialPreviewProps> = ({
	objectList,
	setObjectList,
	currentSelectionId,
	setCurrentSelectionId,
}) => {
	const [materialOptions, setMaterialOptions] = useState<MaterialProps>(
		DEFAULT_MATERIAL_CONFIG
	);

	useEffect(() => {
		if (currentSelectionId) {
			const selectedId = objectList.findIndex(
				(obj) => obj.materialId === currentSelectionId
			);
			const selectedObject = objectList[selectedId];
			setMaterialOptions(selectedObject.materialOptions);
		}
	}, [currentSelectionId]);

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
			<MaterialEditor
				onMaterialChange={handleMaterialChange}
				materialOptions={materialOptions}
				objectList={objectList}
				setObjectList={setObjectList}
				currentSelectionId={currentSelectionId}
				setMaterialOptions={setMaterialOptions}
				setCurrentSelectionId={setCurrentSelectionId}
			/>
			<ThreeDObject materialOptions={materialOptions} />
		</div>
	);
};

export default MaterialPreview;
