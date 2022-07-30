import React from 'react';
import styled from 'styled-components';
import { ellipsify } from '../../helper/helper';
import { Flex } from '../../shared/sharedStyles';

const Img = styled.div`
  background-image: ${(props) => props.image || null};
  background-size: cover;
  background-position: center;
  height: 45px;
  width: 45px;
`;

const Para = styled.p`
  margin: 0px;
  padding: 2px 0;
  text-align: left;
  color: ${(props) => props.color || null};
  font-weight: ${(props) => props.weight || null};
`;

export default function RecentCard({ item }) {
  const handleRedirect = () => {
    const url = `https://solscan.io/tx/${item.signature}?cluster=devnet`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div>
      <Flex
        backgroundColor='#333333'
        direction='row'
        align='center'
        padding='10px'
        radius='7px'
        margin='10px 0'
        cursor='pointer'
        onClick={handleRedirect}
      >
        <Img image={`url(${item.image})`} />
        <Flex direction='column' margin='0px 10px' wrap='wrap' justify='center'>
          <Para weight='bold' color='white'>
            <p
              style={{
                margin: '0',
                padding: '0',
                color: 'white',
                textOverflow: 'ellipsis',
              }}
            >
              Signature: {ellipsify(item.signature)}
            </p>
          </Para>
          <Para color='#6b6a6a'>{`Status: ${item.status}`}</Para>
        </Flex>
      </Flex>
    </div>
  );
}
