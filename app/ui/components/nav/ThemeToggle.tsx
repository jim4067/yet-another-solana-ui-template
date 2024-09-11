"use client";

import { css } from "@/styled-system/css";
import { MoonIcon, SunIcon } from "@/theme/icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null; // Ensures we only render client side

	return (
		<button
			type="button"
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			className={css({
				_hover: {
					cursor: "pointer",
				},
			})}
		>
			<span>{theme === "light" ? <MoonIcon /> : <SunIcon />}</span>
		</button>
	);
};

export default ThemeToggle;
