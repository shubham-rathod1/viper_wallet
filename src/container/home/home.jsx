import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LandingPage from '../landingPage';
import { AiFillDollarCircle } from 'react-icons/ai';
import Recent from '../recent';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
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
    <Box sx={{ width: '100%' }}>
      <TabPanel value={value} index={0}>
        <LandingPage />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Recent />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <Box sx={{ borderTop: 1, borderColor: 'divider', overflow: 'hidden' }}>
        <Tabs
          overflow='hidden'
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
          justifyContent="space-evenly"
        >
          <Tab
            icon={<AiFillDollarCircle fontSize='25px' />}
            {...a11yProps(0)}
          />
          <Tab
            icon={<AiFillDollarCircle fontSize='25px' />}
            {...a11yProps(1)}
          />
          <Tab
            icon={<AiFillDollarCircle fontSize='25px' />}
            {...a11yProps(2)}
          />
          <Tab
            icon={<AiFillDollarCircle fontSize='25px' />}
            {...a11yProps(3)}
          />
          <Tab
            icon={<AiFillDollarCircle fontSize='25px' />}
            {...a11yProps(4)}
          />
        </Tabs>
      </Box>
    </Box>
  );
}
