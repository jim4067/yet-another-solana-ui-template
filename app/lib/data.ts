import {
	DigitalAsset,
	fetchDigitalAssetWithAssociatedToken,
} from "@metaplex-foundation/mpl-token-metadata";
import {
	isSome,
	Umi,
	publicKey as UmiPublicKey,
} from "@metaplex-foundation/umi";
import { PublicKey } from "@solana/web3.js";
import axios from "axios";

export async function fetchAssetByMint(
	umiInstance: Umi,
	mint: string,
	owner: PublicKey
): Promise<DigitalAsset & { name: string; image: string }> {
	const resp = await fetchDigitalAssetWithAssociatedToken(
		umiInstance,
		UmiPublicKey(mint),
		UmiPublicKey(owner)
	);
	const image = (await axios.get(resp.metadata.uri)).data.image;
	const name = resp.metadata.name;

	return {
		...resp,
		image,
		name,
	};
}
