import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MaterialProps } from "../types";
import { Mesh } from "three";

const RotatingSphere: React.FC<MaterialProps> = ({
	color,
	metalness,
	roughness,
	materialType,
}) => {
	const sphereRef = useRef<Mesh>(null);
	const materialProps: MaterialProps = {
		color,
		metalness,
		roughness,
		materialType,
	};

	useFrame(() => {
		if (sphereRef.current) {
			sphereRef.current.rotation.x += 0.01;
			sphereRef.current.rotation.y += 0.01;
		}
	});

	const renderMaterial = () => {
		switch (materialType) {
			case "meshStandardMaterial":
				return <meshStandardMaterial {...materialProps} />;
			case "meshBasicMaterial":
				return <meshBasicMaterial color={materialProps.color} />;
			case "meshPhysicalMaterial":
				return <meshPhysicalMaterial {...materialProps} />;
			case "meshToonMaterial":
				return <meshToonMaterial color={materialProps.color} />;
			default:
				return <meshStandardMaterial {...materialProps} />;
		}
	};

	return (
		<mesh ref={sphereRef}>
			<ambientLight intensity={1} />
			<directionalLight intensity={0.5} position={[5, 5, 5]} />
			<sphereGeometry args={[1, 32, 32]} />
			{renderMaterial()}
		</mesh>
	);
};

export default RotatingSphere;
