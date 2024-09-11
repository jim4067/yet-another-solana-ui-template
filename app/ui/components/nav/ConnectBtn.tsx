"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { flex, vstack } from "@styled-system/patterns";
import React, { useState } from "react";

import { WalletDarkMode, WalletLightMode } from "@/theme/icons";
import { useTheme } from "next-themes";
import Image from "next/image";

import { clipAddress } from "@/app/lib/utils";
import { css } from "@/styled-system/css";
import { Button } from "../../elements/Button";
import Modal, { type ModalProps } from "../Modal";

export default function ConnectWalletBtn() {
	const { publicKey } = useWallet();
	const { theme } = useTheme();
	const [listWalletModal, setListWalletModal] = useState(false);

	let isConnected = publicKey ?? false;

	const closeModal = () => {
		setListWalletModal(false);
	};
	return (
		<section>
			<Button onClick={() => setListWalletModal(!listWalletModal)}>
				<span>
					{theme === "light" ? (
						<WalletDarkMode />
					) : (
						<WalletLightMode />
					)}
				</span>
				<span>
					{isConnected ? (
						<DisconnectWallet />
					) : (
						<>
							Connect Wallet
							<WalletListModal
								isOpen={listWalletModal}
								onClose={() => closeModal()}
							/>
						</>
					)}
				</span>
			</Button>
		</section>
	);
}

type WalletListModalProps = Omit<ModalProps, "children">;
function WalletListModal({ isOpen, onClose }: WalletListModalProps) {
	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				{/* ! hack to set modal width below that's why empty element */}
				<section style={{ width: "30vw" }}></section>{" "}
				<section
					className={css({
						color: "textFixedLight",
						fontSize: " headline30",
						fontWeight: " headline30",
						maxWidth: "100vw",
						padding: "20px 0",
					})}
				>
					Select Wallet
				</section>
				<section
					style={{
						fontWeight: "normal",
					}}
				>
					<WalletList />
				</section>
			</Modal>
		</>
	);
}

function WalletList() {
	const { wallets, select } = useWallet();

	const installedWallets = wallets.filter(
		(wallet) => wallet.readyState === "Installed"
	);

	return (
		<section
			className={vstack({
				alignItems: "flex-start",
				border: "2px solid token(colors.borderPrimary)",
				borderRadius: 20,
				color: "textFixedLight",
				gap: 2,
				padding: 6,
			})}
		>
			{installedWallets.length === 0 && (
				<section>
					Please Install a Compatible Solana wallet to continue
				</section>
			)}

			{installedWallets.map((wallet) => (
				<WalletItem
					key={wallet.adapter.name}
					name={wallet.adapter.name}
					iconSrc={wallet.adapter.icon}
					connect={() => select(wallet.adapter.name)}
				/>
			))}
		</section>
	);
}

type WalletItemProps = {
	name: string;
	iconSrc: string;
	connect: () => void;
};
function WalletItem({ name, iconSrc, connect }: WalletItemProps) {
	return (
		<section
			onClick={connect}
			className={flex({
				border: "2px solid token(colors.primaryText)",
				gap: 2,
				padding: "5px 10px",
				width: "100%",
				_hover: {
					background: "token(colors.accentLightBackground)",
					color: "token(colors.primaryText)",
					cursor: "pointer",
				},
			})}
		>
			<section>
				{/* <Image nextHeight={36} nextWidth={36} src={iconSrc} />
				 */}

				<Image
					style={{ objectFit: "cover" }}
					src={iconSrc}
					alt={"wallet icon"}
					height={36}
					width={36}
				/>
			</section>
			<section style={{ margin: "auto 0" }}>{name}</section>
		</section>
	);
}

function DisconnectWallet() {
	const { publicKey, disconnect } = useWallet();

	return (
		<span>
			<button onClick={disconnect}>
				{clipAddress(publicKey?.toBase58() ?? "unknown")}
			</button>
		</span>
	);
}
