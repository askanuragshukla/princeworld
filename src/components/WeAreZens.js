import React from 'react';
import { Box, Typography, Button, Avatar, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const WeAreZens = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: 'linear-gradient(135deg, #4A2C2C, #4A2C2C, #4A2C2C)',
        color: '#fff',
        padding: '40px 60px',
        position: 'relative',
        height: '100vh',
      }}
    >
      {/* Top Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: '120px',
            fontWeight: 'bold',
            lineHeight: 1,
            whiteSpace: 'nowrap',
          }}
        >
          we are
        </Typography>

        <Typography
          variant="h1"
          sx={{
            fontSize: '120px',
            fontWeight: 'bold',
            lineHeight: 1,
            whiteSpace: 'nowrap',
          }}
        >
          PWe
        </Typography>
      </Box>

      {/* Middle Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 4,
        }}
      >
        {/* Left Section */}
        <Box sx={{ position: 'relative', width: '50%' }}>
          <Box
            component="img"
            src="https://thtyog.com/wp-content/uploads/2024/01/top-view-various-indian-spices-seasonings-table-2-scaled.jpg"
            alt="Agriculture Product"
            sx={{
              borderRadius: '8px',
              width: '80%',
              height: '80%',
            }}
          />
         
        </Box>

        {/* Right Section */}
        <Box
          sx={{
            width: '45%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}
        >
          <Typography sx={{ fontSize: '18px', lineHeight: 1.6, mb: 3 }}>
            At Prince World Exim, we specialize in the import and export of premium
            agricultural products, including spices, corn, makhana, rice, and
            pulses. Our commitment to quality and timely delivery ensures we
            serve global markets with excellence.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <Avatar src="https://via.placeholder.com/80" alt="Team Member 1" />
            <Avatar src="https://via.placeholder.com/80" alt="Team Member 2" />
            <Avatar src="https://via.placeholder.com/80" alt="Team Member 3" />
            <Avatar src="https://via.placeholder.com/80" alt="Team Member 4" />
          </Box>

          <Typography>
            <strong>Eam Sharma</strong>
            <br />
            Propertier
          </Typography>
        </Box>
      </Box>

      {/* Bottom Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <Button
          variant="outlined"
          endIcon={<ArrowForwardIcon />}
          sx={{
            color: '#fff',
            borderColor: '#fff',
            textTransform: 'none',
            borderRadius: '30px',
            padding: '10px 20px',
            '&:hover': {
              backgroundColor: '#fff',
              color: '#000',
            },
          }}
        >
          Explore Our Products
        </Button>

        <Typography
          sx={{
            fontSize: '16px',
            lineHeight: 1.6,
            maxWidth: '400px',
            textAlign: 'right',
          }}
        >
          Discover a world of high-quality agricultural products sourced
          directly from trusted farmers and delivered with precision to meet
          your business needs.
        </Typography>
      </Box>
    </Box>
  );
};

export default WeAreZens;
