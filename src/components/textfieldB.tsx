import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React from "react";

export default function TextFieldB() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    return (
        <Box
            component="form"
            sx={{
                "& > :not(style)": { m: 1, width: "18ch", height: "10ch" },
            }}
            noValidate
            autoComplete="off"
        >
            <div style={{ width: "24ch", height: "5ch" }}>
                <TextField id="outlined-basic" label="ID" variant="outlined" />
                <div style={{ marginTop: "1rem" }}>
                    <TextField
                        id="outlined-basic"
                        label="password"
                        variant="outlined"
                    />
                </div>
            </div>
        </Box>
    );
}
