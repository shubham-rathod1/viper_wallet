import {
  Keypair,
  PublicKey,
  Connection,
  SystemProgram,
  LAMPORTS_PER_SOL,
  Transaction,
  sendAndConfirmTransaction,
} from '@solana/web3.js';
import { useEffect, useState } from 'react';
import './App.css';
// import * as bip39 from 'bip39';

// sign message with secret key
import nacl from 'tweetnacl';
import { decodeUTF8 } from 'tweetnacl-util';
// for buffer erro in transaction
import { Buffer } from 'buffer';
import LandingPage from '../landingPage';
import ItemCard from '../../components/itemCard';
import BasicTabs from '.';
// for nft balance
// import { Metaplex, keypairIdentity } from '@metaplex-foundation/js';
window.Buffer = Buffer;

// to convert to base58
const bs58 = require('bs58');

export default function Home() {
  const [wallet, setWallet] = useState(null);

  // creating wallet instance

  const createWallet = async () => {
    let keypair = Keypair.generate();
    setWallet(keypair);
    console.log(keypair);
  };

  // convert SecretKey to bs58 from Uint8Array
  const consvertSecret = () => {
    const bytes = Uint8Array.from(wallet.secretKey);
    console.log(bs58.encode(bytes));
    return bs58.encode(bytes);
  };
  //verify if keypair from secret key is right or not;
  const verifyKeypair = async () => {
    const publicKey = new PublicKey(wallet.publicKey.toString());
    const keypair = Keypair.fromSecretKey(Uint8Array.from(wallet.secretKey));
    console.log(keypair.publicKey.toBase58() === publicKey.toBase58());
    // true
  };

  // webpack is breaking because of bip39 package, fix it later

  // const mnemonic = bip39.generateMnemonic();
  const keyFromMnemonics = (mnemonic, password) => {
    // const seed = bip39.mnemonicToSeedSync(mnemonic, password); // (mnemonic, password)
    // const keypair = Keypair.fromSeed(seed.slice(0, 32));
    // console.log(`${keypair.publicKey.toBase58()}`); // 5ZWj7a1f8tWkjBESHKgrLmXshuXxqeY9SYcfbshpAqPG
  };

  const signMessage = async (secretKey) => {
    const keypair = Keypair.fromSecretKey(Uint8Array.from(secretKey));

    const message = 'The quick brown fox jumps over the lazy dog';
    const messageBytes = decodeUTF8(message);

    const signature = nacl.sign.detached(messageBytes, keypair.secretKey);
    const result = nacl.sign.detached.verify(
      messageBytes,
      signature,
      keypair.publicKey.toBytes()
    );

    console.log(result);
    // true
  };

  const sendSol = async () => {
    const fromKeypair = Keypair.generate();
    const toKeypair = Keypair.generate();

    const connection = new Connection(
      'https://api.devnet.solana.com',
      'confirmed'
    );
    console.log('This is connection', connection);

    const airdropSignature = await connection.requestAirdrop(
      fromKeypair.publicKey,
      LAMPORTS_PER_SOL
    );
    console.log('airdropSignature', airdropSignature);

    await connection.confirmTransaction(airdropSignature);

    const beforeBalance = await connection.getBalance(fromKeypair.publicKey);
    console.log('Before balance', beforeBalance.toString());

    // confirming that the airdrop went through
    const latestBlockHash = await connection.getLatestBlockhash();
    console.log(latestBlockHash);

    const lamportsToSend = 1000000;

    const transferTransaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: fromKeypair.publicKey,
        toPubkey: toKeypair.publicKey,
        lamports: lamportsToSend,
      })
    );
    console.log('transferTransaction', transferTransaction);

    await sendAndConfirmTransaction(connection, transferTransaction, [
      fromKeypair,
    ]);
    console.log(
      'afterBalance',
      (await connection.getBalance(toKeypair.publicKey)) / LAMPORTS_PER_SOL
    );
    console.log("it's done");
  };

  //   const getNftBalance = async () => {
  //     const connection = new Connection(
  //       'https://api.devnet.solana.com',
  //       'confirmed'
  //     );
  //     const keypair = Keypair.generate();

  //     const metaplex = new Metaplex(connection);
  //     metaplex.use(keypairIdentity(keypair));

  //     const owner = new PublicKey('2R4bHmSBHkHAskerTHE6GE1Fxbn31kaD5gHqpsPySVd7');
  //     const allNFTs = await metaplex.nfts().findAllByOwner(owner);

  //     console.log(allNFTs);
  //   };

  useEffect(() => {
    console.log('my sollet', window.solana);
  }, []);

  return (
    <div className='App'>
      {/* <h3>This is the wallet:- {wallet?.publicKey.toBase58()} </h3>

      <button onClick={createWallet}>Create wallet</button>
      <button onClick={verifyKeypair}>Test</button>
      <button onClick={consvertSecret}>Get secretKey</button>
      <button onClick={keyFromMnemonics}>Mnemonic</button>
      <button onClick={() => signMessage(wallet.secretKey)}>Sign</button>
      <button onClick={sendSol}>SendSol</button>
      <button>NftBalance</button> */}
      <BasicTabs />
    </div>
  );
}
