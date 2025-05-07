import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{width:'100%'}} >
      <div
        style={{
          width: "100%", // Ensure footer spans the entire width
          padding: "10px 5px", // Padding for better spacing
          marginTop: "50px",
          backgroundColor: "#161b22", // Dark background for footer
          color: "#f0f6fc", // Light text color
          display: "flex", // Flexbox for vertical centering
          flexDirection: "column", // Stacking elements vertically
          justifyContent: "center", // Center the content vertically
          alignItems: "center", // Center the content horizontally
          borderRadius:'10px',
          marginBottom:'10px',
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)", // Floating box shadow

        }}
      >
        <p
          style={{
            fontSize: "24px",
            textAlign: "center",
            padding: "10px",
            color: "#c9d1d9", // Light gray text
            marginBottom: "10px",
          }}
        >
          Built By{" "}
          <span>
            <Link
              style={{
                color: "#58a6ff", // Cyan accent color
                textDecoration: "none",
                fontWeight: "bold", // Bold link for better visibility
                textUnderlineOffset: "4px", // Underline offset for aesthetic look
              }}
              className="nav-link"
              to={"https://csmu.ac.in/"}
              target="_blank"
              onMouseEnter={(e) => (e.target.style.color = "#4facfe")} // Hover effect (cyan shade)
              onMouseLeave={(e) => (e.target.style.color = "#58a6ff")} // Revert hover effect
            >
              CSMU STUDENTS
            </Link>
          </span>
        </p>
        <p
          style={{
            fontSize: "14px",
            textAlign: "center",
            color: "#6c757d", // Light gray for extra text
            marginTop: "10px",
          }}
        >
          &copy; {new Date().getFullYear()} SmartAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
