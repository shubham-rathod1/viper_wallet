import React from 'react';
import styled from 'styled-components';
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

export default function ItemCard({ item }) {
  return (
    <div>
      <Flex
        backgroundColor='#333333'
        direction='row'
        align='center'
        padding='10px'
        radius='7px'
        margin='10px 0'
      >
        <Img image={`url(${item.image})`} />
        <Flex direction='column' margin='0px 10px' wrap='wrap' justify='center'>
          <Para weight='bold' color='white'>
            {item.title}
          </Para>
          <Para color='#6b6a6a'>{`${item.value}`}</Para>
        </Flex>
      </Flex>
    </div>
  );
}
