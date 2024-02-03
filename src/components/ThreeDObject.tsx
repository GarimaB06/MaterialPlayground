import { Canvas } from "@react-three/fiber";
import RotatingSphere from "./RotatingSphere";
import { ThreeDObjectProps } from "../types";

const ThreeDObject: React.FC<ThreeDObjectProps> = ({ materialOptions }) => {
	return (
		<div className="canvas-container" style={{ width: "100vw" }}>
			<Canvas>
				<ambientLight intensity={0.3} />
				<directionalLight color="white" position={[0, 5, 5]} />
				<RotatingSphere {...materialOptions} />
			</Canvas>
		</div>
	);
};

export default ThreeDObject;
