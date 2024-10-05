import { css } from "@/styled-system/css";
import { container, flex } from "@styled-system/patterns";

export default function Page() {
	return (
		<section
			className={css({
				backgroundColor: "primaryBackground",
				color: "textSecondary",
				flex: 1,
				alignItems: "center",
				height: "50vh",
			})}
		>
			<section className={container({})}>
				<section
					className={flex({
						gap: 10,
						flexDir: "column",
						alignContent: "center",
						justifyContent: "center",
					})}
				>
					<section
						className={flex({
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							gap: "10",
						})}
					>
						<section>
							Yet another Solana UI template using - YASUT
						</section>
						<section>SOLANA + NEXT.JS + PANDA.CSS </section>
						<section>
							`git clone
							https://github.com/jim4067/yet-another-solana-ui-template.git
							`
						</section>
					</section>
				</section>
			</section>
		</section>
	);
}
