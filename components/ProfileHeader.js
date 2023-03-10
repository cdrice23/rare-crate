import {
  Box,
  Grid,
  Typography,
  Popover,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LinkIcon from "@mui/icons-material/Link";
import Image from "next/image";
import { defaultData } from "@/constants/defaultdata";
import styles from "../styles/ProfileHeader.module.css";
import { useState } from "react";

export default function ProfileHeader(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Grid container>
        <Grid item xs={3}>
          <Image
            fill
            priority="true"
            src={defaultData.profilePic}
            className={styles.image}
          />
        </Grid>
        <Grid item container xs={9}>
          <Grid item xs={12} display="flex">
            <Typography variant="h5" alignSelf={"center"}>
              ricechrisdtreat
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Button
              variant="contained"
              sx={{ minWidth: "100%" }}
              onClick={handleClick}
            >
              Socials
            </Button>
          </Grid>
          <Grid item xs={3}>
            <IconButton
              size="large"
              color="inherit"
              aria-label="menu"
              sx={{ alignSelf: "start" }}
            >
              <FavoriteIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box padding={2}>
            <Typography>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velitest
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography>Social Media links go here</Typography>
      </Popover>
    </>
  );
}
