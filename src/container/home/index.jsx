import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LandingPage from '../landingPage';
import { AiFillDollarCircle } from 'react-icons/ai';
import { BsGearFill } from 'react-icons/bs';
import { GoZap } from 'react-icons/go';
import { IoSwapHorizontalSharp } from 'react-icons/io5';
import { TiThMenuOutline } from 'react-icons/ti';
import Recent from '../recent';
import { Flex } from '../../shared/sharedStyles';
import Settings from '../settings';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      style={{width: '100%'}}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ backgroundColor: '#262626' }}>
        <Flex height='420px' width='100%' justify='center' overflow="scroll">
          <TabPanel value={value} index={0}>
            <LandingPage />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
           Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
          <Recent />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Settings />
          </TabPanel>
        </Flex>
        <Box
          sx={{
            borderTop: 1,
            borderColor: 'divider',
            overflow: 'hidden',
            backgroundColor: '#333333',
          }}
        >
          <Tabs
            TabIndicatorProps={{
              sx: { top: 0 },
            }}
            overflow='hidden'
            value={value}
            onChange={handleChange}
            aria-label='basic tabs example'
            justifyContent='space-evenly'
          >
            <Tab
              disableRipple={true}
              sx={{ minWidth: '72px' }}
              icon={
                <AiFillDollarCircle
                  color={value === 0 ? 'white' : '#666666'}
                  fontSize='30px'
                />
              }
              {...a11yProps(0)}
            />
            <Tab
              disableRipple={true}
              sx={{ minWidth: '72px' }}
              icon={
                <TiThMenuOutline
                  color={value === 1 ? 'white' : '#666666'}
                  fontSize='30px'
                />
              }
              {...a11yProps(1)}
            />
            <Tab
              disableRipple={true}
              sx={{ minWidth: '72px' }}
              icon={
                <IoSwapHorizontalSharp
                  color={value === 2 ? 'white' : '#666666'}
                  fontSize='30px'
                />
              }
              {...a11yProps(2)}
            />
            <Tab
              disableRipple={true}
              sx={{ minWidth: '72px' }}
              icon={
                <GoZap
                  color={value === 3 ? 'white' : '#666666'}
                  fontSize='30px'
                />
              }
              {...a11yProps(3)}
            />
            <Tab
              disableRipple={true}
              sx={{ minWidth: '72px' }}
              icon={
                <BsGearFill
                  color={value === 4 ? 'white' : '#666666'}
                  fontSize='30px'
                />
              }
              {...a11yProps(4)}
            />
          </Tabs>
        </Box>
      </Box>
    </>
  );
}
