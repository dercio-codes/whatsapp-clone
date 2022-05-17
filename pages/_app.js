import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {  Box } from '@mui/material'
import Navbar from '../components/navbar'

function MyApp({ Component, pageProps }) {
  return(
    <Box>
      <Navbar />
      <Component {...pageProps} />
    </Box>
  )
}

export default MyApp
