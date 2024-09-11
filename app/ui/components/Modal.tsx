import { css } from "@styled-system/css";

import React, { ReactNode } from "react";

export type ModalProps = {
	children: ReactNode;
	isOpen: boolean;
	onClose?: () => void;
};
export default function Modal({ children, isOpen, onClose }: ModalProps) {
	const handleClose = () => {
		if (onClose) onClose();
	};

	return (
		isOpen && (
			<section
				className={css({
					position: "fixed",
					top: "0",
					left: "0",
					width: "100%",
					height: " 100%",
					backgroundColor: "rgba(0, 0, 0, 0.5)",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					zIndex: "100",
					backdropFilter: "blur(2px)",
					_hover: {
						cursor: "default",
					},
				})}
			>
				<section
					className={css({
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						color: "token(colors.primaryBackground)",
						position: "absolute",
						top: "0",
						left: "0",
						width: "100%",
						height: "100%",
					})}
					onClick={handleClose}
				>
					<section
						className={css({
							border: "2px solid token(colors.primaryText)",
							padding: "20px",
						})}
						onClick={(e) => e.stopPropagation()}
					>
						{children}
					</section>
				</section>
			</section>
		)
	);
}
