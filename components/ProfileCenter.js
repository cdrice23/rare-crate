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
import styles from "../styles/ProfileCenter.module.css";

export default function ProfileCenter(props) {
  return (
    <Grid
      container
      direction={"vertical"}
      alignItems="center"
      justifyContent={"center"}
    >
      <Grid item xs={12}>
        <Typography variant="h6" textAlign={"center"}>
          Featured Album
        </Typography>
      </Grid>
      <Grid item xs={6} maxWidth="125px">
        <Image
          fill
          priority="true"
          src={defaultData.featuredAlbum}
          className={styles.album}
        />
      </Grid>
      <Grid item xs={12} position="relative">
        <Box
          sx={{
            backgroundColor: "brown",
            height: "24px",
            width: "150px",
            position: "absolute",
            zIndex: -1,
            top: -22,
            left: 0,
            right: 0,
            margin: "0 auto",
          }}
        />
      </Grid>
    </Grid>
  );
}
