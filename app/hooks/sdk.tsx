import { AnchorProvider } from "@coral-xyz/anchor";
import { MarketplaceSDK } from "@jimii/anchor-marketplace";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";

export const useMarketplaceSDK = () => {
	const wallet = useAnchorWallet();
	const { connection } = useConnection();

	const [marketplaceSDK, setMarketplaceSDK] = useState<MarketplaceSDK>();
	const [error, setError] = useState<null | unknown>(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const instantiateSDK = async () => {
			setIsLoading(true);
			setError(null);

			try {
				if (!wallet) {
					throw new WalletNotConnectedError();
				}

				const provider = new AnchorProvider(
					connection,
					wallet,
					AnchorProvider.defaultOptions()
				);

				if (!provider) return;

				const sdk = new MarketplaceSDK(provider, connection);
				setMarketplaceSDK(sdk);
			} catch (err: unknown) {
				setError(err);
			} finally {
				setIsLoading(false);
			}
		};

		instantiateSDK();
	}, [connection, wallet]);

	return { marketplaceSDK, error, isLoading };
};
