import React from 'react';
import { Button, Flex } from '../../shared/sharedStyles';
import Nav from '../../shared/nav';

export default function Deposit() {
  return (
    <div>
      <Nav text='Deposit' />
      <Flex direction='column' align='center'>
        {/* here we will display generated barcode */}
        <div
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '7px',
            border: '1px solid red',
            margin: '20px',
          }}
        ></div>
        <Flex
          direction='row'
          padding='10px'
          border='1px solid red'
          width='80%'
          justify='space-between'
          align='center'
          radius='5px'
        >
          <div>{`Wallet 1 (AHDB....FUJ)`}</div>
          <Button
            background='blue'
            radius='50px'
            padding='6px'
            width='50px'
            color='white'
          >
            Copy
          </Button>
        </Flex>
        <p style={{ textAlign: 'center', padding: '0 15px', fontSize: '15px' }}>
          This address can only be used to receive SOL and SPL tokens on solana.
        </p>
        <Button
          width='85%'
          padding='13px'
          radius='5px'
          background='teal'
          color='white'
          weight='bold'
          size='16px'
        >
          Close
        </Button>
      </Flex>
    </div>
  );
}
