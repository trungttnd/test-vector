import * as anchor from "@project-serum/anchor";
import { Connection } from "@solana/web3.js";
import { DappStarter } from "artifacts/dapp_starter";

export const getCounter = async (
  program: anchor.Program<DappStarter>,
  counterAddr: anchor.web3.PublicKey
) => {
  const accountData = await program.account.counter.fetch(counterAddr);
  return accountData.count;
};
export const getBalance = async (
  program: anchor.Program<DappStarter>,
  connection: Connection,
  address: anchor.web3.PublicKey
) => {
  const configs = await program.account.counter.all();
  console.log(configs.map((c) => c.publicKey.toBase58()))
  const balance = await connection.getBalance(address);
  console.log(address.toBase58(), "==>", balance);
}
export const initialize = async (
  program: anchor.Program<DappStarter>
): Promise<anchor.web3.PublicKey> => {
  let config = new anchor.web3.Keypair();

  let tx = await program.rpc.initialize({
    accounts: {
      config: config.publicKey,
      deployer: program.provider.wallet.publicKey,
      systemProgram: anchor.web3.SystemProgram.programId,
    },
    signers: [config],
  });
  return config.publicKey;
};

export const increment = async (
  program: anchor.Program<DappStarter>,
  configPubkey: anchor.web3.PublicKey
) => {
  let tx = await program.rpc.increment({
    accounts: {
      config: configPubkey,
      user: program.provider.wallet.publicKey,
    },
    signers: [],
  });

  return tx;
};

export const close = async (
  program: anchor.Program<DappStarter>,
  account: anchor.web3.PublicKey,
  destination: anchor.web3.PublicKey
) => {
  let tx = await program.rpc.close({
    accounts: {
      account: account,
      destination: destination
    },
    signers: [],
  });

  return tx;
}
