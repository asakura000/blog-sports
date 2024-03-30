import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, TextField } from '@mui/material';
import { useEffect, useState, useCallback } from 'react';
import { addBlog, getAuthors } from '../api/dummy';

function AddBlog({navigate}) {
 
    const [authors, setAuthors] = useState(null);
    const [author, setAuthor] = useState("");
    const [date, setDate] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [link, setLink] = useState("");

    useEffect( () => {
        let running = true
        async function fetchAuthors() {
            const fetchedAuthors = await getAuthors()
            if (!running) return
            setAuthors(fetchedAuthors)
        }
        fetchAuthors()

        return () => {
            running = false
        }
    },[])

    const handleAddBlog = useCallback( async(event) => {
        // every time navigate changes, dependencies on newest values for 
        event.preventDefault()
        const data = { author, title, body, date, link }
        try {
            const newBlogs = await addBlog(data)
            alert("added successfully")
            // goes to blogs table tab
            navigate(1)
        } catch (error) {
            console.error(error)
            alert("something went wrong")
        }
        
    }, [author, title, body, date, link, navigate]) 

    if(!authors) return (
        <div>
            Loading...
        </div>
    )

    return (
        <form onSubmit={handleAddBlog}>
            <TextField type="date" label="Date" value={date} onChange={(event, newValue) => setDate(newValue)}/>

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Author</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    //value={age}
                    label="Author"
                    onChange={(event, newValue) => setAuthor(newValue)}
                >
                    {authors.map((author) => <MenuItem value={author}>{author}</MenuItem>)}
                </Select>
            </FormControl>
            <TextField label="Title" value={title} onChange={(event, newValue) => setTitle(newValue)} fullWidth/> 
            <TextField label="Body" value={body} onChange={(event, newValue) => setBody(newValue)} multiline fullWidth/> 
            <TextField label="Link" value={link} onChange={(event, newValue) => setLink(newValue)} fullWidth/>
            <Button type="submit">Add Blog</Button>
        </form>
    )

}
export default AddBlog