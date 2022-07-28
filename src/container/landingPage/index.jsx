import React from 'react';
import ItemCard from '../../components/itemCard';
import { Button, Flex } from '../../shared/sharedStyles';

const cards = [
  {
    title: 'Solana',
    image: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png',
    value: '2.39998',
  },
];

export default function LandingPage() {
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
      <Flex justify='center' align='center' padding='20px 11px'>
        {['Deposit', 'Send'].map((item, i) => (
          <Button
            key={i}
            background='#333333'
            border='none'
            margin='10px 5px'
            radius='7px'
            color='white'
            padding='10px'
            width='135px'
            weight='bold'
            hoverColor='green'
            onClick={() => console.log({ item })}
          >
            {item}
          </Button>
        ))}
      </Flex>
      {cards.map((item, i) => (
        <ItemCard key={i} item={item} />
      ))}
    </div>
  );
}
