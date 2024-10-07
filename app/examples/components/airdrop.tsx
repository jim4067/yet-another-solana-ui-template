"use client";

import { Button } from "@/app/ui/elements/Button";
import { flex } from "@/styled-system/patterns";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { toast } from "sonner";

export const AirdropBtn = () => {
	const { connection } = useConnection();
	const { publicKey } = useWallet();

	async function requestAirdrop() {
		if (!connection || !publicKey) return;

		toast.promise(connection.requestAirdrop(publicKey, 1000), {
			loading: "requesting airdrop....",
			success: (signature: any) => {
				return `${signature}`;
			},
		});
	}

	return (
		<section className={flex({ flexDir: "column", gap: 4 })}>
			<Button onClick={requestAirdrop}>Airdrop</Button>
		</section>
	);
};
