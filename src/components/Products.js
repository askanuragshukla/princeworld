import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import GrainIcon from '@mui/icons-material/Grain';
import sm1 from './images/sm1.jpeg'
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import { motion } from 'framer-motion';
import spiceprhdlg from './images/spicepr.jpg'
import makhananmk from './images/Makhana-Namkeen-2-3.jpg'
import chawalbr from './images/chawalbr.jpg'
import masale from './images/istockphoto-477756915-612x612.jpg'
import dals from './images/dals.jpg'
import dimaginuts from './images/dimagginuts.jpg'
import makhanajaggerycookies from './images/makhanajaggerycookies.webp'
import makhanaswtdryf from './images/dryfrtmixmakh.jpg'
import makhanapowder from './images/phool-makhana-powder.jpg'
import makhanaraw from './images/lotuspop.webp'
import makhanaflav from './images/Makhana-4-Flavours.webp'
import cornraw from './images/multicolorcorn_500x500.jpg'
import furnitures from './images/furnitures.jpg'
import flvrmkhana from './images/flvrmkhanahdwlpr.jpg'
import lotusmkhana from './images/makhanahdimahewlpr.jpg'
import mkhana2 from './images/makahnahdwlpr2.jpg'


const Products = () => {
  
const Background = styled(Box)({
  backgroundImage: `url(${flvrmkhana})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  color: "white",
  filter: "brightness(0.5)",  // Darken background for readability
});
const SectionTitle = styled(Typography)({
  fontSize: "4rem",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "0.02em",
  textAlign: "center",
  color: "#000",
  marginBottom: "1rem",
});

  return (
    <>
      <div >
       <Background>
               <SectionTitle style={{color:'white'}}>
                 Why Choose Prince World Exim?
               </SectionTitle>
               <Typography sx={{ textAlign: 'center', fontSize: '1.2rem', maxWidth: '800px', marginBottom: '30px',color:'white' }}>
                 We bridge the gap between international markets, offering seamless export solutions that ensure timely delivery, cost-efficiency, and high-quality service.
               </Typography>
               {/* <Typography variant="contained" sx={{  color: 'black', fontWeight: 'bold', borderRadius: '30px', padding: '10px 30px' }}>
                 Get Started
               </Typography> */}
             </Background>

           
             <Grid container spacing={6} alignItems="center" justifyContent="center" sx={{ background: 'linear-gradient(135deg, #4A2C2C, #4A2C2C, #4A2C2C)', padding: '2rem', marginTop: 0, marginBottom: 8, '@media (max-width:600px)': { fontSize: '1rem', } }}>
  <Grid item xs={12} md={6}>
    <motion.img
      src={makhananmk}
      alt="Market Investment Illustration"
      style={{
        height: '450px', // Adjust height to a smaller size
        width: '550px',
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
          color: "white",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          lineHeight: 1.4,
          fontSize: "2.5rem",
        }}
      >
        Makhana / Fox nuts
      </Typography>
      <Typography
        variant="h6"
        color="textSecondary"
        paragraph
        sx={{
          fontStyle: "italic",
          fontWeight: 400,
          color: 'white',
          maxWidth: "450px",
          marginBottom: "2rem",
          fontSize: "1.1rem",
        }}
      >
        Makhanas are small, white puffs high in antioxidants such as vitamin A, magnesium, and selenium. These antioxidants aid an improved immune system, protect the body from oxidative stress, and damage free radicals.
      </Typography>
      <Typography
        sx={{
          fontStyle: "italic",
          fontWeight: 400,
          color: 'white',
          maxWidth: "450px",
          marginBottom: "2rem",
          fontSize: "1.1rem",
        }}
      >
        We deliver a wide range of flavours including Peri Peri, Cream and Onion, Himalayan salt and Pepper, Tangy Tomato, Magic Masala, Cheese chill, and much more flavours in makhana products.
      </Typography>
    </motion.div>
  </Grid>
</Grid>

<Grid container spacing={6} alignItems="center" justifyContent="center" sx={{ background: 'linear-gradient(135deg,rgb(249, 249, 249),rgb(255, 255, 255),rgb(255, 255, 255))', padding: '2rem', marginTop: 0, marginBottom: 8 }}>

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
          fontSize: {
            xs: "2rem",  // Adjust font size for small screens
            sm: "2.5rem",  // Medium screens
            md: "3rem",  // Large screens
          },
          marginLeft: {
            xs: "0",  // No margin on small screens
            sm: "20px",  // Add margin on larger screens
          },
        }}
      >
        Rice
      </Typography>
      <Typography
        variant="h6"
        color="textSecondary"
        paragraph
        sx={{
          fontStyle: "italic",
          fontWeight: 400,
          color: 'black',
          maxWidth: "450px",
          marginBottom: "2rem",
          fontSize: {
            xs: "1rem",  // Adjust font size for small screens
            sm: "1.1rem",  // Medium screens
            md: "1.2rem",  // Large screens
          },
          marginLeft: {
            xs: "0",  // No margin on small screens
            sm: "20px",  // Add margin on larger screens
          },
        }}
      >
        Rice is a cereal grain and in its domesticated form is the staple food of over half of the world's population, particularly in Asia and Africa.
      </Typography>

      {/* Cards for Total Shipments and Global Reach */}

    </motion.div>
  </Grid>

  <Grid item xs={12} md={6}>
    <motion.img
      src={chawalbr}
      alt="Market Investment Illustration"
      style={{
        height: 'auto',  // Automatically adjust height based on width
        width: '100%',  // Set width to 100% to scale with the container
        borderRadius: 25,
        maxWidth: '550px',  // Limit the max width
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    />
  </Grid>

</Grid>

<Grid container spacing={6} alignItems="center" justifyContent="center" sx={{ background: 'linear-gradient(135deg, #4A2C2C, #4A2C2C, #4A2C2C)', padding: '2rem', marginTop: 0, marginBottom: 8 }}>

  <Grid item xs={12} md={6}>
    <motion.img
      src={masale}
      alt="Market Investment Illustration"
      style={{
        height: 'auto',  // Automatically adjust height based on width
        width: '100%',  // Set width to 100% to scale with the container
        borderRadius: 25,
        maxWidth: '550px',  // Limit the max width
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
          color: "white",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          lineHeight: 1.4,
          fontSize: {
            xs: "2rem",  // Adjust font size for small screens
            sm: "2.5rem",  // Medium screens
            md: "3rem",  // Large screens
          },
        }}
      >
        Spices
      </Typography>

      <Typography
        variant="h6"
        color="textSecondary"
        paragraph
        sx={{
          fontStyle: "italic",
          fontWeight: 400,
          color: 'white',
          maxWidth: "450px",
          marginBottom: "2rem",
          fontSize: {
            xs: "1rem",  // Adjust font size for small screens
            sm: "1.1rem",  // Medium screens
            md: "1.2rem",  // Large screens
          },
        }}
      >
        A spice is any seed, fruit, root, bark, or other plant substance in a form primarily used for flavoring or coloring food.
      </Typography>

      {/* Cards for Total Shipments and Global Reach */}

    </motion.div>
  </Grid>

</Grid>

<Grid container spacing={6} alignItems="center" justifyContent="center" sx={{ background: 'linear-gradient(135deg,rgb(249, 249, 249),rgb(255, 255, 255),rgb(255, 255, 255))', padding: '2rem', marginTop: 0, marginBottom: 8 }}>
  
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
          fontSize: {
            xs: "2rem",  // Adjust font size for small screens
            sm: "2.5rem",  // Medium screens
            md: "3rem",  // Large screens
          },
          marginLeft: {
            xs: "0",  // No margin on small screens
            sm: "20px",  // Add margin on larger screens
          },
        }}
      >
        Pulses
      </Typography>

      <Typography
        variant="h6"
        color="textSecondary"
        paragraph
        sx={{
          fontStyle: "italic",
          fontWeight: 400,
          color: 'black',
          maxWidth: "450px",
          marginBottom: "2rem",
          fontSize: {
            xs: "1rem",  // Adjust font size for small screens
            sm: "1.1rem",  // Medium screens
            md: "1.2rem",  // Large screens
          },
          marginLeft: {
            xs: "0",  // No margin on small screens
            sm: "20px",  // Add margin on larger screens
          },
        }}
      >
        Pulses are the edible seeds of plants in the legume family. Pulses grow in pods and come in a variety of shapes, sizes, and colors.
      </Typography>

      {/* Cards for Total Shipments and Global Reach */}
      
    </motion.div>
  </Grid>

  <Grid item xs={12} md={6}>
    <motion.img
      src={dals}
      alt="Market Investment Illustration"
      style={{
        height: 'auto',  // Automatically adjust height based on width
        width: '100%',  // Set width to 100% to scale with the container
        borderRadius: 25,
        maxWidth: '550px',  // Limit the max width
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    />
  </Grid>

</Grid>

<Grid container spacing={6} alignItems="center" justifyContent="center" sx={{ background: 'linear-gradient(135deg, #4A2C2C, #4A2C2C, #4A2C2C)', padding: '2rem', marginTop: 0, marginBottom: 8 }}>
  <Grid item xs={12} md={6}>
    <motion.img
      src={dimaginuts}
      alt="Market Investment Illustration"
      style={{
        height: 'auto',  // Automatically adjust height based on width
        width: '100%',  // Set width to 100% to scale with the container
        borderRadius: 25,
        maxWidth: '550px',  // Limit the max width
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
          color: "white",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          lineHeight: 1.4,
          fontSize: {
            xs: "2rem",  // Adjust font size for small screens
            sm: "2.5rem",  // Medium screens
            md: "3rem",  // Large screens
          },
        }}
      >
        Walnuts
      </Typography>
      
      <Typography
        variant="h6"
        color="textSecondary"
        paragraph
        sx={{
          fontStyle: "italic",
          fontWeight: 400,
          color: 'white',
          maxWidth: "450px",
          marginBottom: "2rem",
          fontSize: {
            xs: "1rem",  // Adjust font size for small screens
            sm: "1.1rem",  // Medium screens
            md: "1.2rem",  // Large screens
          },
        }}
      >
        A walnut is the edible seed of any tree of the genus Juglans (family Juglandaceae), particularly the Persian or English walnut, Juglans regia.
      </Typography>
      
      {/* Add your cards or additional content here */}
      
    </motion.div>
  </Grid>
</Grid>
<Container maxWidth="lg" sx={{ py: 5 }}>
  <Typography variant='h2' style={{textAlign:'center', fontWeight:'bold',marginTop:3,marginBottom:2}}>ALSO </Typography>
  <Typography variant='h6' style={{textAlign:'center', fontWeight:'bold',marginTop:3,marginBottom:10,color:'grey'}}>serving </Typography>
      <Grid container spacing={4}>
        {servicesData.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <Card
              sx={{
                position: 'relative',
                height: 360,
                borderRadius: '16px',
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
                overflow: 'hidden',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
                },
              }}
            >
              <CardMedia
                component="img"
                alt={service.title}
                height="200"
                image={service.image}
                sx={{
                  borderTopLeftRadius: '16px',
                  borderTopRightRadius: '16px',
                }}
              />
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 3,
                }}
              >
                {/* <Box
                  sx={{
                    mb: 2,
                    fontSize: 40,
                    color: '#FF665A',
                  }}
                >
                  {service.icon}
                </Box> */}
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontFamily: '"Roboto", sans-serif',
                    fontWeight: 'bold',
                    mb: 1,
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  paragraph
                  sx={{
                    fontFamily: '"Roboto", sans-serif',
                  }}
                >
                  {service.description}
                </Typography>
                {/* <Button
                  variant="contained"
                  size="small"
                  sx={{
                    textTransform: 'none',
                    backgroundColor: '#FF665A',
                    color: '#fff',
                    borderRadius: '20px',
                    px: 3,
                    '&:hover': {
                      backgroundColor: '#E5554D',
                    },
                  }}
                >
                  View More
                </Button> */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>


      </div>
    </>
  );
};

const servicesData = [
  {
    id: 1,
    title: 'Makhana Jaggery Cookies',
    description: 'A healthy cookies made from Makhana/Fox nuts and Jaggery',
    image: makhanajaggerycookies,
    icon: <LocalFloristIcon />,
  },
  {
    id: 2,
    title: 'Makhana Sweet Dryfruit Mix',
    description: 'A sweet Savour with puch of Dry Fruits a super delicious and healthy product.',
    image: makhanaswtdryf,
    icon: <RiceBowlIcon />,
  },
  {
    id: 3,
    title: 'Makhana Powder',
    description: 'A Powdered from of Phool Makahan/ fox nuts',
    image: makhanapowder,
    icon: <GrainIcon />,
  },
  {
    id: 4,
    title: 'Raw Makhanas',
    description: 'Nutritious pulses handpicked for quality. Raw Makhanas in different sizes. ',
    image: makhanaraw,
    icon: <GrainIcon />,
  },
  {
    id: 5,
    title: 'Flavoured Makhanas',
    description: '350gm, 40gm pouchs, 85gm jar Each of Olive Oil and Vegetable oil',
    image: makhanaflav,
    icon: <GrainIcon />,
  },
  {
    id: 6,
    title: 'Corn',
    description: 'As Better As Mexicao',
    image: cornraw,
    icon: <GrainIcon />,
  },
  {
    id: 7,
    title: 'Furnitures',
    description: 'We export custom made furnitures including Sofas and Tables with high grade woods and quality and precision work.',
    image:furnitures,
    icon: <GrainIcon />,
  },
];

export default Products;
