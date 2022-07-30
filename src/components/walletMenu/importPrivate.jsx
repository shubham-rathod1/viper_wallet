import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Nav from '../../shared/nav';
import { Button, Flex, Input } from '../../shared/sharedStyles';

// web3 imports
import { Keypair } from '@solana/web3.js';
import { AppContext } from '../../store/context';
import { saveData } from '../../store/localStorage';
var CryptoJS = require('crypto-js');
const bs58 = require('bs58');

const Img = styled.div`
  background-image: ${(props) => props.image || null};
  background-size: cover;
  background-position: center;
  height: 70px;
  width: 70px;
  margin: 20px auto;
`;

const init = {
  secret: '',
  name: '',
};

export default function ImportPrivate() {
  const { wallets, setWallets } = useContext(AppContext);
  const [data, setData] = useState(init);

  const handleImport = () => {
    if (data.secret !== '') {
      const decoded = bs58.decode(data.secret);
      const keypair = Keypair.fromSecretKey(Uint8Array.from(decoded));
      console.log(keypair, wallets);
      const ary = wallets.filter(
        (item, i) => item.keypair.publicKey === keypair.publicKey.toString()
      );
      if (ary.length > 0) {
        console.log('account already present!');
        return;
      }
      let count = wallets.length;
      const encrypt = CryptoJS.AES.encrypt(
        JSON.stringify(keypair.secretKey),
        'secret'
      ).toString();
      let pairs = {
        publicKey: keypair.publicKey.toString(),
        secretKey: encrypt,
      };
      const newData = wallets?.map(
        (wallet) => (wallet = { ...wallet, active: false })
      );
      let payload = {
        keypair: pairs,
        title: data.name ? data.name : `Wallet ${count + 1}`,
        active: true,
      };
      saveData('accounts', [...newData, payload]);
      setWallets([...newData, payload]);
      console.log(wallets);
    } else {
      return 'all fields required';
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    let payload = {
      ...data,
      [name]: e.target.value,
    };
    setData(payload);
  };

  return (
    <div style={{ height: '480px', backgroundColor: '#262626' }}>
      <Nav text='Import Private Key' />
      <Flex direction='column' align='center' height='85%'>
        <Img
          image={`url('https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png')`}
        />
        <Flex direction='column' width='90%' margin='20px auto'>
          <Input
            padding='15px'
            radius='5px'
            border='none'
            type='text'
            placeholder='Name (optional)'
            onChange={handleChange}
            name='name'
            margin='5px 0'
          />
          <textarea
            style={{
              margin: '0',
              padding: '10px 12px',
              color: '#262626',
              wordBreak: 'break-all',
              lineHeight: '20px',
              margin: '10px 0',
              borderRadius: '7px',
              outline: 'none',
            }}
            rows='6'
            cols='50'
            name='secret'
            onChange={handleChange}
          >
            Private Key
          </textarea>
        </Flex>
        <Button
          width='94%'
          padding='13px'
          radius='5px'
          background='#333333'
          color='white'
          weight='bold'
          size='16px'
          margin='0px 0 0 0'
          onClick={handleImport}
        >
          Import
        </Button>
      </Flex>
    </div>
  );
}
