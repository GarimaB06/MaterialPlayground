import { Canvas } from "@react-three/fiber";
import RotatingSphere from "./RotatingSphere";
import { ObjectIconProps } from "../types";
import edit from "../assets/edit.png";
import trash from "../assets/trash.png";

const ObjectIcon: React.FC<ObjectIconProps> = ({
	materialOptions,
	materialId,
	objectList,
	setObjectList,
	index,
	currentSelectionId,
	setCurrentSelectionId,
}) => {
	const highlighted: boolean = materialId === currentSelectionId;
	const updateCurrentSelectionId = () => {
		setCurrentSelectionId(materialId);
	};
	const deleteObject = (index: number) => {
		const newSetObjectList = [...objectList];
		newSetObjectList.splice(index, 1);
		setObjectList(newSetObjectList);
		if (highlighted) setCurrentSelectionId(null);
	};
	const _className: string = `object-icon${highlighted ? " highlighted" : ""}`;
	return (
		<div className={_className}>
			<Canvas>
				<ambientLight intensity={0.3} />
				<directionalLight color="white" position={[0, 5, 5]} />
				<RotatingSphere {...materialOptions} />
			</Canvas>
			<div className="action-icons">
				<button className="action-icon" onClick={updateCurrentSelectionId}>
					<img src={edit} alt="edit" />
				</button>
				<button className="action-icon" onClick={() => deleteObject(index)}>
					<img src={trash} alt="trash" />
				</button>
			</div>
		</div>
	);
};

export default ObjectIcon;
