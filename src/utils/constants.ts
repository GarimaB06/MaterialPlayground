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
