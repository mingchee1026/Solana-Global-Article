import idl from "../idl/solana_global_article.json";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

/* Constants for RPC Connection the Solana Blockchain */
export const commitmentLevel = "processed";
export const endpoint =
  process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL || clusterApiUrl("devnet");
export const connection = new Connection(endpoint, commitmentLevel);

/* Constants for the Deployed Program */
export const articleprogramId = new PublicKey(idl.metadata.address);
export const articleprogramInterface = JSON.parse(JSON.stringify(idl));