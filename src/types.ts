export interface MaterialProps {
	color: string;
	metalness: number;
	roughness: number;
	materialType: string;
}
export interface ObjectType {
	materialOptions: MaterialProps;
	materialId: string;
}

export interface ThreeDObjectProps {
	materialId?: string;
	onMaterialChange?: (newMaterial: Partial<MaterialProps>) => void;
	materialOptions: MaterialProps;
}

export interface ObjectIconProps {
	materialId: string;
	materialOptions: MaterialProps;
	objectList: ObjectType[];
	setObjectList: any;
	index: number;
	currentSelectionId: string | null;
	setCurrentSelectionId: any;
}

export interface SideBarProps {
	initialWidth: number;
	minWidth: number;
	sideBarWidth: number;
	setSidebarWidth: (width: number) => void;
	isResizing: boolean;
	setIsResizing: (resizing: boolean) => void;
	objectList: ObjectType[];
	setObjectList: any;
	currentSelectionId: string | null;
	setCurrentSelectionId: any;
}

export interface MaterialPreviewProps {
	sideBarWidth: number;
	objectList: ObjectType[];
	setObjectList: any;
	currentSelectionId: string | null;
	setCurrentSelectionId: any;
}

export interface MaterialEditorProps {
	onMaterialChange?: (newMaterial: Partial<MaterialProps>) => void;
	materialOptions: MaterialProps;
	objectList: ObjectType[];
	setObjectList: any;
	currentSelectionId: string | null;
	setCurrentSelectionId: any;
	setMaterialOptions: any;
}
