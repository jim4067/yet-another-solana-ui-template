// example hook to fetch user assets

import { Umi } from "@metaplex-foundation/umi";
import { PublicKey } from "@solana/web3.js";
import { useQuery } from "@tanstack/react-query";
import { fetchUserAssets } from "../lib/data";

export const useUserAssets = (umiInstance: Umi, owner: PublicKey) => {
	return useQuery({
		queryKey: ["usersAssets", umiInstance, owner],
		queryFn: () => fetchUserAssets(umiInstance, owner),
	});
};
