import React from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Flex } from './sharedStyles';

export default function Nav({text}) {
  return (
    <Flex padding='0 5%'>
      <Flex basis='10%' border='1px solid red' justify='center' align='center'>
        <IoMdArrowRoundBack fontSize='23px' />
      </Flex>
      <Flex basis='80%' border='1px solid red' justify='center'>
        <p>{text}</p>
      </Flex>
    </Flex>
  );
}
