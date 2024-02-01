import { Canvas } from "@react-three/fiber";
import RotatingSphere from "./RotatingSphere";
import { MaterialFormProps } from "../types";

const ThreeDObject: React.FC<MaterialFormProps> = ({ materialOptions }) => {
	return (
		<div className="canvas-container">
			<Canvas>
				<ambientLight intensity={0.3} />
				<directionalLight color="white" position={[0, 0, 5]} />
				<RotatingSphere {...materialOptions} />
			</Canvas>
		</div>
	);
};

export default ThreeDObject;
