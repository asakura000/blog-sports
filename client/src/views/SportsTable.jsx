import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getBlogs, getSportsEntries } from '../api/dummy';

export default function SportsTable() {

    const [sportsEntries, setSportsEntries] = React.useState(null);

    React.useEffect( () => {
        let running = true
        async function fetchSportsEntries() {
            const fetchedSportsEntries = await getSportsEntries()
            if (!running) return
            setSportsEntries(fetchedSportsEntries)
        }
        fetchSportsEntries()

        return () => {
            running = false
        }
    },[])

    if (!sportsEntries) {
        return <div>Loading...</div>
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow >
                        <TableCell sx={{fontWeight:"bold"}}>Sport</TableCell>
                        <TableCell sx={{fontWeight:"bold"}}>Date</TableCell>
                        <TableCell sx={{fontWeight:"bold"}}>Location</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sportsEntries.map((sportsEntry) => (
                        <TableRow
                            key={sportsEntries.sport}
                        >
                            <TableCell>
                                {sportsEntry.sport}
                            </TableCell>
                            <TableCell>
                                {sportsEntry.date}
                            </TableCell>
                            <TableCell>
                                {sportsEntry.location}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}