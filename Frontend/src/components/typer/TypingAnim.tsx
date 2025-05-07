import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        // Updated content related to SmartAI
        "Welcome to SmartAI",
        1000,
        "Your Personalized AI Assistant",
        2000,
        "Chat, Learn, and Create with SmartAI",
        1500,
      ]}
      speed={60}  // Adjusted speed for a slightly faster effect
      style={{
        fontSize: "60px",  // Increased font size for better visibility
        color: "#00f2fe",  // Bright accent color
        display: "inline-block",
        textShadow: "2px 2px 15px #000",  // Added a stronger text shadow for more depth
        fontFamily: "'Roboto', sans-serif",  // Custom font for a clean, modern look
        fontWeight: "bold",  // Bold to make it more impactful
      }}
      repeat={Infinity}
    />
  );
};

export default TypingAnim;
