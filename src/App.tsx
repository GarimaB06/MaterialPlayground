import { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import MaterialPreview from "./components/MaterialPreview";
import "./App.css";

const App = () => {
	const [isResizing, setIsResizing] = useState<boolean>(false);
	const [sideBarWidth, setSidebarWidth] = useState<number>(350);

	const getPersistedObjectList = () => {
		const storedObjectList = localStorage.getItem("objectList");
		return storedObjectList ? JSON.parse(storedObjectList) : [];
	};

	const [objectList, setObjectList] = useState<any[]>(getPersistedObjectList);
	const [currentSelectionId, setCurrentSelectionId] = useState<string | null>(
		null
	);

	const setPersistedObjectList = () => {
		localStorage.setItem("objectList", JSON.stringify(objectList));
	};

	useEffect(() => {
		setPersistedObjectList();
	}, [objectList]);

	return (
		<div
			// this className helps remove the transition property when resizing the sidebar (as it is causing a lag)
			className={isResizing ? "resizing" : ""}
			style={{ display: "flex" }}
		>
			<SideBar
				initialWidth={350}
				minWidth={20}
				sideBarWidth={sideBarWidth}
				setSidebarWidth={setSidebarWidth}
				isResizing={isResizing}
				setIsResizing={setIsResizing}
				objectList={objectList}
				setObjectList={setObjectList}
				currentSelectionId={currentSelectionId}
				setCurrentSelectionId={setCurrentSelectionId}
			/>
			<MaterialPreview
				sideBarWidth={sideBarWidth}
				objectList={objectList}
				setObjectList={setObjectList}
				currentSelectionId={currentSelectionId}
				setCurrentSelectionId={setCurrentSelectionId}
			/>
		</div>
	);
};

export default App;
