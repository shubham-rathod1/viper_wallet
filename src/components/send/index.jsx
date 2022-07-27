import React from 'react';
import styled from 'styled-components';
import Nav from '../../shared/nav';
import { Button, Flex, Input } from '../../shared/sharedStyles';
import { MdAlternateEmail } from 'react-icons/md';

const Img = styled.div`
  background-image: ${(props) => props.image || null};
  background-size: cover;
  background-position: center;
  height: 100px;
  width: 100px;
  margin: 40px auto;
`;

// const Input = styled.input`
//   width: ${(props) => props.width || null};
//   border-radius: ${(props) => props.radius || null};
//   placeholder: ${(props) => props.placeholder || null};
//   margin: ${(props) => props.margin || null};
//   padding: ${(props) => props.padding || null};
//   border: ${(props) => props.border || 'none'};
//   &:active {
//     border: ${(props) => props.border || "none"};
//   }
// `;

export default function Send() {
  const handleChange = () => {};
  return (
    <div>
      <Nav text='Send SOL' />
      <Flex direction='column' align='center'>
        <Img
          image={`url('https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png')`}
        />
        <Flex
          direction='row'
          justify='space-between'
          border='1px solid red'
          radius='5px'
          width='80%'
          margin='5px 0'
          align='center'
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
          border='1px solid red'
          radius='5px'
          width='80%'
          margin='5px 0'
          align='center'
        >
          <Input
            width='80%'
            padding='10px'
            radius='5px'
            border='none'
            type='text'
            placeholder='Amount'
            onChange={handleChange}
            margin='5px 0'
          />
          <p style={{ margin: '0', padding: '0' }}>SOL</p>
          <Button background='blue' radius='20px' width='50px' margin='7px'>
            <p style={{ margin: '0', padding: '5px', color: 'white' }}>Max</p>
          </Button>
        </Flex>
      </Flex>
    </div>
  );
}
