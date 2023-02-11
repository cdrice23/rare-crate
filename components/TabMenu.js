import { useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import Followers from "./Followers";
import Following from "./Following";
import CrateCollection from "./CrateCollection";
import FavoriteCrates from "./FavoriteCrates";

function Panel(props) {
  const { children, value, index, id, ...other } = props;

  return (
    <div
      role="panel"
      hidden={value !== index}
      id={id}
      aria-labelledby={id}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function TabMenu() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container width={"100vw"} padding={1}>
        <Grid item container xs={3} textAlign="center" justifyContent="center">
          <Button
            variant="text"
            display="flex"
            direction={"column"}
            sx={{ flexWrap: "wrap" }}
            value={0}
            onClick={handleChange}
          >
            <Typography variant="h5">8</Typography>
            <Typography>Followers</Typography>
          </Button>
        </Grid>
        <Grid item container xs={3} textAlign="center" justifyContent="center">
          <Button
            variant="text"
            display="flex"
            direction={"column"}
            sx={{ flexWrap: "wrap" }}
            value={1}
            onClick={handleChange}
          >
            <Grid item xs={12}>
              <Typography variant="h5">12</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Following</Typography>
            </Grid>
          </Button>
        </Grid>
        <Grid item container xs={3} justifyContent="center">
          <Button
            variant="text"
            display="flex"
            direction={"column"}
            sx={{ flexWrap: "wrap" }}
            value={2}
            onClick={handleChange}
          >
            <Grid item xs={12}>
              <Typography variant="h5">3</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Crates</Typography>
            </Grid>
          </Button>
        </Grid>
        <Grid item container xs={3} textAlign="center" justifyContent="center">
          <Button
            variant="text"
            display="flex"
            direction={"column"}
            sx={{ flexWrap: "wrap" }}
            value={3}
            onClick={handleChange}
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
      <Panel value={value} id="followers" index={0}>
        <Followers />
      </Panel>
      <Panel value={value} id="following" index={1}>
        <Following />
      </Panel>
      <Panel value={value} id="crates" index={2}>
        <CrateCollection />
      </Panel>
      <Panel value={value} id="favorites" index={3}>
        <FavoriteCrates />
      </Panel>
    </>
  );
}
