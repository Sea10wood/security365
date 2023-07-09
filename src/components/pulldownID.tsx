import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";

export default function PullDownID() {
    const [id, setID] = React.useState("");

    const handleChange = (event: SelectChangeEvent) => {
        setID(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 190, marginTop: 2 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">ID</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={id}
                    label="ID"
                    onChange={handleChange}
                >
                    <MenuItem value={1}>aaaaa@mail.com</MenuItem>
                    <MenuItem value={2}>iiiiiii@mail.com</MenuItem>
                    <MenuItem value={3}>uuuuu@mail.com</MenuItem>
                    <MenuItem value={4}>eeeee@mail.com</MenuItem>
                    <MenuItem value={5}>ooooo@mail.com</MenuItem>
                    <MenuItem value={6}>kakiku@mail.com</MenuItem>
                    <MenuItem value={7}>kekosa@mail.com</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
