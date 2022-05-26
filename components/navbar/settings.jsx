import React , {useContext} from "react";
import IconButton from "@mui/material/IconButton";
import {
  Menu,
  Modal,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { createClient } from "pexels";
import WallPaperContext from "../../context/User";

export default function Settings() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [ modalState , setModalState] = React.useState(false)
  const [modalState, setModalState] = React.useState(false);
  const [images, setImages] = React.useState([]);
  const handleOpen = () => setModalState(true);
  const handleModalClose = () => setModalState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log("Open");
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    bgcolor: "rgba(251,251,251,0.9)",
    height: "90%",
    boxShadow: 24,
    p: 4,
  };

  const currentWallPaper = useContext(WallPaperContext)
  const { dispatch } = currentWallPaper;

  React.useEffect(() => {
    const client = createClient(
      "563492ad6f91700001000001e491a00ab2cc42e3a753de05f2b67505"
    );
    const query = "art";

    client.photos.search({ query, per_page: 12 }).then((photos) => {
      console.log(photos);
      setImages(photos.photos);
    });
  }, []);

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          fill: "#eee",
        }}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleOpen}>Settings</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>

      <Modal
        open={modalState}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Settings
            </Typography>
            <IconButton
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleModalClose}
              sx={{
                fill: "#eee",
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Accordion
            sx={{
              // background: "#111",
              marginTop: "16px",
              boxShadow: "none",
              width: "100%",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ fill: "" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography fontWeight={"600"} fontSize={"12px"}>
                Profile
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                sx={{
                  height: "180px",
                  display: "flex",
                }}
              >
                <Grid container>
                  <Grid
                    item
                    md={3.5}
                    sx={{ background: "pink", margin: "auto" }}
                  >
                    Boom
                  </Grid>
                  <Grid
                    item
                    md={3.5}
                    sx={{ background: "pink", margin: "auto" }}
                  >
                    Boom
                  </Grid>
                  <Grid
                    item
                    md={3.5}
                    sx={{ background: "pink", margin: "auto" }}
                  >
                    Boom
                  </Grid>
                </Grid>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              // background: "#111",
              marginTop: "16px",
              boxShadow: "none",
              width: "100%",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ fill: "" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography fontWeight={"600"} fontSize={"12px"}>
                Wallpaper
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                sx={{
                  height: "300px",
                  overflowY: "scroll",
                  // background: "yellow",
                  display: "flex",
                }}
              >
                <Grid container>
                  {images.map((img, index) => {
                    return (
                      <Grid
                        key={index}
                        item
                        md={3.5}
                        sx={{ cursor: "pointer", margin: "auto" }}
                        onClick={() => {
                          dispatch( {
                            type: "SET_WALLPAPER",
                            payload: img.src.landscape,
                          });
                          console.log("Clicked : " , img.src.landscape)
                        }}
                      >
                        <img
                          src={img.src.landscape}
                          alt=""
                          height={"150px"}
                          style={{
                            width: "100%",
                            height: "180px",
                            objectFit: "contain",
                          }}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Modal>
    </div>
  );
}
