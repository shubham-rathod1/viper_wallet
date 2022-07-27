import React from 'react';
import SettingsItem from '../../components/settingItems';
import { Button, Flex, Input } from '../../shared/sharedStyles';
import { BsPencilFill } from 'react-icons/bs';

const cards = [
  {
    title: 'Address Book',
    description: 'Manage commonly used address',
  },
  {
    title: 'Change Network',
    description: 'Cofigure your Network settings',
  },
  {
    title: 'Address Book',
    description: 'Manage commonly used address',
  },
];

const buttons = [
  'Export Private Key',
  'Show Secret Recovery Phrase',
  'Reset Secret Recovery Phrase',
];

export default function Settings() {
  const handleChange = () => {};
  const value = 'wallet 1';
  return (
    <>
      <Flex direction='column' align='center'>
        <Flex
          direction='row'
          justify='space-between'
          border='1px solid red'
          radius='5px'
          width='50%'
          margin='30px 0 0px 0'
          align='center'
        >
          <Input
            width='80%'
            padding='10px'
            radius='5px'
            border='none'
            type='text'
            value={value}
            onChange={handleChange}
            margin='5px 0'
          />
          <Button
            background='transparent'
            width='30px'
            height='30px'
            margin='7px'
          >
            <BsPencilFill fontSize='17px' />
          </Button>
        </Flex>
        <p>(addr...ess)</p>
      </Flex>
      {cards.map((item, i) => (
        <SettingsItem key={i} item={item} />
      ))}
      <Flex direction='column' align='center'>
        {buttons.map((item, i) => (
          <Button
            key={i}
            width='94%'
            padding='13px'
            radius='5px'
            background={i === 0 || i === 1 ? 'teal' : 'red'}
            color='white'
            weight='bold'
            size='16px'
            margin='5px 0'
          >
            {item}
          </Button>
        ))}
      </Flex>
    </>
  );
}
