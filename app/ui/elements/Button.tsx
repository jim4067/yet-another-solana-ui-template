import { css } from "@/styled-system/css";
import { flex } from "@/styled-system/patterns";

type ButtonProps = {
	children: React.ReactNode;
	onClick: () => void;
};

export const Button = ({ children, onClick }: ButtonProps) => (
	<section
		className={css({
			border: "1.5px solid ",
			borderRadius: "100px",
			height: "48px",
			overflow: "hidden",
			width: "fit-content",
		})}
	>
		<button
			className={flex({
				bgGradient: "btnBackgroundGradient",
				height: "100%",
				justifyContent: "center",
				alignItems: "center",
				gap: 2,
				padding: "0 20px",
				width: "100%",
				_hover: {
					bgGradient: "blackGradient",
					cursor: "pointer",
				},
			})}
			onClick={onClick}
		>
			{children}
		</button>
	</section>
);
