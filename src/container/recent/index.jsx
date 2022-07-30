import React, { useContext, useEffect, useState } from 'react';
import ItemCard from '../../components/itemCard';
import { Flex } from '../../shared/sharedStyles';
import { AppContext } from '../../store/context';
import { Keypair, PublicKey } from '@solana/web3.js';
import RecentCard from '../../components/itemCard/recentCard';


export default function Recent() {
  const { connection, wallets } = useContext(AppContext);
  const [transaction, setTransaction] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTransactions = async (address, numTx) => {
    const pubKey = new PublicKey(address);
    let transactionList = await connection.getSignaturesForAddress(pubKey, {
      limit: numTx,
    });

    let signatureList = transactionList.map(
      (transaction) => transaction.signature
    );
    // to get transaction details;
    let transactionDetails = await connection.getParsedTransactions(
      signatureList
    );
    // looping to get details
    let array = [];
    transactionList.forEach((transaction, i) => {
      const date = new Date(transaction.blockTime * 1000);
      const payload = {
        no: i + 1,
        signature: transaction.signature,
        time: date,
        status: transaction.confirmationStatus,
        image: 'https://cdn-icons-png.flaticon.com/512/189/189726.png',
      };
      array.push(payload);
      // console.log(payload);
      // console.log(`Transaction No: ${i + 1}`);
      // console.log(`Signature: ${transaction.signature}`);
      // console.log(`Time: ${date}`);
      // console.log(`Status: ${transaction.confirmationStatus}`);
    });
    setTransaction(array);
  };

  console.log('all transaction', transaction);

  useEffect(() => {
    (async () => {
      if (wallets.length > 0) {
        setLoading(true);
        const address = wallets.filter((item, i) => item.active)[0].keypair
          .publicKey;
        await getTransactions(address, 5);
        setLoading(false);
      }
    })();
  }, [wallets]);

  return (
    <Flex direction='column'>
      <h2
        style={{
          margin: '15px 0',
          padding: '0px',
          textAlign: 'center',
          color: 'white',
        }}
      >
        Recent Activity
      </h2>
      {!loading ? (
        transaction.map((item, i) => <RecentCard item={item} key={i} />)
      ) : (
        <p style={{ textAlign: 'center', color: 'white' }}>Loading...</p>
      )}
    </Flex>
  );
}
