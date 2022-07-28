import React from 'react';
import styled from 'styled-components';
import { Flex } from '../../shared/sharedStyles';
import { IoIosArrowForward } from 'react-icons/io';

const Para = styled.p`
  margin: 0px;
  padding: 2px 0;
  text-align: left;
  color: ${(props) => props.color || null};
  font-weight: ${(props) => props.weight || null};
`;

export default function SettingsItem({ item }) {
  return (
    <div>
      <Flex
        direction='row'
        align='center'
        padding='10px'
        radius='7px'
        margin='10px 0'
        justify='space-between'
        backgroundColor='#333333'
      >
        <Flex direction='column' margin='0px 10px' wrap='wrap' justify='center'>
          <Para color="white" weight='bold'>{item.title}</Para>
          <Para color='#6b6a6a'>{`${item.description}`}</Para>
        </Flex>
        <IoIosArrowForward fontSize='20px' />
      </Flex>
    </div>
  );
}
