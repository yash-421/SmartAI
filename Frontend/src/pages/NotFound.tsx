import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { IoMdHome } from 'react-icons/io';

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #203a43, #2c5364)', // Using a color scheme similar to your app's theme
        color: '#fff',
        textAlign: 'center',
      }}
    >
      {/* Image for 404 */}
      <img
        src="https://seocom.agency/wp-content/uploads/2024/05/Errores-Web-404-403-503-502-401.-Significado-y-soluciones-1.jpg.webp"
        alt="404 Not Found"
        style={{
          maxWidth: '100%',
          width: '400px', // Adjust size
          height: 'auto',
          borderRadius: '15px',
          marginBottom: '30px',
        }}
      />

      <Typography
        variant="h3"
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '2rem', sm: '3rem' },
          marginBottom: '20px',
        }}
      >
        Oops! Page Not Found
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontSize: '1rem',
          marginBottom: '30px',
          maxWidth: '400px',
          lineHeight: '1.5',
        }}
      >
        It seems the page you are looking for doesn't exist. You may have typed the wrong URL or the page has been moved.
      </Typography>

      {/* Button to go back to the home page */}
      <Button
        onClick={goHome}
        variant="contained"
        sx={{
          backgroundColor: '#00f2fe',
          color: '#000',
          fontWeight: 'bold',
          px: 4,
          py: 2,
          borderRadius: '30px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
          '&:hover': {
            backgroundColor: '#4facfe',
          },
        }}
        startIcon={<IoMdHome />}
      >
        Go to Homepage
      </Button>
    </Box>
  );
};

export default NotFound;
