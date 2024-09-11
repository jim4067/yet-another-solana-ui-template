import {
	fetchAllDigitalAssetWithTokenByOwner,
	fetchDigitalAssetWithAssociatedToken,
} from "@metaplex-foundation/mpl-token-metadata";
import {
	isSome,
	Umi,
	publicKey as UmiPublicKey,
} from "@metaplex-foundation/umi";
import { PublicKey } from "@solana/web3.js";
import axios from "axios";
import { MarketplaceAsset } from "./definations";

export async function fetchUserAssets(
	umiInstance: Umi,
	owner: PublicKey
): Promise<MarketplaceAsset[]> {
	const digitalAssets = await fetchAllDigitalAssetWithTokenByOwner(
		umiInstance,
		UmiPublicKey(owner)
	);

	// filter out collections
	const resp = await Promise.all(
		digitalAssets
			.filter((asset) => isSome(asset.metadata.collection))
			.map(async (asset) => {
				const offChainData = (await axios.get(asset.metadata.uri)).data;
				return {
					image: offChainData.image,
					name: offChainData.name,
					mint: asset.mint,
					offChainData,
				};
			})
	);

	return resp;
}

export async function fetchAssetByMint(
	umiInstance: Umi,
	mint: string,
	owner: PublicKey
): Promise<MarketplaceAsset> {
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
