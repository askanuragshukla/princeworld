import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import ricehdimages from './images/white-rice-in-sack-ai-generated-photo.jpg'
import cornhdimages from './images/cornhdlg.jpg'
import walnuthdimages from './images/walnutlghd.png'
import spicehdimages from './images/spiceshdlg.jpg'





// Styled Box for the hero section with a dynamic background
const HeroBox = styled(Box)(({ theme, backgroundImage }) => ({
  color: 'white',
  backgroundColor: '#1a1a1a',
  backgroundImage: `url(${backgroundImage})`,
  //backgroundSize: 'cover',
  backgroundSize: 'cover', // Ensures the image covers the box completely
 // backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat', // Prevents tiling
  minHeight: '600px', 
  backgroundPosition: 'center',
  padding: theme.spacing(12),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'left',
  position: 'relative',
  overflow: 'hidden',
  zIndex: 1,
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6),
    textAlign: 'center',
  },
}));

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0);

  const content = [
    {
      text: "We Export the finest Makhana, Rice, Walnuts, and Corns from around the world.",
      backgroundImage: ricehdimages,
    },
    {
      text: "Delivering premium quality Rice and Corns to our customers globally.",
      backgroundImage: cornhdimages,
    },
    {
      text: "Your trusted partner in Exporting Corns, Spices and other premium commodities.",
      backgroundImage: spicehdimages,
    },
    {
      text: "We also Export Spices, Lentils and much more .",
      backgroundImage: walnuthdimages,
    },
  ];

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % content.length);
    }, 4000); // Change text and background every 4 seconds

    return () => clearInterval(intervalId);
  }, [content.length]);

  return (
    <>
      <style>{`
        .floating-text {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
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
      `}</style>

      <HeroBox backgroundImage={content[currentTextIndex].backgroundImage}>
        <Box sx={{ maxWidth: 800 }}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{ lineHeight: 1.2 }}
            className="floating-text"
          >
            {content[currentTextIndex].text}
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem' }}>
            Your gateway to premium Exported commodities. Experience quality and trust with us.
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h5" fontWeight="bold">500+</Typography>
              <Typography variant="body2" color="grey.400">Products exported</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h5" fontWeight="bold">50K+</Typography>
              <Typography variant="body2" color="grey.400">Happy Clients</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h5" fontWeight="bold">4.9</Typography>
              <Typography variant="body2" color="grey.400">Customer Rating</Typography>
            </Grid>
          </Grid>
        </Box>
      </HeroBox>
    </>
  );
}
