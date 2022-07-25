import React, { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CircleIcon from '@mui/icons-material/Circle';
import SideBar from './sideBar';

export default function Header() {
  const [color, setColor] = useState('red');
  // const { drawer, setDrawer } = useContext(AppContext);
  const [drawer, setDrawer] = useState(false);

  const handleDrawer = (val) => {
    setDrawer(val);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
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
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Box color={color}>
            <CircleIcon />
          </Box>
        </Toolbar>
      </AppBar>
      <SideBar drawer={drawer} handleDrawer={handleDrawer} />
    </Box>
  );
}
