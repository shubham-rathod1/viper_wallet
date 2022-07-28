import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Button, Flex } from '../../shared/sharedStyles';
// web3 imports
import { Keypair } from '@solana/web3.js';
import { AppContext } from '../../store/context';
import { useNavigate } from 'react-router-dom';

const Para = styled.p`
  margin: 0px;
  padding: 2px 0;
  text-align: left;
  font-weight: ${(props) => props.weight || null};
`;

const array = [
  {
    title: 'Create new Wallet',
    description: 'Generate new wallet address',
    type: 'create',
  },
  {
    title: 'Import Private Key',
    description: 'Import an existing wallet',
    type: 'import',
  },
];

export default function WalletMenu() {
  const { wallets, setWallets } = useContext(AppContext);

  const navigate = useNavigate();

  const createWallet = async () => {
    let count = wallets.length;
    let keypair = Keypair.generate();
    const publicKey = keypair.publicKey.toString();
    let pairs = {
      publicKey: publicKey,
      secretKey: keypair.secretKey,
    };
    const newData = wallets?.map(
      (wallet) => (wallet = { ...wallet, active: false })
    );
    let payload = {
      keypair: pairs,
      title: `Wallet ${count + 1}`,
      active: true,
    };
    setWallets([...newData, payload]);
  };
  console.log('wallets', wallets);

  const importWallet = async () => {
    console.log('imported');
  };

  return (
    <div style={{ height: '420px' }}>
      <Flex justify='center' padding='15px 0'>
        <h2 style={{ margin: '0', padding: '0' }}>Add / Connection Wallet</h2>
      </Flex>
      <Flex direction='column' justify='space-between' height='100%'>
        <Flex direction='column'>
          {array.map((item, i) => (
            <Flex
              key={i}
              direction='row'
              align='center'
              padding='10px'
              border='1px solid red'
              radius='7px'
              margin='10px'
              cursor='pointer'
              onClick={item.type === 'create' ? createWallet : importWallet}
            >
              <Flex
                direction='column'
                margin='0px 10px'
                wrap='wrap'
                justify='center'
              >
                <Para weight='bold'>{item.title}</Para>
                <Para>{`${item.description}`}</Para>
              </Flex>
            </Flex>
          ))}
        </Flex>
        <Flex justify='center' bottom='0px'>
          <Button
            width='94%'
            padding='13px'
            radius='5px'
            background='teal'
            color='white'
            weight='bold'
            size='16px'
            margin='5px 0'
            onClick={() => navigate('/', { replace: true })}
          >
            Close
          </Button>
        </Flex>
      </Flex>
    </div>
  );
}
