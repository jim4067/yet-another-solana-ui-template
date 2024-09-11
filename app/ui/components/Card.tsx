import { ListedAsset, MarketplaceAsset } from "@/app/lib/definations";
import { flex } from "@/styled-system/patterns";
import { css } from "@styled-system/css";
import Image from "next/image";
import Link from "next/link";

type CardPops = {
	image: string;
	title: string;
	collection: string;
};

export const Card = ({ image, title, collection }: CardPops) => {
	return (
		<section className={flex({ flexDir: "column", gap: 4 })}>
			<section
				className={flex({
					maxW: "220px",
					height: "220px",
					justifyContent: "center",
					_hover: {
						cursor: "pointer",
					},
				})}
			>
				<Image
					style={{
						height: "220px",
						width: "fit-content",
						objectFit: "cover",
						borderRadius: "16px",
					}}
					src={image}
					quality={100}
					width={220}
					height={220}
					alt="solana logo"
					objectFit="cover"
				/>
			</section>
			<section
				className={flex({
					justifyContent: "space-between",
					maxW: "220px",
				})}
			>
				<span
					className={css({
						color: "textSecondary",
						textOverflow: "ellipsis",
						textWrap: "pretty",
					})}
				>
					{collection}
				</span>
				<span
					className={css({
						color: "textTertiary",
						textOverflow: "ellipsis",
						textWrap: "pretty",
					})}
				>
					{title}
				</span>
			</section>
		</section>
	);
};

type CardListProps = {
	assets: Array<MarketplaceAsset | ListedAsset>;
};
export function CardList({ assets }: CardListProps) {
	return (
		<section
			className={flex({
				gap: 12,
				justifyContent: "space-between",
				flexWrap: "wrap",
			})}
		>
			{assets?.map((nft: MarketplaceAsset, index: number) => (
				<Link
					key={nft.mint?.publicKey}
					href={`mint/${nft.mint?.publicKey}`}
				>
					<Card
						title={nft?.name ?? "unknown"}
						collection={nft?.metadata?.name ?? ""}
						image={nft?.image ?? ""}
					/>
				</Link>
			))}
		</section>
	);
}
