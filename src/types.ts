export interface SideBarProps {
	initialWidth: number;
	minWidth: number;
	sideBarWidth: number;
	setSidebarWidth: (width: number) => void;
	isResizing: boolean;
	setIsResizing: (resizing: boolean) => void;
}

export interface MaterialPreviewProps {
	sideBarWidth: number;
}

export interface MaterialProps {
	color: string;
	metalness: number;
	roughness: number;
	materialType: string;
}

export interface MaterialFormProps {
	onMaterialChange?: (newMaterial: Partial<MaterialProps>) => void;
	materialOptions: MaterialProps;
}
