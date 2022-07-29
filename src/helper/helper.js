import {
  Transaction,
  SystemProgram,
  PublicKey,
  Keypair,
  sendAndConfirmTransaction,
  LAMPORTS_PER_SOL
} from '@solana/web3.js';
import { Buffer } from 'buffer';

const web3 = require('@solana/web3.js');
var CryptoJS = require('crypto-js');
window.Buffer = Buffer;

export const ellipsify = (str) => {
  const length = str.length;
  if (str.length > 6) {
    return str.substring(0, 3) + '...' + str.substring(length - 3, length);
  } else {
    return str;
  }
};

export const estimateGas = async (connection, from, to, amount) => {
  const payer = web3.Keypair.generate();
  const payee = web3.Keypair.generate();
  console.log(connection, from, to, amount);
  const recentBlockhash = await connection.getLatestBlockhash();
  const lamports = amount * web3.LAMPORTS_PER_SOL;
  const transaction = new Transaction({
    recentBlockhash: recentBlockhash.blockhash,
    feePayer: from,
  }).add(
    SystemProgram.transfer({
      fromPubkey: from,
      toPubkey: to,
      lamports: lamports,
    })
  );

  const fees = await transaction.getEstimatedFee(connection);
  return fees;
};

export const sendTransaction = async (wallets, connection, val, to) => {
  const data = wallets.filter((ele) => ele.active)[0];
  const from = new PublicKey(data.keypair.publicKey);

  // const airdropSignature = await connection.requestAirdrop(
  //   fromKeypair.publicKey,
  //   LAMPORTS_PER_SOL
  // );
  // console.log('airdropSignature', airdropSignature);

  // await connection.confirmTransaction(airdropSignature);

  const beforeBalance = await connection.getBalance(from);
  console.log('Before balance', beforeBalance.toString());

  // confirming that the airdrop went through
  const latestBlockHash = await connection.getLatestBlockhash();
  console.log(latestBlockHash);

  const lamportsToSend = val * web3.LAMPORTS_PER_SOL;

  const transferTransaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: from,
      toPubkey: to,
      lamports: lamportsToSend,
    })
  );
  console.log('transferTransaction', transferTransaction);

  var bytes = CryptoJS.AES.decrypt(data.keypair.secretKey, 'secret');
  console.log("my bytes",bytes);
  var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  const ary = Object.values(decryptedData);
  console.log('my ary', ary);
  const sec = new Uint8Array(ary);
  console.log('my sec', sec);

  const kpair = Keypair.fromSecretKey(Uint8Array.from(sec));
  console.log('kpair', kpair);
  await sendAndConfirmTransaction(connection, transferTransaction, [kpair]);

  console.log(
    'afterBalance',
    (await connection.getBalance(new PublicKey(to))) / LAMPORTS_PER_SOL
  );
  console.log("it's done");
};
