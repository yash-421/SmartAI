import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import { Box, Avatar, Typography, Button, IconButton } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import red from "@mui/material/colors/red";
import ChatItem from "./../components/chat/ChatItem";
import { IoMdSend } from "react-icons/io";
import {
  sendChatRequest,
  getUserChats,
  deleteUserChats,
} from "./../helpers/api-communicator";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const Chat = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const auth = useAuth();
  const [chatMessages, setChatMessages] = useState<Message[]>([]);

  const handleSubmit = async () => {
    const content = inputRef.current?.value?.trim();
    if (!content) return;

    if (inputRef && inputRef.current) inputRef.current.value = "";

    const newMessage: Message = { role: "user", content };
    setChatMessages((prev) => [...prev, newMessage]);

    const chatData = await sendChatRequest(content);
    setChatMessages([...chatData.chats]);
  };

  const handleDeleteChats = async () => {
    try {
      toast.loading("Deleting Chats", { id: "deletechats" });
      await deleteUserChats();
      setChatMessages([]);
      toast.success("Deleted Chats Successfully", { id: "deletechats" });
    } catch (error) {
      console.log(error);
      toast.error("Deleting chats failed", { id: "deletechats" });
    }
  };

  useLayoutEffect(() => {
    if (auth?.isLoggedIn && auth.user) {
      toast.loading("Loading Chats", { id: "loadchats" });
      getUserChats()
        .then((data) => {
          setChatMessages([...data.chats]);
          toast.success("Successfully loaded chats", { id: "loadchats" });
        })
        .catch((err) => {
          console.log(err);
          toast.error("Loading failed", { id: "loadchats" });
        });
    }
  }, [auth]);

  useEffect(() => {
    if (!auth?.user) navigate("/login");
  }, [auth]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "#E3F2FD",
        fontFamily: "'Work Sans', sans-serif",
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          display: { md: "flex", xs: "none", sm: "none" },
          flex: 0.25,
          flexDirection: "column",
          p: 2,
          bgcolor: "#121212",
          boxShadow: "inset -2px 0 10px rgba(0,0,0,0.5)",
        }}
      >
        <Avatar
          sx={{
            mx: "auto",
            my: 2,
            bgcolor: "#00f2fe",
            color: "black",
            fontWeight: 700,
          }}
        >
          {auth?.user?.name[0]}
          {auth?.user?.name.split(" ")[1][0]}
        </Avatar>
        <Typography sx={{ mx: "auto", fontWeight: 600 }}>
          Talking to SmartAI
        </Typography>
        <Typography
          sx={{
            mx: "auto",
            my: 4,
            fontSize: 14,
            textAlign: "center",
            px: 2,
          }}
        >
          Ask questions about tech, business, productivity, education, and more.
          Avoid sharing personal info.
        </Typography>
        <Button
          onClick={handleDeleteChats}
          sx={{
            width: "100%",
            color: "white",
            fontWeight: "bold",
            borderRadius: 2,
            bgcolor: red[500],
            ":hover": {
              bgcolor: red[700],
            },
          }}
        >
          Clear Conversation
        </Button>
      </Box>

      {/* Main Chat */}
      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          p: 2,
        }}
      >
        {/* Header */}
        <Typography
          sx={{
            fontSize: "32px",
            fontWeight: 700,
            textAlign: "center",
            mb: 2,
            color: "#00f2fe",
          }}
        >
          SmartAI
        </Typography>

        {/* Scrollable chat area */}
        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: "#1e293b",
            borderRadius: 3,
            p: 2,
            overflowY: "auto",
            boxShadow: "inset 0 0 10px rgba(0,0,0,0.2)",
          }}
        >
          {chatMessages.map((chat, index) => (
            //@ts-ignore
            <ChatItem content={chat.content} role={chat.role} key={index} />
          ))}
        </Box>

        {/* Input field */}
        <Box
          sx={{
            mt: 2,
            display: "flex",
            alignItems: "center",
            backgroundColor: "#1f2d3d",
            borderRadius: 3,
            px: 2,
          }}
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a message..."
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            style={{
              flex: 1,
              backgroundColor: "transparent",
              border: "none",
              color: "white",
              fontSize: "18px",
              padding: "15px 10px",
              outline: "none",
            }}
          />
          <IconButton onClick={handleSubmit} sx={{ color: "#00f2fe", ml: 1 }}>
            <IoMdSend size={28} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;
