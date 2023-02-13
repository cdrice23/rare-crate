import React from "react";
import { Tab, Tabs, Box, Grid, Typography } from "@mui/material";
import Followers from "./Followers";
import Following from "./Following";
import FavoriteCrates from "./FavoriteCrates";
import CrateCollection from "./CrateCollection";

function TabPanel(props) {
  const { children, value, index, id, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={id}
      aria-labelledby={id}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

export default function ProfileTabPanel({ value }) {
  return (
    <>
      <TabPanel value={value} id="followers" index={0}>
        <Followers />
      </TabPanel>
      <TabPanel value={value} id="following" index={1}>
        <Following />
      </TabPanel>
      <TabPanel value={value} id="crates" index={2}>
        <CrateCollection />
      </TabPanel>
      <TabPanel value={value} id="favorites" index={3}>
        <FavoriteCrates />
      </TabPanel>
    </>
  );
}
