import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AddSports from './AddSports';
import CustomTabPanel from '../components/CustomTabPanel';
import a11yProps from '../utils/a11yProps';
import SportsTable from './SportsTable';

export default function Sports() {
    const [value, setValue] = React.useState(0);
  
    return (
      <Box>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={(event, newValue) => setValue(newValue)} aria-label="basic tabs example">
            <Tab label="Add Sports" {...a11yProps(0)} />
            <Tab label="View Sports" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <AddSports />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <SportsTable />
        </CustomTabPanel>
      </Box>
    );
  }