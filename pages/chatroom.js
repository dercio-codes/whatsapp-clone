import React , {useContext} from "react";
import { Box, Grid } from "@mui/material";
import Contacts from "../components/contacts";
import SearchBar from "../components/Searchbar";
import Chat from "../components/chat";
import Archived from "../components/archived";
import ChatBox from "../components/chatbox";
import WallPaperContext from "../context/User"

const ChatRoom = () => {
  const currentWallPaper = useContext(WallPaperContext)
  const { dispatch , wallPaper} = currentWallPaper;
  console.log(currentWallPaper)

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
        {/* <SearchBar /> */}
        <Contacts />
      </Grid>
      <Grid
        item
        md={8.5}
        sx={{
          height: "100vh",
          background: "#111",
        }}
        >
        <Box
          sx={{
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundImage:`url("${currentWallPaper.wallPaper}")`
              // 'url("https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
          >
          <Box
            sx={{
              overflowY: "scroll",
              padding: "8px",
              height: "75vh",
              background: "rgba(1,1,1,.5)",
            }}
          >
            <Chat />
          </Box>
        </Box>
        <Box
          sx={{
            height: "15vh",
            // background: "red",
            display:'flex',
            alignItems:'center'
          }}
        >
          <ChatBox />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ChatRoom;
