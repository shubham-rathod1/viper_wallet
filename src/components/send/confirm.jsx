import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../../shared/nav';
import { Button, Flex, Input } from '../../shared/sharedStyles';
import { AppContext } from '../../store/context';
import { BiDownArrowAlt } from 'react-icons/bi';

const Img = styled.div`
  background-image: ${(props) => props.image || null};
  background-size: cover;
  background-position: center;
  height: 70px;
  width: 70px;
  margin: 20px auto;
`;

export default function Confirm({ details, handleSend }) {
  const { wallets, connection } = useContext(AppContext);
  const navigate = useNavigate();
  console.log('details', details);
  return (
    <div style={{ height: '475px', backgroundColor: '#262626' }}>
      <Nav text='Confirm Send' />
      <Flex direction='column' align='center' justify='space-between'>
        <Flex
          direction='column'
          align='center'
          width='90%'
          height='261px'
          radius='7px'
          backgroundColor='#333333'
        >
          <Img
            image={`url('https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png')`}
          />
          <p
            style={{
              margin: '0',
              padding: '0',
              fontSize: '35px',
              color: 'white',
            }}
          >
            {details.val} SOL
          </p>
          <BiDownArrowAlt
            style={{ padding: '10px 0' }}
            fontSize='28px'
            color='#555454'
          />
          <div>
            <p
              style={{
                margin: '0',
                color: 'white',
                textAlign: 'center',
                wordBreak:"break-all",
                padding: '0 25px'
              }}
            >
              {details.to}
            </p>
          </div>
        </Flex>
        <Flex direction='column' align='center' margin='20px 0'>
          <Flex
            direction='row'
            width='95%'
            align='center'
            border='1px solid #333333'
            margin='10px'
            padding='0'
            justify='space-between'
            radius='5px'
          >
            <p style={{ color: 'white', padding: '0 6px' }}>Network Fee</p>
            <p style={{ color: 'white', padding: '0 6px' }}>$0.00021</p>
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
              //   onClick={handleSend}
            >
              Send
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
