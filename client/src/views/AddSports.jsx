import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import { getSports } from '../api/dummy';
import { useEffect, useState } from 'react';
import allStates from "../data/states.json";

function AddSports() {

    const [sports, setSports] = useState(null);
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");

    useEffect( () => {
        let running = true
        async function fetchSports() {
            const fetchedSports = await getSports()
            if (!running) return
            setSports(fetchedSports)
        }
        fetchSports()

        return () => {
            running = false
        }
    },[])

    if(!sports) return (
        <div>
            Loading...
        </div>
    )


    return (
        <>
            <TextField type="date" label="Date" value={date} onChange={(event, newValue) => setDate(newValue)}/>

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" label="Sport">Sport</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    //value={age}
                    label="Age"
                    onChange={(event, newValue) => setSports(newValue)}
                >
                    {sports.map((sport) => <MenuItem value={sport.id}>{sport.sport}</MenuItem>)}
                    
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">State</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    //value={age}
                    label="State"
                    onChange={(event, newValue) => setLocation(newValue)}
                >
                    {allStates.map((state) => <MenuItem value={state}>{state}</MenuItem>)}
                    
                </Select>
            </FormControl>
           
        </>
    )

}
export default AddSports