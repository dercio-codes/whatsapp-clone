import { Box, Avatar, Typography ,Divider } from "@mui/material";
import React from "react";
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';
const ChatItem = ({ name, message, isMessageSent, time }) => {


  return (
    <Box
      sx={{
        display: "flex",
        width: "auto",
        m: "4px 0",
        justifyContent: isMessageSent ? "flex-start" : "flex-end",
        "&:hover": {
          background: "rgba(1,1,1,0.4)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          minWidth: "200px",
          flexDirection: isMessageSent ? "row" : "row-reverse",
        }}
      >
        <Box
          sx={{
            minWidth: "70%",
            display: "flex",
            padding: "2px 8px",
            justifyContent: isMessageSent ? "flex-start" : "flex-end",
          }}
        >
          <Box
            sx={{
              minWidth: "20px",
              maxWidth: "80%",
              minHeight: "48px",
              background: "#333",
              color: "#eee",
              borderRadius: isMessageSent
                ? "12px 2px 18px 2px"
                : "2px 12px 2px 18px",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
            }}
          >
    
            <Typography>{message}</Typography>
            <Typography textAlign={"end"} fontSize={"14px"}>
              {time}
              {
                isMessageSent ?  "" : <DoneAllIcon fontSize={"10px"} sx={{margin:"0px 4px" ,}}/>
              }
            
            </Typography>
            
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatItem;
