import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../store/context';
import { Keypair } from '@solana/web3.js';
import { Button, Flex } from '../../shared/sharedStyles';
import Nav from '../../shared/nav';
import { useNavigate } from 'react-router-dom';
var CryptoJS = require('crypto-js');
const bs58 = require('bs58');

export default function ExportWallet() {
  const { wallets } = useContext(AppContext);
  const [secret, setSecret] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const data = wallets.filter((item, i) => item.active)[0];
    // const keypair = data.keypair.secretKey;

    var bytes = CryptoJS.AES.decrypt(data.keypair.secretKey, 'secret');
    console.log('my bytes', bytes);
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    const ary = Object.values(decryptedData);
    const sec = new Uint8Array(ary);

    const kpair = Keypair.fromSecretKey(Uint8Array.from(sec));
    const bts = Uint8Array.from(sec);
    setSecret(bs58.encode(bts));
  }, [wallets]);

  return (
    <div style={{ height: '480px', backgroundColor: '#262626' }}>
      <Nav text='Export Private Key' />
      <Flex
        direction='column'
        align='center'
        justify='space-between'
        height='85%'
      >
        <Flex
          align='center'
          justify='center'
          radius='7px'
          height='200px'
          width='90%'
          border='1px solid #333333'
          backgroundColor='white'
          margin='60px 0'
        >
          <p
            style={{
              margin: '0',
              padding: '0 40px',
              color: '#262626',
              textAlign: 'center',
              wordBreak: 'break-all',
              lineHeight: '20px',
            }}
          >
            {secret}
          </p>
        </Flex>
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
          Done
        </Button>
      </Flex>
    </div>
  );
}
