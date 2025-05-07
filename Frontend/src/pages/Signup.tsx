import React, { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { toast } from "react-hot-toast";
import CustomizedInput from "../components/shared/CustomizedInput";
import { IoIosLogIn } from "react-icons/io";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      toast.loading("Signing Up", { id: "signup" });
      await auth?.signup(name, email, password);
      toast.success("Signed Up Successfully", { id: "signup" });
    } catch (error) {
      console.log(error);
      toast.error("Signing Up Failed", { id: "signup" });
    }
  };

  useEffect(() => {
    if (auth?.user) {
      return navigate("/chat");
    }
  }, [auth]);

  return (
    <Box
      width={"100%"}
      height={"100vh"}
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", // Beautiful gradient background
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Left Image Section */}
      <Box display={{ md: "flex", sm: "none", xs: "none" }}>
        <img src="Robots.webp" alt="Robots" style={{ width: "800px" }} />
      </Box>

      {/* Signup Form */}
      <Box
        display={"flex"}
        flex={1}
        justifyContent={"center"}
        alignItems={"center"}
        padding={4}
        borderRadius={3}
        sx={{
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Adding floating effect to the form
          backgroundColor: "#1c2a38", // Dark background for the form container
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            maxWidth: "500px", // Maximum width for the form
            margin: "auto",
            padding: "40px",
            boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.2)", // Soft shadow for the form
            borderRadius: "10px",
            border: "none",
            background: "#1c2a38",
          }}
        >
          <Typography
            variant="h4"
            textAlign="center"
            padding={3}
            fontWeight={600}
            color="#00f2fe"
          >
            Create Account
          </Typography>

          <CustomizedInput type="text" name="name" label="Full Name" />
          <CustomizedInput type="email" name="email" label="Email Address" />
          <CustomizedInput type="password" name="password" label="Password" />

          <Button
            type="submit"
            sx={{
              px: 2,
              py: 1.5,
              mt: 3,
              width: "100%",
              borderRadius: 2,
              bgcolor: "#00f2fe", // Highlighted button color
              ":hover": {
                bgcolor: "#4facfe", // Darker blue on hover
              },
            }}
            endIcon={<IoIosLogIn />}
          >
            Signup
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Signup;
