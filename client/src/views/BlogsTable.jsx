import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getBlogs } from '../api/dummy';

export default function BlogsTable() {

    const [blogs, setBlogs] = React.useState(null);

    React.useEffect( () => {
        let running = true
        async function fetchBlogs() {
            const fetchedBlogs = await getBlogs()
            if (!running) return
            setBlogs(fetchedBlogs)
        }
        fetchBlogs()

        return () => {
            running = false
        }
    },[])

    if (!blogs) {
        return <div>Loading...</div>
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow >
                        <TableCell sx={{fontWeight:"bold"}}>Author</TableCell>
                        <TableCell sx={{fontWeight:"bold"}}>Date</TableCell>
                        <TableCell sx={{fontWeight:"bold"}}>Title</TableCell>
                        <TableCell sx={{fontWeight:"bold"}}>Body</TableCell>
                        <TableCell sx={{fontWeight:"bold"}}>Link</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {blogs.map((blog) => (
                        <TableRow
                            key={blog.author}
                        >
                            <TableCell>
                                {blog.author}
                            </TableCell>
                            <TableCell>
                                {blog.date}
                            </TableCell>
                            <TableCell>
                                {blog.title}
                            </TableCell>
                            <TableCell>
                                {blog.body}
                            </TableCell>
                            <TableCell>
                                {blog.link}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}