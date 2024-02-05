import React, { useState, useEffect } from "react";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";
import leftAndRight from "../assets/left-and-right.png";
import ObjectIcon from "./ObjectIcon";
import { ObjectType, SideBarProps } from "../types";
import { COLLAPSE_THRESHOLD_WIDTH } from "../utils/constants";

const SideBar: React.FC<SideBarProps> = ({
	initialWidth,
	minWidth,
	sideBarWidth,
	setSidebarWidth,
	isResizing,
	setIsResizing,
	objectList,
	setObjectList,
	currentSelectionId,
	setCurrentSelectionId,
}) => {
	const [collapsed, setCollapsed] = useState(false);

	useEffect(() => {
		/**
		 * When resizing is done (the user releases the side button), if the width
		 * is below or above the defined threshold (COLLAPSE_THRESHOLD_WIDTH),
		 * we'll make the sidebar collapsed or expanded.
		 */
		if (!isResizing) {
			if (!collapsed && sideBarWidth < COLLAPSE_THRESHOLD_WIDTH) {
				setCollapsed(true);
				setSidebarWidth(minWidth);
			} else if (collapsed && sideBarWidth > COLLAPSE_THRESHOLD_WIDTH) {
				setCollapsed(false);
			}
		}
		const handleMouseMove = (event: MouseEvent) => {
			if (isResizing) {
				const newWidth = event.clientX;
				setSidebarWidth(newWidth);
			}
		};

		const handleMouseUp = () => {
			setIsResizing(false);
		};

		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseup", handleMouseUp);
		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleMouseUp);
		};
	}, [isResizing]);

	/**
	 * If the sidebar is collapsed, this effect will expand the sidebar
	 * after an object has been created to provide feedback to the user,
	 * that the new material has been added to the sidebar.
	 */
	useEffect(() => {
		if (collapsed) {
			setCollapsed(false);
			setSidebarWidth(initialWidth);
		}
	}, [objectList.length]);

	const handleToggleCollapse = () => {
		setSidebarWidth(collapsed ? initialWidth : minWidth);
		setCollapsed(!collapsed);
	};

	const handleMouseDown = () => {
		setIsResizing(true);
	};

	const getArrowIcon = () => {
		if (isResizing) {
			return leftAndRight;
		} else if (collapsed) {
			return rightArrow;
		} else {
			return leftArrow;
		}
	};

	const renderList = () => {
		return objectList.map((obj: ObjectType, index: number) => {
			const { materialId, materialOptions } = obj;
			return (
				<ObjectIcon
					key={materialId}
					materialOptions={materialOptions}
					materialId={materialId}
					objectList={objectList}
					setObjectList={setObjectList}
					index={index}
					currentSelectionId={currentSelectionId}
					setCurrentSelectionId={setCurrentSelectionId}
				/>
			);
		});
	};

	return (
		<div
			className="side-bar"
			style={{
				width: `${sideBarWidth}px`,
			}}
		>
			<button className="arrow-button" onClick={handleToggleCollapse}>
				<img src={getArrowIcon()} alt="Icon" className="arrow-icon" />
			</button>
			<button onMouseDown={handleMouseDown} className="side-button" />
			<div className="sidebar-icon-list">{renderList()}</div>
		</div>
	);
};

export default SideBar;
