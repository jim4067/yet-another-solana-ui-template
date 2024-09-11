import { mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata";
import { Umi } from "@metaplex-foundation/umi";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";

export const useUmi = () => {
	const wallet = useAnchorWallet();
	const { connection } = useConnection();

	const [umiInstance, setUmiInstance] = useState<Umi>();
	const [error, setError] = useState<null | unknown>(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const instantiateUmi = async () => {
			setIsLoading(true);
			setError(null);

			try {
				if (!wallet) {
					throw new WalletNotConnectedError();
				}

				const umi = createUmi(connection)
					.use(walletAdapterIdentity(wallet))
					.use(mplTokenMetadata());

				setUmiInstance(umi);
			} catch (err: unknown) {
				setError(err);
			} finally {
				setIsLoading(false);
			}
		};

		instantiateUmi();
	}, [connection, wallet]);

	return { umiInstance, error, isLoading };
};
