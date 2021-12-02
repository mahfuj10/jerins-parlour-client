import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BookingDetails from '../BookingDetails/BookingDetails';
import BookingList from '../BookingList/BookingList';
import MakeAdmin from '../../Dashboard/MakeAdmin/MakeAdmin/MakeAdmin';
import ManageOrder from '../../Dashboard/ManageOrder/ManageOrder';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function BookingDrawer() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Book" {...a11yProps(0)} />
        <Tab label="Booking list" {...a11yProps(1)} />
        <Tab label="MakeAdmin" {...a11yProps(2)} />
        <Tab label="Manage All Order" {...a11yProps(3)} />
        {/* <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} /> */}
      </Tabs>
      <TabPanel value={value} index={0}>
            <BookingDetails />
      </TabPanel>
      <TabPanel value={value} index={1}>
            <BookingList />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MakeAdmin />
      </TabPanel>
      <TabPanel value={value} index={3}>
          <ManageOrder />
      </TabPanel>
   
    </Box>
  );
}
