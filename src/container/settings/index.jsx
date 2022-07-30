import React, { useContext, useEffect, useState } from 'react';
import SettingsItem from '../../components/settingItems';
import { Button, Flex, Input } from '../../shared/sharedStyles';
import { BsPencilFill } from 'react-icons/bs';
import { InputAdornment, TextField } from '@mui/material';
import { AppContext } from '../../store/context';
import { ellipsify } from '../../helper/helper';
import { useNavigate } from 'react-router-dom';
import { saveData } from '../../store/localStorage';

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
  const { wallets, setWallets } = useContext(AppContext);
  const [val, setVal] = useState('');
  const [walletTitle, setWalletTitle] = useState('');
  const navigate = useNavigate();
  const changeName = () => {
    const data = wallets?.map((item, i) =>
      item.active ? (item = { ...item, title: val }) : item
    );
    saveData("accounts",data);
    setWallets(data);
  };

  const handleClick = (i) => {
    if (i === 1) {
      console.log("network")
      navigate('/network', { replace: true });
    }
  };

  useEffect(() => {
    if (wallets.length > 0) {
      const data = wallets.filter((item, i) => item.active);
      setWalletTitle(data[0].title);
      console.log('my wallet', data[0].title);
    } else {
      setWalletTitle('account');
    }
  }, [wallets]);

  return (
    <>
      <Flex direction='column' align='center'>
        <Flex
          direction='row'
          justify='space-between'
          radius='5px'
          margin='30px 0 0px 0'
          align='center'
        >
          <TextField
            sx={{ outline: 'none', width: '230px' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <BsPencilFill fontSize='20px' color='#333333' />
                </InputAdornment>
              ),
            }}
            value={val}
            onChange={(e) => setVal(e.target.value)}
            onBlur={changeName}
          />
        </Flex>
        <p style={{ color: 'white' }}>{ellipsify(walletTitle)}</p>
      </Flex>
      {cards.map((item, i) => (
        <SettingsItem key={i} id={i} item={item} handleClick={handleClick} />
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
            onClick={ i === 0 ? () => navigate('/export', { replace: true }) : null}
          >
            {item}
          </Button>
        ))}
      </Flex>
    </>
  );
}
