import { MaterialProps } from "../types";
export const MATERIAL_STRINGS: string[] = [
	"meshBasicMaterial",
	"meshStandardMaterial",
	"meshPhysicalMaterial",
	"meshToonMaterial",
];

export const DEFAULT_MATERIAL_CONFIG: MaterialProps = {
	color: "#4C95CD",
	metalness: 0.5,
	roughness: 0.5,
	materialType: "meshStandardMaterial",
};

export const MOBILE_WIDTH = 675;

export const INITIAL_SIDEBAR_WIDTH_MAP = {
	mobile: 175,
	desktop: 350,
};

export const COLLAPSE_THRESHOLD_WIDTH = 175;
