import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { AppContext } from '../store/context';

export default function SideBar({ drawer, handleDrawer }) {
  const [addressList, setAddressList] = React.useState([
    { address: '1234567890', name: 'wallet 1' },
    { address: '1234567890', name: 'wallet 2' },
  ]);
  //   const { drawer, setDrawer } = React.useContext(AppContext);
  console.log('from sideBar', drawer);

  const showText = (text) => {
    const newText = Object.keys(text)[0];
    return newText;
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role='presentation'
      onClick={() => handleDrawer(!drawer)}
      onKeyDown={() => handleDrawer(false)}
    >
      <List>
        {addressList.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText primary={`${item.name}(${item.address})`} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div style={{ width: '360px' }}>
      <React.Fragment>
        <Drawer
          sx={{ width: '260px' }}
          anchor='left'
          open={drawer}
          onClose={() => handleDrawer(false)}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
