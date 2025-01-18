import React from 'react';
import { Container, Typography, Grid, Card } from '@mui/material';
import { motion } from 'framer-motion';
import Hero from './Hero';
import Testimonials from './Testimonials';
import OurServices from './OurServices';
import WeAreZens from './WeAreZens';
import RecentProject from './RecontProject';
import sm1 from './images/sm1.jpeg';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <style>
        {`
          @keyframes floating {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0);
            }
          }
        `}
      </style>
      <Hero />
      <Testimonials />
      <OurServices />
      <WeAreZens />
      
      {/* Section with Image and Text */}
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{
          background: 'linear-gradient(135deg, #4A2C2C, #4A2C2C, #4A2C2C)',
          padding: '2rem',
          marginTop: 0,
          marginBottom: 8,
        }}
      >
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <motion.img
            src={sm1}
            alt="Market Investment Illustration"
            style={{
              maxHeight: '100%',
              width: '100%',
              maxWidth: '450px',
              borderRadius: 25,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: 'white',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                lineHeight: 1.4,
                fontSize: { xs: '2rem', sm: '2.5rem' },
              }}
            >
              Expanding Global Trade, One Shipment at a Time
            </Typography>
            <Typography
              variant="h6"
              color="textSecondary"
              paragraph
              sx={{
                fontStyle: 'italic',
                fontWeight: 400,
                color: 'white',
                maxWidth: '450px',
                marginBottom: '2rem',
                fontSize: { xs: '1rem', sm: '1.1rem' },
              }}
            >
              Revolutionizing global import and export with efficient processes,
              seamless operations, and a commitment to quality service for our
              clients worldwide.
            </Typography>

            {/* Cards for Total Shipments and Global Reach */}
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Card
                  sx={{
                    padding: '1.5rem',
                    backgroundColor: '#E5554D',
                    color: 'white',
                    '&:hover': { backgroundColor: '#d64d1c' },
                    textAlign: 'center',
                    boxShadow: 3,
                    borderRadius: 25,
                    animation: 'floating 2s infinite ease-in-out',
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, fontSize: { xs: '1rem', sm: '1.25rem' } }}
                  >
                    Total Shipments Handled
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 500,
                      color: 'white',
                      fontSize: { xs: '1.5rem', sm: '2rem' },
                    }}
                  >
                    5,00+
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card
                  sx={{
                    padding: '1.5rem',
                    backgroundColor: '#E5554D',
                    color: 'white',
                    '&:hover': { backgroundColor: '#d64d1c' },
                    textAlign: 'center',
                    boxShadow: 3,
                    borderRadius: 25,
                    animation: 'floating 2s infinite ease-in-out',
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, fontSize: { xs: '1rem', sm: '1.25rem' } }}
                  >
                    Countries Reach
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 500,
                      color: 'white',
                      fontSize: { xs: '1.5rem', sm: '2rem' },
                    }}
                  >
                    150+
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </motion.div>
        </Grid>
      </Grid>

      {/* Recent Projects Section */}
      <RecentProject />
    </div>
  );
};

export default Home;
