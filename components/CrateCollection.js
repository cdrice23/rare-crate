import { Box, Typography, Grid } from "@mui/material";
import CrateSummary from "./CrateSummary";

export default function CrateCollection(props) {
  return (
    <>
      <Grid container>
        <CrateSummary />
      </Grid>
    </>
  );
}
