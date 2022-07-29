import React, { useContext, useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CircleIcon from '@mui/icons-material/Circle';
import SideBar from './sideBar';
import { Stack } from '@mui/material';
import { AppContext } from '../store/context';
import { ellipsify } from '../helper/helper';

export default function Header() {
  const [color, setColor] = useState('red');
  const { wallets } = useContext(AppContext);
  const [drawer, setDrawer] = useState(false);
  const [data, setData] = useState({});

  // console.log("from header",wallets[1].keypair.publicKey)

  const handleDrawer = (val) => {
    setDrawer(val);
  };

  useEffect(() => {
    if (wallets.length > 0) {
      const account = wallets.filter((item) => item.active)[0];
      setData(account);
    }
  }, [wallets]);

  const handleCopy = () => {
    const key = data.keypair.publicKey;
    navigator.clipboard.writeText(key);
  };

  return (
    <Box sx={{ flexGrow: 1, width: '360px' }}>
      <AppBar
        position='static'
        sx={{
          height: '40px',
          backgroundColor: 'rgb(34,34,34)',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Stack
          direction='row'
          justifyContent='center'
          alignItems='center'
          padding=' 0 10px'
        >
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            onClick={() => setDrawer(!drawer)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            textAlign='center'
            sx={{ flexGrow: 1, cursor: 'pointer' }}
            onClick={handleCopy}
          >
            {`${wallets.length > 0 ? data.title : 'No Account'} (${
              wallets.length > 0 && data.keypair
                ? ellipsify(data.keypair.publicKey.toString())
                : ellipsify('00000000')
            })`}
          </Typography>
          <Box color={color}>
            <CircleIcon />
          </Box>
        </Stack>
      </AppBar>
      <SideBar drawer={drawer} handleDrawer={handleDrawer} />
    </Box>
  );
}
