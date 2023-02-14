import { Stack, Chip, Grid, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { defaultData } from "@/constants/defaultdata";
import Image from "next/image";
import styles from "../styles/CrateSummary.module.css";

const SmallChip = styled(Chip)({
  fontSize: "0.6rem",
  height: "unset",
});

export default function CrateSummary() {
  return (
    <Grid item xs={6}>
      <Box id="lip"></Box>
      <Grid container>
        <Grid item xs={6}>
          <Image
            src={defaultData.collection[2].cover}
            fill
            priority="true"
            className={styles.image}
          />
        </Grid>
        <Grid item xs={6}>
          <Grid container>
            {/* {defaultData.collection[2].tags.map((obj) => {
              <Chip
                label={obj.name}
                color={obj.officialTag ? "#6FC276" : "#E5E6EB"}
              />;
            })} */}
            {[...Array(13)].map((e, i) => (
              <SmallChip key={i} size="small" label={`test${i}`} />
            ))}
          </Grid>
          {console.log(
            defaultData.collection[2].tags.map((obj) => obj.officialTag)
          )}
        </Grid>
        <Box>
          <Typography>{defaultData.collection[2].name}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
