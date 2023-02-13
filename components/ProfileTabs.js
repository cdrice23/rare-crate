import React from "react";
import { Tab, Tabs, Box, Grid, Typography } from "@mui/material";
import Followers from "./Followers";
import Following from "./Following";
import FavoriteCrates from "./FavoriteCrates";

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function ProfileTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="8 Followers" />
          <Tab label="12 Following" />
          <Tab label="3 Crates" />
        </Tabs>
      </Box>
      <TabPanel value={value} id="followers" index={0}>
        <Followers />
      </TabPanel>
      <TabPanel value={value} id="following" index={1}>
        <Following />
      </TabPanel>
      <TabPanel value={value} id="crates" index={2}>
        <FavoriteCrates />
      </TabPanel>
    </Box>
  );
}
