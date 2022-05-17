import { Box, Grid, Avatar, Typography, Badge } from "@mui/material";
import AutoModeOutlinedIcon from "@mui/icons-material/AutoModeOutlined";
import ForumIcon from "@mui/icons-material/Forum";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import ChatOptions from "./chatOptions";

const Navbar = () => {
  const currentProfile = {
    id: 1,
    name: "Karthik",
    picture: "https://image.ibb.co/k0wVTm/profile_pic.jpg",
    status: "Available",
  };
  return (
    <Box
      sx={{
        height: "10vh",
        background: "#111",
      }}
    >
      <Grid container>
        <Grid
          item
          md={3.5}
          sx={{
            // background: "pink",
            color: "#eee",
            height: "10vh",
            padding: "8px",
            display: "flex",
          }}
        >
          <Box
            sx={{
              flex: 1.5,
            }}
          >
            <Badge color="success" badgeContent={currentProfile.status === "Available" ? " " : "" }
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <Avatar src={currentProfile.picture} alt="Boom" />
            </Badge>
          </Box>
          <Box
            sx={{
              flex: 1,
              // background: "maroon",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <AutoModeOutlinedIcon />
            <ForumIcon />
            <MoreVertIcon />
          </Box>
        </Grid>
        <Grid
          item
          md={8.5}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              minWidth: "24%",
              height: "100%",
              width: "80%",
              padding: "8px",

              // justifyContent: "space-evenly",
              display: "flex",
              alignItems: "center",
              // background: "yellow",
            }}
          >
            <Avatar src="" alt="Boom" />
            <Typography
              color={"#eee"}
              fontWeight={"600"}
              margin={"0 16px"}
              fontSize={"18px"}
            >
              Name of Monday
            </Typography>
          </Box>
          <Box
            sx={{
              minWwidth: "120px",
              height: "100%",
              // background: "maroon",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <SearchIcon
              sx={{
                fill: "#eee",
              }}
            />
            <ChatOptions />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navbar;
