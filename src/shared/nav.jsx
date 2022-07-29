import React from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { Flex } from './sharedStyles';

export default function Nav({ text }) {
  const navigate = useNavigate();
  return (
    <Flex >
      <Flex
        basis='10%'
        cursor='pointer'
        justify='center'
        align='center'
        onClick={() => navigate('/', { replace: true })}
      >
        <IoMdArrowRoundBack color="#6b6a6a" fontSize='25px' />
      </Flex>
      <Flex basis='80%' justify='center'>
        <p style={{color: 'white', fontWeight:"500", fontSize: '20px', padding: '0 auto'}}>{text}</p>
      </Flex>
    </Flex>
  );
}
