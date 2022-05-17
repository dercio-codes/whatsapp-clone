import React from 'react'
import {  Box  , Grid , TextField} from '@mui/material'

const SearchBar = () => {
  return (
    <Box sx={{
        p:'16px 8px'
    }}>
    <TextField fullWidth/>    
    </Box>
  )
}

export default SearchBar