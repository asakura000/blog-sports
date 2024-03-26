import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AddBlog from './AddBlog';
import CustomTabPanel from '../components/CustomTabPanel';
import a11yProps from '../utils/a11yProps';

export default function Blogs() {
    const [value, setValue] = React.useState(0);

    return <Box>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={(event, newValue) => setValue(newValue)} aria-label="basic tabs example">
                <Tab label="Add Blogs" {...a11yProps(0)} />
                <Tab label="View Blogs" {...a11yProps(1)} />
            </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
            <AddBlog />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
            Blogs Table
        </CustomTabPanel>
    </Box>
}