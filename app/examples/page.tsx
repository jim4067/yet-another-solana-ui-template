import { container, flex } from "@/styled-system/patterns";
import { AirdropBtn } from "./components/airdrop";
import { SignMsgBtn } from "./components/signMessage";

export default function Page() {
	return (
		<section
			className={flex({
				backgroundColor: "primaryBackground",
				flex: 1,
				justifyContent: "center",
			})}
		>
			<section
				className={container({
					display: "flex",
					gap: 20,
					flexDirection: "column",
					alignItems: "center",
					backgroundColor: "primaryBackground",
				})}
			>
				<section>
					<AirdropBtn />
				</section>
				<section>
					<SignMsgBtn />
				</section>
			</section>
		</section>
	);
}
