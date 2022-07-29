import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import { AppContext } from '../store/context';
import { Button, Flex } from '../shared/sharedStyles';
import { MdOutlineClose } from 'react-icons/md';
import { BiCheck } from 'react-icons/bi';
import { FiPlus } from 'react-icons/fi';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ellipsify } from '../helper/helper';
import { saveData } from '../store/localStorage';

export default function SideBar({ drawer, handleDrawer }) {
  const { wallets, setWallets } = React.useContext(AppContext);

  console.log('side wala', wallets);

  const createWallet = () => {
    console.log('createWallet');

    handleDrawer(false);
  };

  // select current wallet
  const selectWallet = (i) => {
    const newData = wallets?.map((item, index) =>
      index === i ? { ...item, active: true } : { ...item, active: false }
    );
    // console.log("from sidebar",newData);
    saveData('accounts', newData);
    setWallets(newData);
  };

  const list = () => (
    <>
      <Flex
        justify='space-between'
        bottom='1px solid green'
        align='center'
        padding='10px 15px'
        b_bottom='1px solid #6b6a6a'
      >
        {/* make this global later */}
        <p style={{ margin: '0px', padding: '0px', color: 'white' }}>VIPER</p>
        <Button
          background='transparent'
          margin='0px'
          padding='0px'
          onClick={() => handleDrawer(false)}
        >
          <MdOutlineClose color='#6b6a6a' fontSize='20px' />
        </Button>
      </Flex>
      <Box
        sx={{ width: 250 }}
        role='presentation'
        onClick={() => handleDrawer(!drawer)}
        onKeyDown={() => handleDrawer(false)}
        padding='0 0 0 15px'
      >
        <List>
          {/* here need to change address on every onClick */}
          {wallets.length > 0 ? (
            wallets.map((item, index) => (
              <Flex
                key={index}
                justify='space-between'
                padding='10px 0'
                cursor='pointer'
                onClick={() => selectWallet(index)}
              >
                <Typography
                  textOverflow='ellipsis'
                  overflow='hidden'
                  whiteSpace='nowrap'
                  color='white'
                >
                  {`${item.title} (${ellipsify(
                    item.keypair.publicKey.toString()
                  )})`}
                </Typography>
                <Flex
                  visibility={!item.active ? 'hidden' : undefined}
                  padding='0px 10px'
                  align='center'
                >
                  <BiCheck color='white' fontSize='23px' />
                </Flex>
              </Flex>
            ))
          ) : (
            <p style={{ color: 'white' }}>Please Add Account</p>
          )}
        </List>
      </Box>
    </>
  );

  return (
    <div style={{ width: '360px' }}>
      <React.Fragment>
        <Drawer
          PaperProps={{
            style: { height: '515px', backgroundColor: '#202020' },
          }}
          sx={{ width: '260px' }}
          anchor='left'
          open={drawer}
          onClose={() => handleDrawer(false)}
        >
          {list()}
          <Flex
            // justify='space-evenly'
            b_bottom='1px solid #6b6a6a'
            b_top='1px solid #6b6a6a'
            margin='0 15px'
            padding='10px 0'
            cursor='pointer'
            onClick={createWallet}
          >
            <Flex align='center'>
              <FiPlus fontSize='20px' color='white' />
            </Flex>
            <Link
              to='/wallet'
              style={{
                textDecoration: 'none',
                color: 'white',
                margin: '0 0 0 10px',
              }}
            >
              <ListItemText primary={`Add / Connect Wallet`} />
            </Link>
          </Flex>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
