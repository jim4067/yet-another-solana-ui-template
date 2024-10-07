"use client";

import { Button } from "@/app/ui/elements/Button";
import { flex } from "@/styled-system/patterns";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Transaction } from "@solana/web3.js";
import { toast } from "sonner";

export const SignMsgBtn = () => {
	const { connection } = useConnection();
	const { publicKey, signTransaction } = useWallet();

	async function requestSignMessage() {
		if (!connection || !publicKey || !signTransaction) return;

		const tx = new Transaction();
		tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
		tx.feePayer = publicKey;

		signTransaction(tx);
		toast.promise(connection.requestAirdrop(publicKey, 1000), {
			loading: "requesting signature....",
			success: "you have signed your transaction",
		});
	}

	return (
		<section className={flex({ flexDir: "column", gap: 4 })}>
			<Button onClick={requestSignMessage}>
				Request Wallet Signature
			</Button>
		</section>
	);
};
