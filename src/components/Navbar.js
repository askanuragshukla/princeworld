import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Navbar = ({ activePage, setActivePage }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen size is small

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = ['Home', 'About', 'Contact', 'Products', 'Blog'];

  return (
    <AppBar position="static" style={{ background: '#4A2C2C', padding: '0.5rem 1rem' }}>
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
              ramsagarsharma1985@gmail.com
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <PhoneIcon style={{ fontSize: '1rem', marginRight: '5px' }} />
            <Typography variant="body2" style={{ fontSize: '0.9rem' }}>
              +91 9920580308 | 7039712825
            </Typography>
          </Box>
        </Box>

        {/* Divider Line */}
        <Divider style={{ width: '100%', backgroundColor: '#ffffff', height: '1px' }} />
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between', padding: '0' }}>
        {/* Logo */}
        
        <Box display="flex" alignItems="center">
          <Typography variant="h6" component="div" style={{ fontWeight: 'bold' }}>
            Prince World Exim
          </Typography>
        </Box>

        {/* Contact Info (Hidden on small screens) */}
       

        {/* Navigation Links or Hamburger Menu */}
        {isSmallScreen ? (
          <>
            <IconButton
              color="inherit"
              edge="end"
              onClick={toggleDrawer(true)}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              <Box
                sx={{
                  width: 250,
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '1rem',
                  background: '#4A2C2C',
                  height: '100%',
                }}
              >
                <IconButton
                  sx={{ alignSelf: 'flex-end', color: 'white' }}
                  onClick={toggleDrawer(false)}
                >
                  <CloseIcon />
                </IconButton>
                {navLinks.map((item) => (
                  <Button
                    key={item}
                    onClick={() => {
                      setActivePage(item);
                      setDrawerOpen(false);
                    }}
                    style={{
                      color: 'white',
                      fontWeight: 500,
                      textTransform: 'capitalize',
                      margin: '0.5rem 0',
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
            </Drawer>
          </>
        ) : (
          <Box display="flex" gap={3}>
            {navLinks.map((item) => (
              <Button
                key={item}
                onClick={() => setActivePage(item)}
                style={{
                  color: 'white',
                  fontWeight: 500,
                  fontSize: '1rem',
                  textTransform: 'capitalize',
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
