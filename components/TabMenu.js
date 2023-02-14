import { useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import Followers from "./Followers";
import Following from "./Following";
import CrateCollection from "./CrateCollection";
import FavoriteCrates from "./FavoriteCrates";

export default function TabMenu({ handleChange, value }) {
  return (
    <>
      <Grid container width={"100vw"} py={1}>
        <Grid
          item
          container
          xs={3}
          textAlign="center"
          justifyContent="center"
          sx={{ backgroundColor: value === 0 ? "#E5E6EB" : "inherit" }}
        >
          <Button
            variant="text"
            display="flex"
            direction={"column"}
            sx={{ flexWrap: "wrap" }}
            value={0}
            onClick={(event) => handleChange(event)}
          >
            <Typography variant="h5" value={0}>
              8
            </Typography>
            <Typography>Followers</Typography>
          </Button>
        </Grid>
        <Grid
          item
          container
          xs={3}
          textAlign="center"
          justifyContent="center"
          sx={{ backgroundColor: value === 1 ? "#E5E6EB" : "inherit" }}
        >
          <Button
            variant="text"
            display="flex"
            direction={"column"}
            sx={{ flexWrap: "wrap" }}
            value={1}
            onClick={(event) => handleChange(event)}
          >
            <Grid item xs={12}>
              <Typography variant="h5">12</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Following</Typography>
            </Grid>
          </Button>
        </Grid>
        <Grid
          item
          container
          xs={3}
          justifyContent="center"
          sx={{ backgroundColor: value === 2 ? "#E5E6EB" : "inherit" }}
        >
          <Button
            variant="text"
            display="flex"
            direction={"column"}
            sx={{ flexWrap: "wrap" }}
            value={2}
            onClick={(event) => handleChange(event)}
          >
            <Grid item xs={12}>
              <Typography variant="h5">4</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Crates</Typography>
            </Grid>
          </Button>
        </Grid>
        <Grid
          item
          container
          xs={3}
          textAlign="center"
          justifyContent="center"
          sx={{ backgroundColor: value === 3 ? "#E5E6EB" : "inherit" }}
        >
          <Button
            variant="text"
            display="flex"
            direction={"column"}
            sx={{ flexWrap: "wrap" }}
            value={3}
            onClick={(event) => handleChange(event)}
          >
            <Grid item xs={12}>
              <Typography variant="h5">24</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Favorites</Typography>
            </Grid>
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
