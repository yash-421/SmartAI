import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

// Adding custom CSS for animations
const logoAnimationStyle = {
  animation: "spin 3s infinite linear", // Spin animation for the logo
};

const textAnimationStyle = {
  display: { md: "block", sm: "none", xs: "none" },
  fontWeight: "800",
  textShadow: "2px 2px 20px #000",
  animation: "fadeIn 3s ease-in-out infinite", // Fade-in and fade-out animation for the text
};

const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <Link to={"/"}>
        <img
          src="logo.png"
          alt="logo"
          width={"30px"}
          height={"30px"}
          style={logoAnimationStyle} // Apply the spinning animation
        />
      </Link>
      <Typography sx={textAnimationStyle}>
        <span style={{ fontSize: "20px" }}>Smart</span>AI
      </Typography>
    </div>
  );
};

export default Logo;
