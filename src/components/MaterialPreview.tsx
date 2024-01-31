import React from "react";
import { MaterialPreviewProps } from "../types";

const MaterialPreview: React.FC<MaterialPreviewProps> = ({ sideBarWidth }) => {
	return (
		<div
			className="material-preview"
			style={{
				width: `calc(100% - ${sideBarWidth}px)`,
			}}
		></div>
	);
};

export default MaterialPreview;
