import React, { useState, useEffect } from "react";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";
import leftAndRight from "../assets/left-and-right.png";
import ObjectIcon from "./ObjectIcon";
import { ObjectType, SideBarProps } from "../types";

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
		const handleMouseMove = (event: MouseEvent) => {
			if (isResizing) {
				setSidebarWidth(event.clientX);
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
			<img
				onMouseDown={handleToggleCollapse}
				src={getArrowIcon()}
				alt="Icon"
				className="arrow-button"
			/>
			<button onMouseDown={handleMouseDown} className="side-button" />
			<div className="sidebar-icon-list">{renderList()}</div>
		</div>
	);
};

export default SideBar;
