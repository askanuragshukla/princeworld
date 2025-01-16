import React from 'react';
import { Box, Grid, Typography,Card } from '@mui/material';
import { motion } from 'framer-motion';
import sm1 from './images/sm1.jpeg'
import sm2 from './images/sm2.avif'
import interiors from './images/ionteriors.jpg'
import civilcont from './images/Civil-Contracts.webp'
const RecentProject = () => {
  return (
    <Box
      sx={{
     
      }}
    >
         <Grid container spacing={6} alignItems="center" justifyContent="center" sx={{ padding: '2rem',marginTop:8,marginBottom:8 }}>
  <Grid item xs={12} md={6}>
    <motion.img
      src={interiors}
      alt="Market Investment Illustration"
      style={{
        height: '100%',  // Adjust height to a smaller size
        width: '80%',
        borderRadius:25,
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
            color: "black",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            lineHeight: 1.4,
            fontSize: "2.5rem",
          }}
        >
          Also in Civil Contracts and Interior works
        </Typography>
        <Typography
          variant="h6"
          color="textSecondary"
          paragraph
          sx={{
            fontStyle: "italic",
            fontWeight: 400,
            maxWidth: "450px",
            marginBottom: "2rem",
            fontSize: "1.1rem",
          }}
        >
 Specialize in civil contracts, interior design, and high-quality furniture and hardware solutions, ensuring every project is completed with excellence.        </Typography>

        {/* Cards for Total Shipments and Global Reach */}
        <Grid style={{ justifyContent:'right',}} container spacing={4}>
          {/* <Grid item xs={12} sm={6}>
            <Card
              sx={{
                padding: "1.5rem",
                textAlign: "center",
                boxShadow: 3,
                borderRadius: "10px",
                animation: "floating 2s infinite ease-in-out",
              }}
            >
              <Typography
                variant="h5"
                color="black"
                sx={{ fontWeight: 700, fontSize: "1.25rem" }}
              >
                Total Shipments Handled
              </Typography>
              <Typography
                variant="h4"
                sx={{ fontWeight: 500, color: "#2b2b2b", fontSize: "2rem" }}
              >
                5,00+
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card
              sx={{
                padding: "1.5rem",
                textAlign: "center",
                boxShadow: 3,
                borderRadius: "10px",
                animation: "floating 2s infinite ease-in-out",
              }}
            >
              <Typography
                variant="h5"
                color="black"
                sx={{ fontWeight: 700, fontSize: "1.25rem" }}
              >
                Global Reach Across
              </Typography>
              <Typography
                variant="h4"
                sx={{ fontWeight: 500, color: "#2b2b2b", fontSize: "2rem" }}
              >
                150+ Countries
              </Typography>
            </Card>
          </Grid> */}
          <motion.img
      src={civilcont}
      alt="Market Investment Illustration"
      style={{
        marginTop:10,
        //float:'left !important',
        justifyContent:'right',
        height: '250px',  // Adjust height to a smaller size
        width: '350px',
        borderRadius:25,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    />
        </Grid>
      </motion.div>
    </Grid>
</Grid>
    </Box>
  );
};

export default RecentProject;
