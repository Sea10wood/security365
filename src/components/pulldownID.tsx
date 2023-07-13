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
        <Box sx={{ minWidth: 246, maxWidth: 246, marginTop: 2 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                    ID/Password
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={id}
                    label="ID/Password"
                    onChange={handleChange}
                >
                    <MenuItem value={1}>aaaaa@mail.com/aaaa12345</MenuItem>
                    <MenuItem value={2}>iiiiiii@mail.com/iiiiiiii6789</MenuItem>
                    <MenuItem value={3}>uuuuu@mail.com/uuuu1012</MenuItem>
                    <MenuItem value={4}>eeeee@mail.com/eeeee1345</MenuItem>
                    <MenuItem value={5}>ooooo@mail.com/oooo2345</MenuItem>
                    <MenuItem value={6}>kakiku@mail.com/kakiku2678</MenuItem>
                    <MenuItem value={7}>kekosa@mail.com/kkekosa9010</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
