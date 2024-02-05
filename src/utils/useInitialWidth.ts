import { useEffect, useState } from "react";
import { INITIAL_SIDEBAR_WIDTH_MAP, MOBILE_WIDTH } from "./constants";

const useWidth = () => {
	const { innerWidth } = window;
	const isMobileWidth = innerWidth <= MOBILE_WIDTH;
	const initialWidth = isMobileWidth
		? INITIAL_SIDEBAR_WIDTH_MAP.mobile
		: INITIAL_SIDEBAR_WIDTH_MAP.desktop;

	const [initialSidebarWidthWidth, setInitialSidebarWidth] =
		useState<number>(initialWidth);

	useEffect(function detectWidth() {
		const resizeListener = () => {
			const { innerWidth } = window;

			const isMobileWidth = innerWidth <= MOBILE_WIDTH;
			const initialWidth = isMobileWidth
				? INITIAL_SIDEBAR_WIDTH_MAP.mobile
				: INITIAL_SIDEBAR_WIDTH_MAP.desktop;

			setInitialSidebarWidth(initialWidth);
		};
		window.addEventListener("resize", resizeListener);
		return () => {
			window.removeEventListener("resize", resizeListener);
		};
	}, []);
	return initialSidebarWidthWidth;
};

export default useWidth;
