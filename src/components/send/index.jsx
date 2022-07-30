import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Nav from '../../shared/nav';
import { Button, Flex, Input } from '../../shared/sharedStyles';
import { MdAlternateEmail } from 'react-icons/md';
import { AppContext } from '../../store/context';
import { Buffer } from 'buffer';

// web3 imports
import {
  SystemProgram,
  LAMPORTS_PER_SOL,
  Transaction,
  sendAndConfirmTransaction,
  PublicKey,
  Keypair,
} from '@solana/web3.js';
import { useNavigate } from 'react-router-dom';
import Confirm from './confirm';
const web3 = require('@solana/web3.js');
var CryptoJS = require('crypto-js');

window.Buffer = Buffer;

const Img = styled.div`
  background-image: ${(props) => props.image || null};
  background-size: cover;
  background-position: center;
  height: 100px;
  width: 100px;
  margin: 30px auto;
`;

const init = { val: '', to: '' };

export default function Send() {
  const { wallets, connection } = useContext(AppContext);
  const [details, setDetails] = useState(init);
  const [next, setNext] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    let payload = { ...details, [name]: e.target.value };
    console.log('my payload', payload);
    setDetails(payload);
  };

  const handleNext = () => {
    if (details.val !== '' && details.to !== '') {
      setNext(true);
    } else {
      return 'empty fields';
    }
  };

  return next ? (
    <Confirm details={details} />
  ) : (
    <div style={{ height: '475px', backgroundColor: '#262626' }}>
      <Nav text='Send SOL' />
      <Flex direction='column' align='center'>
        <Img
          image={`url('https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png')`}
        />
        <Flex
          direction='column'
          align='center'
          height='100%'
          minHeight='240px'
          maxHeight='240px'
          justify='space-between'
        >
          <Flex direction='column' width='95%' align='center'>
            <Flex
              direction='row'
              justify='space-between'
              radius='5px'
              width='100%'
              margin='5px 0'
              align='center'
              backgroundColor='white'
            >
              <Input
                width='80%'
                padding='10px'
                radius='5px'
                border='none'
                type='text'
                placeholder='Recipients SOL address'
                onChange={handleChange}
                margin='5px 0'
                name='to'
              />
              <Button
                background='blue'
                radius='99px'
                width='30px'
                height='30px'
                margin='7px'
              >
                <MdAlternateEmail color='white' fontSize='17px' />
              </Button>
            </Flex>
            <Flex
              direction='row'
              justify='space-between'
              // border='1px solid red'
              radius='5px'
              width='100%'
              margin='5px 0'
              align='center'
              backgroundColor='white'
            >
              <Input
                width='80%'
                padding='10px'
                radius='5px'
                border='none'
                type='text'
                placeholder='Amount'
                name='val'
                onChange={handleChange}
                margin='5px 0'
              />
              <p style={{ margin: '0', padding: '0' }}>SOL</p>
              <Button background='blue' radius='20px' width='50px' margin='7px'>
                <p style={{ margin: '0', padding: '5px', color: 'white' }}>
                  Max
                </p>
              </Button>
            </Flex>
          </Flex>
          <Flex>
            <Button
              background='#333333'
              border='none'
              margin='10px 5px'
              radius='7px'
              color='white'
              padding='15px 30px'
              width='158px'
              weight='bold'
              hoverColor='#444444'
              onClick={() => navigate('/', { replace: true })}
            >
              Cancel
            </Button>
            <Button
              background='#333333'
              border='none'
              margin='10px 5px'
              radius='7px'
              color='white'
              padding='15px 30px'
              width='158px'
              weight='bold'
              hoverColor='#444444'
              onClick={handleNext}
            >
              Next
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
