import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  InputBase,
  Box,
  Typography,
  Fab,
  Tab,
  Switch,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";

export default function TimelineControl(props) {
  return (
    <>
      <Grid
        container
        width="100vw"
        height={"36px"}
        sx={{ backgroundColor: "grey" }}
      >
        <Grid item xs={10} md={11} alignContent="center" alignSelf="center">
          <Typography textAlign={"right"} color="white">
            Timeline Switcher Text Here
          </Typography>
        </Grid>
        <Grid item alignSelf="center" margin={"0 auto"}>
          <Switch size="large" />
        </Grid>
      </Grid>
    </>
  );
}
