import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, TextField } from '@mui/material';
import { addSports, getSports } from '../api/dummy';
import { useCallback, useEffect, useState } from 'react';
import allStates from "../data/states.json";

function AddSports({navigate}) {

    const [sports, setSports] = useState(null);
    const [sport, setSport] = useState("");
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

    const handleAddSports = useCallback( async(event) => {
        // every time navigate changes, dependencies on newest values for 
        event.preventDefault()
        const data = { sport, date, location }
        try {
            const newSports = await addSports(data)
            alert("added successfully")
            // goes to sports table tab
            navigate(1)
        } catch (error) {
            console.error(error)
            alert("something went wrong")
        }
        
    }, [sport, date, location, navigate]) 

    if(!sports) return (
        <div>
            Loading...
        </div>
    )


    return (
        <form onSubmit={handleAddSports}>
            <TextField type="date" label="Date" value={date} onChange={(event, newValue) => setDate(event.target.value)}/>

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" label="Sport">Sport</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sport}
                    label="Sport"
                    onChange={(event, newValue) => setSport(event.target.value)}
                >
                    {sports.map((sport) => <MenuItem value={sport}>{sport}</MenuItem>)}
                    
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">State</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={location}
                    label="State"
                    onChange={(event, newValue) => setLocation(event.target.value)}
                >
                    {allStates.map((state) => <MenuItem value={state}>{state}</MenuItem>)}
                    
                </Select>
            </FormControl>
            <Button type="submit">Add Sport</Button>
        </form>
    )

}
export default AddSports