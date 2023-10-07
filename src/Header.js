import React from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button,
  } from '@mui/material';

function Header() {
  return (
    <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">VAMSI VIKASH ANKAM</Typography>
                <Box sx={{ flexGrow: 1 }} /> {/* This creates a flexible space to push buttons to the right */}
                <div>
                    <Button component={Link} to="/home" color="inherit">
                    Home
                    </Button>
                    <Button component={Link} to="/experience" color="inherit">
                    Experience
                    </Button>
                    <Button component={Link} to="/projects" color="inherit">
                    Projects
                    </Button>
                    <Button component={Link} to="/conferences" color="inherit">
                    Conferences
                    </Button>
                    <Button component={Link} to="/content" color="inherit">
                    Published Content
                    </Button>
                    <Button component={Link} to="/personal" color="inherit">
                    Personal
                    </Button>
                    <Button component={Link} to="/contact" color="inherit">
                    Contact
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    </div>
  );
}

export default Header;
