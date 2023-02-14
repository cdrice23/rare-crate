import { defaultData } from "@/constants/defaultdata";
import { Box, Typography, Grid } from "@mui/material";
import CrateSummary from "./CrateSummary";

export default function CrateCollection(props) {
  return (
    <>
      <Grid container>
        {defaultData.collection.map((obj, i) => (
          <CrateSummary key={i} name={obj.name} cover={obj.cover} />
        ))}
      </Grid>
    </>
  );
}
