import { flex } from "@/styled-system/patterns";
import { css } from "@styled-system/css";
import Image from "next/image";

type CardPops = {};

export const AirdropBtn = ({}: CardPops) => {
	return (
		<section className={flex({ flexDir: "column", gap: 4 })}>
			Airdrop yourself some sol
		</section>
	);
};
