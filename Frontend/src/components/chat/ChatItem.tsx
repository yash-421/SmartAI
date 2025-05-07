import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import SyntaxHighlighter from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// Extract both code and text blocks, with optional language support
function extractCodeFromString(message: string) {
  const blocks = [];
  const parts = message.split("```");

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i].trim();
    if (i % 2 === 1) {
      // Code block
      const firstLineBreak = part.indexOf("\n");
      let language = "plaintext";
      let code = part;

      if (firstLineBreak !== -1) {
        const maybeLang = part.slice(0, firstLineBreak).trim();
        if (maybeLang.match(/^[a-zA-Z0-9+#-]+$/)) {
          language = maybeLang;
          code = part.slice(firstLineBreak + 1);
        }
      }

      blocks.push({ type: "code", language, content: code });
    } else if (part.length > 0) {
      // Text block
      blocks.push({ type: "text", content: part });
    }
  }

  return blocks;
}

const ChatItem = ({
  content,
  role,
}: {
  content: string;
  role: "user" | "assistant";
}) => {
  const messageBlocks = extractCodeFromString(content);
  const auth = useAuth();
  const userInitials =
    auth?.user?.name?.split(" ").map((name) => name[0]).join("") || "U";

  const isAssistant = role === "assistant";

  return (
    <Box
      sx={{
        display: "flex",
        p: 2,
        bgcolor: isAssistant ? "#004d5612" : "#004d56",
        my: 2,
        gap: 2,
      }}
    >
      <Avatar sx={{ ml: "0", bgcolor: isAssistant ? 'transparent' : "black", color: isAssistant ? undefined : "white" }}>
        {isAssistant ? (
          <img src="logo.png" alt="openai" width="30px" />
        ) : (
          userInitials
        )}
      </Avatar>
      <Box>
        {messageBlocks.map((block, index) =>
          block.type === "code" ? (
            <SyntaxHighlighter
              key={index}
              style={coldarkDark}
              language={block.language}
              wrapLines
              showLineNumbers
            >
              {block.content}
            </SyntaxHighlighter>
          ) : (
            <Typography
              key={index}
              sx={{ fontSize: "20px", whiteSpace: "pre-wrap" }}
            >
              {block.content}
            </Typography>
          )
        )}
      </Box>
    </Box>
  );
};

export default ChatItem;
