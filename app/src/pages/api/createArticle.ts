// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Program, AnchorProvider, web3 } from "@project-serum/anchor";
import { AnchorWallet } from "@solana/wallet-adapter-react";
import { SolanaGlobalArticle } from "./types/solana_global_article";
import { connection, commitmentLevel, articleprogramId, articleprogramInterface } from "./utils/constants";

export default function createArticle(
  threeWords: string,
  wallet: AnchorWallet,
  article: web3.Keypair
) {
  
}
