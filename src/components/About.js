import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Avatar, Box, Button, Divider } from '@mui/material';
import { styled } from '@mui/system';
import BusinessIcon from '@mui/icons-material/Business';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BuildIcon from '@mui/icons-material/Build';
import flvrmkhana from './images/flvrmkhanahdwlpr.jpg'
import WhyChooseUs from './WhyChooseUs';
import lotusmkhana from './images/makhanahdimahewlpr.jpg'
import mkhana2 from './images/makahnahdwlpr2.jpg'

const Background = styled(Box)({
  backgroundImage: `url(${mkhana2})`,
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

const About = () => {

  const cardData = [
    { icon: <BuildIcon fontSize="large" />, text: 'Civil Contracts' },
    { icon: <DesignServicesIcon fontSize="large" />, text: 'Interior Design Solutions' },
    { icon: <BusinessIcon fontSize="large" />, text: 'Plywood & Furniture' },
  ];

  const consultancyDetails = [
    {
      title: 'RSS Enterprise',
      description: 'End-to-end civil construction services for residential and commercial projects.',
    },
    {
      title: 'Sharmaji Interiors',
      description: 'Creative and functional interior design solutions tailored to meet client needs.',
    },
    {
      title: 'Furniture & Hardware Export',
      description: 'High-quality furniture such as Sofas, Dining table and all type of custom furnitures.',
    },
  ];



  return (
    <>
    <Box sx={{width:'100%',marginRight:0,marginLeft:0}}>
       {/* Hero Section */}
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
    

      {/* Why Choose Us Section */}
     

      {/* RSS Consultancy Section */}
      <Container sx={{ paddingY: '50px',width:'100%' }}>
        <SectionTitle>Why Choose Us?</SectionTitle>
        <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: '30px', color: 'text.secondary' }}>
          Expertise, creativity, and quality define our approach. Discover how we bring your visions to life with innovative solutions.
        </Typography>
        <WhyChooseUs />
       
        
       
        
      </Container>

      {/* RSS Consultancy Section */}
      <Container sx={{ paddingBottom: '50px' }}>
        <SectionTitle>Our Expertise</SectionTitle>
        <Grid container spacing={4}>
          {cardData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '20px',
                  boxShadow: 3,
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'scale(1.05)', boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)' },
                }}
              >
                <Box sx={{ marginBottom: '10px', color: '#4A2C2C' }}>{item.icon}</Box>
                <Typography variant="h6" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                  {item.text}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography style={{marginTop:80,alignItems:'center',textAlign:'center',fontWeight:'bold'}} variant='h4'>RSS Consultancy</Typography>
        <Divider sx={{ marginBottom: '20px' }} />
        <Typography variant="body1" sx={{ textAlign: 'center', color: 'text.secondary', marginBottom: '30px' }}>
          We specialize in civil contracts, interior design, and high-quality furniture and hardware solutions, ensuring every project is completed with excellence.
        </Typography>
        <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
          {consultancyDetails.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  textAlign: 'center',
                  padding: '20px',
                  boxShadow: 2,
                  '&:hover': { boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)' },
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Meet the Team Section */}
      {/* <Container sx={{ paddingTop: '50px' }}>
        <SectionTitle>
          Meet Our Expert Team
        </SectionTitle>
        <Grid container spacing={4}>
          {teamData.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.id}>
              <Card sx={{ textAlign: 'center' }}>
                <Avatar alt={member.name} src={member.image} sx={{ width: 80, height: 80, margin: '16px auto' }} />
                <CardContent>
                  <Typography variant="h6">{member.name}</Typography>
                  <Typography variant="body2" color="textSecondary">{member.role}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container> */}
    </Box>
     
    </>
  );
};

export default About;
