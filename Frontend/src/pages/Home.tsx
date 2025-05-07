import React from 'react';
import { Box, Typography, Button, useMediaQuery, useTheme } from "@mui/material";
import TypingAnim from '../components/typer/TypingAnim';
import Footer from './../components/footer/Footer';

const Home = () => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      width="100%"
      minHeight="100vh"
      sx={{
        background: "linear-gradient(135deg, #161b22, #203a43, #2c5364)", // Darker background gradient
        color: "#f0f6fc", // Light text color
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
          mt: 5,
          px: 2,
        }}
      >
        <TypingAnim />

        <Typography
          variant="h3"
          sx={{
            mt: 4,
            textAlign: "center",
            fontWeight: "bold",
            color: "#58a6ff", // Cyan color for heading
          }}
        >
          Welcome to SmartAI
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            mt: 2,
            textAlign: "center",
            maxWidth: 600,
            fontSize: "1.1rem",
            color: "#e0f7fa", // Light cyan for description
          }}
        >
          SmartAI is your intelligent assistant built to simplify tasks, spark creativity, and deliver knowledge — all through one chat interface.
        </Typography>

        <Box
          sx={{
            width: isBelowMd ? "90%" : "70%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
            my: 10,
          }}
        >
          <img src="robot.png" alt="robot" style={{ width: '180px', borderRadius: 8 }} />
          <img className="image-inverted rotate" src="logo.png" alt="SmartAI logo" style={{ width: '180px', borderRadius: 8 }} />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <img
            src="chat.png"
            alt="SmartAI Chat UI"
            style={{
              width: "60%",
              borderRadius: 20,
              boxShadow: "0px 0px 40px #58a6ff", // Light cyan glow effect
              marginBottom: 30,
              transition: "transform 0.3s ease-in-out",
            }}
          />
        </Box>

        <Button
          variant="contained"
          size="large"
          sx={{
            mb: 5,
            background: "linear-gradient(90deg, #00f2fe, #4facfe)",
            color: "#000",
            fontWeight: "bold",
            px: 4,
            py: 1.5,
            borderRadius: "30px",
            textTransform: "none",
            boxShadow: "0 0 15px #00f2fe",
            '&:hover': {
              background: "linear-gradient(90deg, #4facfe, #00f2fe)",
            }
          }}
        >
          Start Chatting
        </Button>

        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
