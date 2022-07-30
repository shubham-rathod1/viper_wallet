import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Button, Flex } from '../../shared/sharedStyles';
// web3 imports
import { Keypair } from '@solana/web3.js';
import { AppContext } from '../../store/context';
import { useNavigate } from 'react-router-dom';
import { saveData } from '../../store/localStorage';
var CryptoJS = require('crypto-js');

const Para = styled.p`
  margin: 0px;
  padding: 2px 0;
  text-align: left;
  color: ${(props) => props.color || null};
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
    const PublicKey = keypair.publicKey.toString();
    console.log(keypair.secretKey);
    const encrypt = CryptoJS.AES.encrypt(
      JSON.stringify(keypair.secretKey),
      'secret'
    ).toString();

    let pairs = {
      publicKey: PublicKey,
      secretKey: encrypt,
    };
    const newData = wallets?.map(
      (wallet) => (wallet = { ...wallet, active: false })
    );
    let payload = {
      keypair: pairs,
      title: `Wallet ${count + 1}`,
      active: true,
    };

    console.log('from create', payload);
    saveData('accounts', [...newData, payload]);
    setWallets([...newData, payload]);
  };
  console.log('wallets', wallets);

  const importWallet = async () => {
    console.log('imported');
    navigate('/import', { replace: true });
  };

  return (
    <div style={{ height: '480px', backgroundColor: '#262626' }}>
      <Flex justify='center' padding='15px 0'>
        <h2 style={{ margin: '0', padding: '0', color: 'white' }}>
          Add / Connection Wallet
        </h2>
      </Flex>
      <Flex direction='column' justify='space-between' margin='30px 0'>
        <Flex direction='column'>
          {array.map((item, i) => (
            <Flex
              key={i}
              direction='row'
              align='center'
              padding='18px 0'
              radius='7px'
              margin='10px 10px'
              cursor='pointer'
              backgroundColor='#333333'
              onClick={item.type === 'create' ? createWallet : importWallet}
            >
              <Flex
                direction='column'
                margin='0px 10px'
                wrap='wrap'
                justify='center'
              >
                <Para color='white' weight='bold'>
                  {item.title}
                </Para>
                <Para color='#6b6a6a'>{`${item.description}`}</Para>
              </Flex>
            </Flex>
          ))}
        </Flex>
        <Flex justify='center' margin="120px 0 0 0">
          <Button
            width='94%'
            padding='13px'
            radius='5px'
            background='#333333'
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
