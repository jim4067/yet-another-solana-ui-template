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

type StakeBtnProps = Omit<ButtonProps, "children">;

export const SelectAllBtn = ({ onClick }: StakeBtnProps) => (
	<button
		className={flex({
			background: "transparent",
			borderWidth: "1px",
			borderStyle: "solid",
			borderColor: "borderPrimary",
			borderRadius: "999px",
			color: "textPrimary",
			fontSize: "headline18",
			fontWeight: "headline18",
			height: "100%",
			width: "fit-content",
			padding: "8px 24px",
			whiteSpace: "nowrap",
			_hover: {
				cursor: "pointer",
			},
		})}
		onClick={onClick}
	>
		Select All
	</button>
);

export const StakeBtn = ({ onClick }: StakeBtnProps) => (
	<button
		className={flex({
			background: "backgroundSecondary",
			borderRadius: "999px",
			color: "textFixedLight",
			fontSize: "headline18",
			fontWeight: "headline18",
			width: "100%",
			padding: "8px 24px",
			_hover: {
				cursor: "pointer",
			},
		})}
		onClick={onClick}
	>
		Stake
	</button>
);
