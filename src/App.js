import React,{useState} from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import Home from './components/Home';
import Courses from './components/Courses';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import ContactInfo from './components/ContactInfo';
import Navbar from './components/Navbar';

const App = () => {

  const [activePage, setActivePage] = useState('Home'); // Track the current active page

  // Function to render the active page component
  const renderPage = () => {
    switch (activePage) {
      case 'Home':
        return <Home />;
      case 'About':
        return <About />;
      case 'Courses':
        return <Courses />;
      case 'Products':
        return <Products />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };



  const theme = createTheme({
    typography: {
      fontFamily: '"Lora", serif', // Apply Lora font globally
    },
  });

  return (
    <>
    {/* // <Router> */}
    

<Navbar setActivePage={setActivePage} activePage={activePage}  />
{/* <AppBar position="fixed" sx={{ background: 'linear-gradient(135deg,rgb(22, 22, 22) 0%, #1f2a44 100%)', boxShadow: 3, color: 'white' }}>
  
  <Toolbar>
    <Typography 
      variant="h5" 
      sx={{ 
        flexGrow: 1, 
        fontFamily: '"Roboto Slab", serif', 
        fontWeight: 600, 
        letterSpacing: 1.5, 
        fontSize: '1.8rem', 
        textTransform: 'uppercase' 
      }}
    >
      Import Export LOGO
    </Typography>
    <Button 
      color="inherit" 
      component={Link} 
      to="/" 
      sx={{ fontFamily: '"Roboto", sans-serif', fontWeight: 500, fontSize: '1rem', letterSpacing: 1, textTransform: 'capitalize', marginRight: 2 }}
    >
      Home
    </Button>
    <Button 
      color="inherit" 
      component={Link} 
      to="/about" 
      sx={{ fontFamily: '"Roboto", sans-serif', fontWeight: 500, fontSize: '1rem', letterSpacing: 1, textTransform: 'capitalize', marginRight: 2 }}
    >
      About
    </Button>
    <Button 
      color="inherit" 
      component={Link} 
      to="/courses" 
      sx={{ fontFamily: '"Roboto", sans-serif', fontWeight: 500, fontSize: '1rem', letterSpacing: 1, textTransform: 'capitalize', marginRight: 2 }}
    >
      Courses
    </Button>
    <Button 
      color="inherit" 
      component={Link} 
      to="/services" 
      sx={{ fontFamily: '"Roboto", sans-serif', fontWeight: 500, fontSize: '1rem', letterSpacing: 1, textTransform: 'capitalize', marginRight: 2 }}
    >
      Services
    </Button>
    <Button 
      color="inherit" 
      component={Link} 
      to="/contact" 
      sx={{ fontFamily: '"Roboto", sans-serif', fontWeight: 500, fontSize: '1rem', letterSpacing: 1, textTransform: 'capitalize' }}
    >
      Contact
    </Button>
  </Toolbar>
</AppBar> */}
 {renderPage()}
{/* <Home /> */}

      {/* <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/products" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
      <Footer />
      </>
   
       

  );
};

export default App;
