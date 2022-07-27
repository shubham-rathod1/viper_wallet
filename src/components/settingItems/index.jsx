import React from 'react';
import styled from 'styled-components';
import { Flex } from '../../shared/sharedStyles';
import { IoIosArrowForward } from 'react-icons/io';

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
  font-weight: ${(props) => props.weight || null};
`;

export default function SettingsItem({ item }) {
  console.log(item.image);
  return (
    <div>
      <Flex
        direction='row'
        align='center'
        padding='10px'
        border='1px solid red'
        radius='7px'
        margin='10px'
        justify='space-between'
      >
        <Flex direction='column' margin='0px 10px' wrap='wrap' justify='center'>
          <Para weight='bold'>{item.title}</Para>
          <Para>{`${item.description}`}</Para>
        </Flex>
        <IoIosArrowForward fontSize='20px' />
      </Flex>
    </div>
  );
}
