import { useState } from "react";
import SideBar from "./components/SideBar";
import MaterialPreview from "./components/MaterialPreview";
import "./App.css";

function App() {
	const [isResizing, setIsResizing] = useState<boolean>(false);
	const [sideBarWidth, setSidebarWidth] = useState<number>(350);
	const [objectList, setObjectList] = useState<any[]>([]);
	const [currentSelectionId, setCurrentSelectionId] = useState<string | null>(
		null
	);

	return (
		<div
			// this className helps remove the transition property when resizing the sidebar (as it is causing a lag)
			className={isResizing ? "resizing" : ""}
			style={{ display: "flex" }}
		>
			<SideBar
				initialWidth={300}
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
}

export default App;
