import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { DappStarter } from "../target/types/dapp_starter";
import * as assert from "assert";

describe("dapp-starter", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());
  const config = anchor.web3.Keypair.generate();

  const program = anchor.workspace.DappStarter as Program<DappStarter>;

  it("Is initialized!", async () => {
    const tx = await program.rpc.initialize({
      accounts: {
        config: config.publicKey,
        deployer: program.provider.wallet.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      },
      signers: [config],
    });
    console.log("Your transaction signature", tx);

    // Get the new counter value
    const counter = await program.account.counter.fetch(config.publicKey);
    assert.equal(counter.count, 0, "expect counter value to be 0");
  });

  it("Increment!", async () => {
    const tx = await program.rpc.increment({
      accounts: {
        config: config.publicKey,
        user: program.provider.wallet.publicKey,
      },
      signers: [],
    });

    // Get the new counter value
    const counter = await program.account.counter.fetch(config.publicKey);
    assert.equal(counter.count, 1, "expect counter value to be 1");
  });
});
