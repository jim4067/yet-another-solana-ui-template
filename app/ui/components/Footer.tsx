import { flex } from "@/styled-system/patterns";
import { css } from "@styled-system/css";
import Link from "next/link";

export default function Footer() {
	return (
		<section
			className={css({
				backgroundColor: "primaryBackground",
				// height: "20vh",
				paddingBottom: 6,
			})}
		>
			<section
				className={flex({
					justifyContent: "center",
					paddingY: 10,
				})}
			>
				<hr
					className={css({
						border: "none",
						bgGradient: "footerDividerGrad",
						height: "2px",
						width: "80vw",
					})}
				/>
			</section>

			<section
				className={flex({
					justifyContent: "center",
					flexDir: "column",
					alignItems: "center",
					gap: 10,
				})}
			>
				<section className={flex({ gap: 2, flexWrap: "wrap" })}>
					<section
						className={flex({
							gap: 2,
							_hover: {
								cursor: "pointer",
							},
						})}
					>
						<span>
							<Link href="https://github.com/jim4067/anchor-marketplace-ui">
								Fork Me
							</Link>
						</span>{" "}
						{/* //fixme: add link to GH */}
					</section>

					<span
						className={css({
							borderColor: "textTertiary",
							borderWidth: "1px",
						})}
					/>

					<section
						className={flex({
							gap: 2,
						})}
					>
						<span>Built with love by</span>
						<span>
							<Link href="https://twitter.com/jimii_47">
								Jimii
							</Link>{" "}
						</span>
					</section>
				</section>
			</section>
		</section>
	);
}
