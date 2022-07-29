import React from 'react';
import ItemCard from '../../components/itemCard';
import { Flex } from '../../shared/sharedStyles';

const cards = [
  {
    title: 'Received 0.9 SOL',
    image: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png',
    value: 'From: 987654321',
    flag: 'received',
  },
  {
    title: '1234567890',
    image: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png',
    value: 'Success',
    flag: 'sent',
  },
  {
    title: '1234567890',
    image: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png',
    value: 'Failed',
    flag: 'sent',
  },
];

export default function Recent() {
  return (
    <Flex direction='column'>
      <h2 style={{ margin: '15px 0', padding: '0px', textAlign: 'center' }}>
        Recent Activity
      </h2>
      {cards.map((item, i) => (
        <ItemCard item={item} key={i} />
      ))}
    </Flex>
  );
}
