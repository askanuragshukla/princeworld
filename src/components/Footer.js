import React from 'react';
import { Box, Typography, Button, Grid, Link, Divider } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#4A2C2C',
        color: 'white',
        padding: { xs: '40px 20px', sm: '50px 30px', md: '60px 40px' },
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', sm: 'center' },
          textAlign: { xs: 'center', sm: 'left' },
          gap: { xs: 3, sm: 0 },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'Georgia',
            fontStyle: 'italic',
            fontWeight: 400,
            maxWidth: { xs: '100%', sm: '80%' },
          }}
        >
          Connecting the World with Excellence in Import-Export Solutions
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: '15px',
          }}
        >
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

      <Divider sx={{ backgroundColor: '#ffffff', height: '1px' }} />

      {/* Links Section */}
      <Grid
        container
        spacing={4}
        sx={{
          marginTop: '20px',
        }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}
          >
            About Us
          </Typography>
          {['Our Mission', 'Leadership Team', 'Global Presence'].map((item) => (
            <Link
              key={item}
              href="#"
              underline="none"
              color="inherit"
              sx={{ fontSize: '14px', display: 'block', marginBottom: '6px' }}
            >
              {item}
            </Link>
          ))}
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}
          >
            Services
          </Typography>
          {['Import Solutions', 'Export Solutions', 'Logistics Management'].map((item) => (
            <Link
              key={item}
              href="#"
              underline="none"
              color="inherit"
              sx={{ fontSize: '14px', display: 'block', marginBottom: '6px' }}
            >
              {item}
            </Link>
          ))}
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}
          >
            Resources
          </Typography>
          {['Blog & Insights', 'Case Studies'].map((item) => (
            <Link
              key={item}
              href="#"
              underline="none"
              color="inherit"
              sx={{ fontSize: '14px', display: 'block', marginBottom: '6px' }}
            >
              {item}
            </Link>
          ))}
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}
          >
            Contact
          </Typography>
          {['Get in Touch', 'Office Locations'].map((item) => (
            <Link
              key={item}
              href="#"
              underline="none"
              color="inherit"
              sx={{ fontSize: '14px', display: 'block', marginBottom: '6px' }}
            >
              {item}
            </Link>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
