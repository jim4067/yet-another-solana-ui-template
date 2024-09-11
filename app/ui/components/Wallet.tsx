"use client";

import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
	ConnectionProvider,
	WalletProvider,
} from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import React, { ReactNode, useMemo } from "react";

export const Wallet = ({ children }: { children: ReactNode }) => {
	const network = WalletAdapterNetwork.Devnet; //todo

	const endpoint = useMemo(() => clusterApiUrl(network), [network]);
	const wallets = useMemo(
		() => [new PhantomWalletAdapter()],
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[network]
	);

	return (
		<ConnectionProvider endpoint={endpoint}>
			<WalletProvider wallets={wallets} autoConnect>
				{children}
			</WalletProvider>
		</ConnectionProvider>
	);
};
