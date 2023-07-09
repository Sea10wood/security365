import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";

export default function PullDownPass() {
    const [password, setPassword] = React.useState("");

    const handleChange = (event: SelectChangeEvent) => {
        setPassword(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 190, marginTop: 2 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Password</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={password}
                    label="password"
                    onChange={handleChange}
                >
                    <MenuItem value={1}>aaaa12345</MenuItem>
                    <MenuItem value={2}>iiiiiiii6789</MenuItem>
                    <MenuItem value={3}>uuuu1012</MenuItem>
                    <MenuItem value={4}>eeeee1345</MenuItem>
                    <MenuItem value={5}>oooo2345</MenuItem>
                    <MenuItem value={6}>kakiku2678</MenuItem>
                    <MenuItem value={7}>kkekosa9010</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
