import React from 'react';
import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/ToolBar";
import { useAuth } from '../context/AuthContext';
import NavigationLink from './shared/NavigationLink';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { Typography, Box, useMediaQuery, useTheme, Link } from '@mui/material';
import Logo from './shared/Logo';  // Assuming Logo component exists

const Header = () => {
  const auth = useAuth();
  const navigate = useNavigate(); // Initialize navigate hook
  const theme = useTheme(); // MUI theme
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Check if screen size is mobile

  const handleLogout = () => {
    auth?.logout();
    navigate("/"); // Redirect to homepage or login after logout
  };

  return (
    <AppBar
      sx={{
        position: "static",
        backgroundColor: "#1a1a2e", // Dark background color for header
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.3)",
        padding: "10px 20px",
      }}
    >
      <ToolBar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Logo Section */}
        <Box display="flex" alignItems="center" sx={{ flex: 1 }}>
          <Logo />
        </Box>

        {/* Navigation Links Section */}
        <Box display="flex" gap={3} alignItems="center">
          {auth?.isLoggedIn ? (
            <>
              <NavigationLink
                bg="#00f2fe"
                to="/chat"
                text="Go to Chat"
                textColor="black"
                sx={{
                  borderRadius: "20px",
                  padding: "8px 20px",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    backgroundColor: "#4facfe",
                    color: "white",
                  },
                }}
              />
              <NavigationLink
                bg="#51538f"
                to="/"
                text="Logout"
                textColor="white"
                onClick={handleLogout}
                sx={{
                  borderRadius: "20px",
                  padding: "8px 20px",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    backgroundColor: "#00f2fe",
                    color: "black",
                  },
                }}
              />
            </>
          ) : (
            <>
              <NavigationLink
                bg="#4e019a"
                to="/login"
                text="Login"
                textColor="white"
                sx={{
                  borderRadius: "20px",
                  padding: "8px 20px",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    backgroundColor: "#ff4d99",
                    color: "white",
                  },
                }}
              />
              <NavigationLink
                bg="#4e019a"
                to="/signup"
                text="Signup"
                textColor="white"
                sx={{
                  borderRadius: "20px",
                  padding: "8px 20px",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    backgroundColor: "#ff4d99",
                    color: "white",
                  },
                }}
              />
            </>
          )}
        </Box>
      </ToolBar>
    </AppBar>
  );
};

export default Header;
