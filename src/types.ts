export interface MaterialProps {
	color: string;
	metalness: number;
	roughness: number;
	materialType: string;
}

export interface ObjectType {
	materialOptions: MaterialProps;
	materialId: string | null;
}

export interface CommonProps {
	objectList: ObjectType[];
	setObjectList: React.Dispatch<React.SetStateAction<ObjectType[]>>;
	currentSelectionId: string | null;
	setCurrentSelectionId: (currentSelectionId: string | null) => void;
}

export interface ThreeDObjectProps {
	materialId?: string;
	onMaterialChange?: (newMaterial: Partial<MaterialProps>) => void;
	materialOptions: MaterialProps;
}

export interface ObjectIconProps extends CommonProps {
	materialId: string | null;
	materialOptions: MaterialProps;
	index: number;
}

export interface SideBarProps extends CommonProps {
	initialWidth: number;
	minWidth: number;
	sideBarWidth: number;
	setSidebarWidth: (width: number) => void;
	isResizing: boolean;
	setIsResizing: (resizing: boolean) => void;
}

export interface MaterialPreviewProps extends CommonProps {
	sideBarWidth: number;
}

export interface MaterialEditorProps extends CommonProps {
	onMaterialChange?: (newMaterial: Partial<MaterialProps>) => void;
	materialOptions: MaterialProps;
	setMaterialOptions: (materialOptions: MaterialProps) => void;
}
