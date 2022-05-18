import React from "react";
import {
  Box,
  Grid,
  TextField,
  IconButton,
  InputAdornment,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <Box sx={{ display: "flex", }}>

      <Paper elevation={3} sx={{
        width:'100%',
        background:'#111',
        p:'9px',
      }}>
        <TextField
          label="Search..."
          sx={{
            borderRadius: "16px",
            color:'#eee',
            "&:focus":{
              border:'1px solid #eee !important',
            }
          }}
          fullWidth
          InputLabelProps={{style : {color : '#eee'} }}
          InputProps={{
            style:{ border:'1px solid #eee' },
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon sx={{ fill:'#eee' }}/>
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Paper>
    </Box>
  );
};

export default SearchBar;
