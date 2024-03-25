// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Program, AnchorProvider, web3 } from "@project-serum/anchor";
import { AnchorWallet } from "@solana/wallet-adapter-react";
import { SystemProgram } from "@solana/web3.js";
import { SolanaGlobalArticle } from "./types/solana_global_article";
import { connection, commitmentLevel, articleprogramId, articleprogramInterface } from "./utils/constants";

export async function initializeArticle(
  program: Program,
  wallet: AnchorWallet,
  article: web3.Keypair
) {
  if (program === undefined || wallet === undefined) {
    return undefined;
  }

  return await program.methods
    .initialize()
    .accounts({
      article: article.publicKey,
      signer: wallet.publicKey,
      systemProgram: SystemProgram.programId,
    })
    .signers([article])
    .rpc();
}

export function createArticle(
  threeWords: string,
  program: Program,
  wallet: AnchorWallet,
  article: web3.Keypair
) {
  
}

export function resetArticle(
  program: Program,
  wallet: AnchorWallet,
  article: web3.Keypair
) {
  
}
