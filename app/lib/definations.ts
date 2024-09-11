import { BN } from "@coral-xyz/anchor";
import { DigitalAssetWithToken } from "@metaplex-foundation/mpl-token-metadata";

export type MarketplaceAsset = Partial<
	DigitalAssetWithToken & { image: string; name: string }
>;

export type ListedAsset = MarketplaceAsset & {
	price: BN;
};
