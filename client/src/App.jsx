import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CustomTabPanel from './components/CustomTabPanel';
import Blogs from './views/Blogs';
import Sports from './views/Sports';
import a11yProps from './utils/a11yProps';
import { Typography } from '@mui/material';

export default function App() {
  const [value, setValue] = React.useState(-1);

  return (
    <Box>
      <Typography variant="h1" onClick={ () => setValue(-1)}>Blogs and Sports</Typography>
      { value === -1 && <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={(event, newValue) => setValue(newValue)} aria-label="basic tabs example">
          <Tab label="Blogs" {...a11yProps(0)} />
          <Tab label="Sports" {...a11yProps(1)} />
        </Tabs>
      </Box>}
      <CustomTabPanel value={value} index={0} removePadding>
        <Blogs />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} removePadding>
        <Sports />
      </CustomTabPanel>
    </Box>
  );
}