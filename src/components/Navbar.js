import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Navbar = () => {
  return (
    <AppBar position="static" style={{   background: '#4A2C2C', padding: '0.5rem 1rem' }}>
      <Toolbar
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0',
        }}
      >
        {/* Top Section: Email and Contact Number */}
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          width="100%"
          style={{ marginBottom: '0.5rem' }}
        >
          <Box display="flex" alignItems="center" style={{ marginRight: '1rem' }}>
            <EmailIcon style={{ fontSize: '1rem', marginRight: '5px' }} />
            <Typography variant="body2" style={{ fontSize: '0.9rem', }}>
              shipping@nogistic.com
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <PhoneIcon style={{ fontSize: '1rem', marginRight: '5px' }} />
            <Typography variant="body2" style={{ fontSize: '0.9rem' }}>
              +1 (651) 210-1954
            </Typography>
          </Box>
        </Box>

        {/* Divider Line */}
        <Divider style={{ width: '100%', backgroundColor: '#ffffff', height: '1px' }} />

        {/* Bottom Section: Logo, Navigation Links, and Button */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          style={{ marginTop: '0.5rem' }}
        >
          {/* Left Section: Logo */}
          <Box display="flex" alignItems="center">
            <img
              src="https://via.placeholder.com/40" // Replace with your logo
              alt="Nogistic Logo"
              style={{ marginRight: '8px' }}
            />
            <Typography variant="h6" component="div" style={{ fontWeight: 'bold' }}>
              Nogistic
            </Typography>
          </Box>

          {/* Middle Section: Navigation Links */}
          <Box display="flex" gap={3}>
            {['Home', 'About', 'Contact', 'Products', 'Blog'].map((item) => (
              <Link
                key={item}
                href={`${item.toLowerCase()}`}
                underline="none"
                color="inherit"
                style={{ fontSize: '1rem', fontWeight: '500' }}
              >
                {item}
              </Link>
            ))}
          </Box>

          {/* Right Section: Contact Button */}
          {/* <Button
            variant="contained"
            color="secondary"
            style={{
              textTransform: 'none',
              backgroundColor: '#ffffff',
              color: '#6c5ce7',
              fontWeight: 'bold',
              padding: '0.5rem 1rem',
            }}
          >
            Contact Us →
          </Button> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;


// spices  
