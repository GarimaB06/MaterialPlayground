import { useState } from "react";
import SideBar from "./components/SideBar";
import MaterialPreview from "./components/MaterialPreview";
import "./App.css";

function App() {
	const [isResizing, setIsResizing] = useState(false);
	const [sideBarWidth, setSidebarWidth] = useState(600);

	return (
		<div className={isResizing ? "resizing" : ""} style={{ display: "flex" }}>
			<SideBar
				initialWidth={600}
				minWidth={20}
				maxWidth={1200}
				sideBarWidth={sideBarWidth}
				setSidebarWidth={setSidebarWidth}
				isResizing={isResizing}
				setIsResizing={setIsResizing}
			/>
			<MaterialPreview sideBarWidth={sideBarWidth} />
		</div>
	);
}

export default App;
