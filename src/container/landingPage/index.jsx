import React, { useContext, useEffect } from 'react';
import ItemCard from '../../components/itemCard';
import { Button, Flex } from '../../shared/sharedStyles';
// web3 imports
import { PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { AppContext } from '../../store/context';

const cards = [
  {
    title: 'Solana',
    image: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png',
    value: '2.39998',
  },
];

export default function LandingPage() {
  const { wallets, connection, currentBalance, setCurrentBalance } =
    useContext(AppContext);
  console.log(connection);
  useEffect(() => {
    if (wallets.length > 0) {
      const pair = wallets.filter((wallet, i) => wallet.active)[0].keypair
        .publicKey;
      (async () => {
        let wallet = new PublicKey(pair);
        const balance =
          (await connection.getBalance(wallet)) / LAMPORTS_PER_SOL;
        setCurrentBalance(balance);
      })();
    }
  }, [wallets]);

  return (
    <div>
      <div
        style={{
          width: '20px',
          height: '5px',
          border: '1px solid gray',
          margin: '30px auto',
          borderRadius: '2px',
          backgroundColor: 'gray',
        }}
      ></div>
      <Flex justify='center' align='center' padding='20px 5px'>
        {['Deposit', 'Send'].map((item, i) => (
          <Button
            key={i}
            background='#333333'
            border='none'
            margin='10px 5px'
            radius='7px'
            color='white'
            padding='10px'
            width='150px'
            weight='bold'
            hoverColor='#444444'
            onClick={() => console.log({ item })}
          >
            {item}
          </Button>
        ))}
      </Flex>
      {[
        {
          title: 'Solana',
          image:
            'https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png',
          value: wallets.length > 0 ? `${currentBalance} SOL` : "no account",
        },
      ].map((item, i) => (
        <ItemCard key={i} item={item} />
      ))}
    </div>
  );
}
