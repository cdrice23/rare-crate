import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  InputBase,
  Box,
  Typography,
  Badge,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";

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
            href="/notifications"
            component="a"
            LinkComponent={Link}
          >
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            href="/settings"
            component="a"
            LinkComponent={Link}
          >
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar id="emptyToolbar" />
    </>
  );
}
