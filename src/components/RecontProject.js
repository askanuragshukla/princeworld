import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import interiors from './images/ionteriors.jpg';
import civilcont from './images/Civil-Contracts.webp';

const RecentProject = () => {
  return (
    <Box
      sx={{
        padding: { xs: '1rem', md: '2rem' },
        marginTop: { xs: 4, md: 8 },
        marginBottom: { xs: 4, md: 8 },
      }}
    >
      <Grid
        container
        spacing={6}
        alignItems="center"
        justifyContent="center"
        sx={{ marginTop: 8, marginBottom: 8 }}
      >
        {/* Left Image */}
        <Grid item xs={12} md={6}>
          <motion.img
            src={interiors}
            alt="Market Investment Illustration"
            style={{
              width: '100%',
              maxHeight: '350px',
              objectFit: 'cover',
              borderRadius: 25,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </Grid>

        {/* Text Content */}
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
                color: 'black',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                lineHeight: 1.4,
                fontSize: { xs: '1.5rem', md: '2.5rem' },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Also in Civil Contracts and Interior Works
            </Typography>
            <Typography
              variant="h6"
              color="textSecondary"
              paragraph
              sx={{
                fontStyle: 'italic',
                fontWeight: 400,
                maxWidth: '450px',
                marginBottom: '2rem',
                fontSize: { xs: '0.9rem', md: '1.1rem' },
                textAlign: { xs: 'center', md: 'left' },
                marginX: { xs: 'auto', md: 0 },
              }}
            >
              Specialize in civil contracts, interior design, and high-quality furniture and hardware
              solutions, ensuring every project is completed with excellence.
            </Typography>

            {/* Right Image */}
            <motion.img
              src={civilcont}
              alt="Civil Contracts"
              style={{
                marginTop: 10,
                height: '250px',
                width: '100%',
                float:'right',
                maxWidth: '350px',
                borderRadius: 25,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RecentProject;
