import React from 'react';
import { Box, Typography, Button, Grid, Link, Divider } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#4A2C2C',
        color: 'white',
        padding: '60px 40px',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        height: 'auto',
      }}
    >
      {/* Header Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: 'Georgia',
            fontStyle: 'italic',
            fontWeight: 400,
            maxWidth: '80%',
          }}
        >
          Connecting the World with Excellence in Import-Export Solutions
        </Typography>
        <Box sx={{ display: 'flex', gap: '15px' }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#FF665A',
              color: 'white',
              '&:hover': { backgroundColor: '#E5554D' },
              textTransform: 'none',
              fontSize: '16px',
              padding: '10px 20px',
              borderRadius: 25,
            }}
          >
            Contact Us
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: '#FF665A',
              color: '#FF665A',
              textTransform: 'none',
              fontSize: '16px',
              borderRadius: 25,
              padding: '10px 20px',
              '&:hover': { borderColor: '#E5554D', color: '#E5554D' },
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>
      <Divider style={{ width: '100%', backgroundColor: '#ffffff', height: '1px' }} />
      {/* Links Section */}
      <Grid container spacing={4} sx={{ marginTop: '20px' }}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}
          >
            About Us
          </Typography>
          <Link
            href="#"
            underline="none"
            color="inherit"
            sx={{ fontSize: '14px', display: 'block', marginBottom: '6px' }}
          >
            Our Mission
          </Link>
          <Link
            href="#"
            underline="none"
            color="inherit"
            sx={{ fontSize: '14px', display: 'block', marginBottom: '6px' }}
          >
            Leadership Team
          </Link>
          <Link
            href="#"
            underline="none"
            color="inherit"
            sx={{ fontSize: '14px', display: 'block' }}
          >
            Global Presence
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}
          >
            Services
          </Typography>
          <Link
            href="#"
            underline="none"
            color="inherit"
            sx={{ fontSize: '14px', display: 'block', marginBottom: '6px' }}
          >
            Import Solutions
          </Link>
          <Link
            href="#"
            underline="none"
            color="inherit"
            sx={{ fontSize: '14px', display: 'block', marginBottom: '6px' }}
          >
            Export Solutions
          </Link>
          <Link
            href="#"
            underline="none"
            color="inherit"
            sx={{ fontSize: '14px', display: 'block' }}
          >
            Logistics Management
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}
          >
            Resources
          </Typography>
          <Link
            href="#"
            underline="none"
            color="inherit"
            sx={{ fontSize: '14px', display: 'block', marginBottom: '6px' }}
          >
            Blog & Insights
          </Link>
          <Link
            href="#"
            underline="none"
            color="inherit"
            sx={{ fontSize: '14px', display: 'block' }}
          >
            Case Studies
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}
          >
            Contact
          </Typography>
          <Link
            href="#"
            underline="none"
            color="inherit"
            sx={{ fontSize: '14px', display: 'block', marginBottom: '6px' }}
          >
            Get in Touch
          </Link>
          <Link
            href="#"
            underline="none"
            color="inherit"
            sx={{ fontSize: '14px', display: 'block' }}
          >
            Office Locations
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
