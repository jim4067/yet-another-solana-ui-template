import { PublicKey } from "@solana/web3.js";
import { ListedAsset } from "./definations";

export function clipAddress(address: string): string {
	return (
		address.substring(0, 4) +
		"..." +
		address.substring(address.length - 4, address.length)
	);
}

export const replacer = (key: any, value: any) =>
	typeof value === "bigint" ? { $bigint: value.toString() } : value;

export const updateLocalStorage = (key: string, value: any) => {
	localStorage.setItem(key, JSON.stringify(value, replacer));
};

export const removeFromListedAssets = (
	mint: string,
	listedAssets: ListedAsset[]
): ListedAsset[] => {
	const index = listedAssets.findIndex((asset) => asset?.publicKey === mint);
	listedAssets.splice(index, 1);
	console.log(listedAssets);
	return listedAssets;
};
