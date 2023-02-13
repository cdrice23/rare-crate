import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { defaultData } from "@/constants/defaultdata";
import styles from "../styles/Followers.module.css";

export default function Followers(props) {
  return defaultData.followers.map((obj) => (
    <Grid container>
      <Grid item maxHeight={58}>
        <Image
          src={obj.profilePic}
          height={50}
          width={50}
          alt="prof pic"
          className={styles.profilePic}
        />
      </Grid>
      <Grid item flexGrow={1} display={"flex"}>
        <Typography alignSelf={"center"} variant="h6" sx={{ pl: 1 }}>
          {obj.name}
        </Typography>
      </Grid>
    </Grid>
  ));
}
