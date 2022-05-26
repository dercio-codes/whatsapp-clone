import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Box } from "@mui/material";
import Navbar from "../components/navbar";
import WallPaperContext from "../context/User";
import React, { useState, useEffect  , useReducer} from "react";

const wallPaperReducer = (state, action) => {
  switch(action.type) {
    case 'SET_WALLPAPER':
      return {wallpaper : state}
    default:
      return state
  }
}

function MyApp({ Component, pageProps }) {
  const initialState = {"wallpaper" : ''};
  const [wallPaper, setWallPaper] = useState("https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  const [state, dispatch] = useReducer(wallPaperReducer, wallPaper)


  return (
    <WallPaperContext.Provider value={{wallPaper , setWallPaper , dispatch}}>
      <Box>
        <Navbar />
        <Component {...pageProps} />
      </Box>
    </WallPaperContext.Provider>
  );
}

export default MyApp;
