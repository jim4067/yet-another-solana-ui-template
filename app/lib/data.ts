import {
	DigitalAssetWithToken,
	fetchAllDigitalAssetWithTokenByOwner,
} from "@metaplex-foundation/mpl-token-metadata";
import { Umi, publicKey as UmiPublicKey } from "@metaplex-foundation/umi";
import { PublicKey } from "@solana/web3.js";

export async function fetchUserAssets(
	umiInstance: Umi,
	owner: PublicKey
): Promise<DigitalAssetWithToken[]> {
	return await fetchAllDigitalAssetWithTokenByOwner(
		umiInstance,
		UmiPublicKey(owner)
	);
}
