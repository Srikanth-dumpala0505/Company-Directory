import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { MenuItem } from '@mui/material';

const Header = ({ search, setSearch, location, setLocation, industry, setIndustry }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                padding: 2,
                flexDirection: { xs: 'column', md: 'row' },
                gap: 2,
            }}
        >
            <Typography variant="h5" >
                Companies Directory
            </Typography>
            <Box
                component="form"
                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    label="Search here"
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <TextField
                    select
                    label="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="India">India</MenuItem>
                    <MenuItem value="USA">USA</MenuItem>
                </TextField>

                <TextField
                    select
                    label="Industry"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="Technology">Technology</MenuItem>
                    <MenuItem value="IT">IT</MenuItem>
                </TextField>
            </Box>
        </Box>
    )
}

export default Header