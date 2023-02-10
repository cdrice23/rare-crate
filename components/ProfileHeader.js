import {
  Box,
  Grid,
  Typography,
  Popover,
  IconButton,
  Divider,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LinkIcon from "@mui/icons-material/Link";
import Image from "next/image";
import { defaultData } from "@/constants/defaultdata";
import styles from "../styles/ProfileHeader.module.css";

export default function ProfileHeader(props) {
  return (
    <Grid container>
      <Grid item container xs={6} minHeight={"50vw"}>
        <IconButton
          size="large"
          color="inherit"
          aria-label="menu"
          sx={{ position: "absolute" }}
        >
          <LinkIcon />
        </IconButton>
        <Grid item xs={12}>
          <Image
            fill
            priority="true"
            src={defaultData.profilePic}
            className={styles.image}
          />
        </Grid>
        <IconButton
          size="large"
          color="inherit"
          aria-label="menu"
          sx={{ position: "absolute" }}
        >
          <FavoriteIcon />
        </IconButton>
      </Grid>
      <Divider orientation="vertical" flexItem />
      <Grid item xs={6}></Grid>
    </Grid>
  );
}
