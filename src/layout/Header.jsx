// Navbar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="static" sx={{ bgcolor: 'primary.main' }}>
            <Toolbar>
                <LanguageIcon sx={{ color: 'white' }} />
                <Typography variant="h5" component="div" sx={{ color: 'white', marginRight: 2 }}>
                    My Website
                </Typography>
                <Link href="/" variant="h6" underline="hover" color="inherit" sx={{ ml: 2 }}>
                    HOME
                </Link>
                <Link href="about-page" variant="h6" underline="hover" color="inherit" sx={{ ml: 2 }}>
                    ABOUT
                </Link>
                <Link href="contact-page" variant="h6" underline="hover" color="inherit" sx={{ ml: 2 }}>
                    CONTACT
                </Link>
                <Button color="secondary" variant="contained" sx={{ marginLeft: 'auto' }}>
                    Login
                </Button>
                <Button color="secondary" variant="contained" sx={{ ml: 1 }}>
                    Register
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
