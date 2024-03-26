import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { getAuthors } from '../api/dummy';

function AddBlog() {
    // Datepicker, dropdown, textbox * 3
    const [authors, setAuthors] = useState(null);
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

    if(!authors) return (
        <div>
            Loading...
        </div>
    )

    return (
        <>
            <TextField type="date" label="Date" value={date} onChange={(event, newValue) => setDate(newValue)}/>

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Author</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    //value={age}
                    label="Author"
                    onChange={(event, newValue) => setAuthors(newValue)}
                >
                    {authors.map((author) => <MenuItem value={author.id}>{author.name}</MenuItem>)}
                </Select>
            </FormControl>
            <TextField label="Title" value={title} onChange={(event, newValue) => setTitle(newValue)} fullWidth/> 
            <TextField label="Body" value={body} onChange={(event, newValue) => setBody(newValue)} multiline fullWidth/> 
            <TextField label="Link" value={link} onChange={(event, newValue) => setLink(newValue)} fullWidth/>
        </>
    )

}
export default AddBlog