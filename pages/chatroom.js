import React from "react";
import { Box, Grid } from "@mui/material";
import Contacts from "../components/contacts";
import SearchBar from "../components/Searchbar";
import Chat from "../components/chat";
import Archived from "../components/archived";

const ChatRoom = () => {
  return (
    <Grid container>
      <Grid
        item
        md={3.5}
        sx={{
          height: "100vh",
          overflowY: "scroll",
          background: "#111",
          color: "#eee",
        }}
      >
        <Archived />
        <SearchBar />
        <Contacts />
      </Grid>
      <Grid
        item
        md={8.5}
        sx={{
          height: "78vh",
          overflowY: "scroll",
          background: "#111",
        }}
      >
        <Box
          sx={{
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundImage:
              'url("https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        >
          <Box
            sx={{
              padding: "8px",
              minHeight: "78vh",
              background: "rgba(1,1,1,.5)",
            }}
          >
            <Chat />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ChatRoom;
