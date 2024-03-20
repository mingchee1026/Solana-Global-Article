import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { SolanaGlobalArticle } from "../target/types/solana_global_article";
import { expect } from "chai";

describe("solana-global-article", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.SolanaGlobalArticle as Program<SolanaGlobalArticle>;

  it("Is initialized!", async () => {
    const deployerKeypair = anchor.web3.Keypair.generate();
    const personThatPays = program.provider.wallet;
    // Add your test here.
    const tx = await program.methods.initialize().accounts({
      article: deployerKeypair.publicKey,
      signer: personThatPays.publicKey,
      systemProgram: anchor.web3.SystemProgram.programId,
    })
    .signers([deployerKeypair])
    .rpc();
  });

  it("Should write an article with 1 word successfully", async () => {
    const deployerKeypair = anchor.web3.Keypair.generate();
    const personThatPays = program.provider.wallet;

    await program.methods.initialize().accounts({
      article: deployerKeypair.publicKey,
      signer: personThatPays.publicKey,
      systemProgram: anchor.web3.SystemProgram.programId,
    })
    .signers([deployerKeypair])
    .rpc();

    const tx = await program.methods.writeIntoArticle("I am HRCH").accounts({
      article: deployerKeypair.publicKey,
    })
    .signers([])
    .rpc();

    const articleData = await program.account.article.fetch(deployerKeypair.publicKey);
    expect(articleData.content).to.eq("I am HRCH ");
  });
});
