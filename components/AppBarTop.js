import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  InputBase,
  Box,
  Typography,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";

export default function AppBarTop(props) {
  return (
    <>
      <AppBar>
        <Toolbar>
          <img src="/rare_crate_logo.png" height={24} />
          <Box>
            <Typography>rare crate.</Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }}></Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <SearchIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <NotificationsIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar id="emptyToolbar" />
    </>
  );
}
