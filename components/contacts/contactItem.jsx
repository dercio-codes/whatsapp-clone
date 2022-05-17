import * as React from "react";
import {
  Box,
  Avatar,
  Drawer,
  Stack,
  Typography,
  Badge,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ContactItem = ({
  name,
  date,
  userImage,
  lastMessage,
  messagesNumber,
}) => {
  const [modalState, setModalState] = React.useState(false);

  const handleAvatarClick = () => {
    setModalState(!modalState);
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : "350px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "64px",
        }}
      >
        <Button sx={{ flex: 1 }} onClick={toggleDrawer(anchor, false)}>
          <CloseIcon sx={{ fill: "#111" }} />
        </Button>
        <Typography sx={{ flex: 4, textAlign: "center" }}>
          Contact Information
        </Typography>
      </Box>
      <Avatar
        src={userImage}
        sx={{ cursor: "pointer", minWidth: "250px", minHeight: "250px" }}
        onClick={toggleDrawer(anchor, true)}
      />
      
      <Box sx={{ background :'red' , height:'250px' , width:'100%'}}>
,,,,
      </Box>
    </Box>
  );

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <Box
      //   onClick={handleAvatarClick}
      sx={{
        height: "72px",
        justifyContent: "space-between",
        display: "flex",
        alignItems: "center",
        padding: "0px 8px",
        "&:hover": {
          background: "rgba(1,1,1,0.5)",
        },
      }}
    >
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Avatar
            src={userImage}
            sx={{ cursor: "pointer" }}
            onClick={toggleDrawer(anchor, true)}
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      <Stack
        sx={{
          borderTop: "1px solid rgba(1,1,1 , 0.3)",
          width: "85%",
          height: "100%",
          padding: "0px 4px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            // background:'yellow',
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: 700 }}>{name}</Typography>
          <Typography sx={{ fontWeight: 300, fontSize: "12px" }}>
            {date}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            // justifyContent: "space-evenly",
            // background:'yellow',
            alignItems: "center",
          }}
        >
          <Typography
            noWrap
            sx={{
              background: "transparent",
              width: "90%",
              marginRight: "14px",
            }}
          >
            {lastMessage}
          </Typography>
          <Badge badgeContent={messagesNumber} color="success" />
        </Box>
      </Stack>
    </Box>
  );
};

export default ContactItem;
