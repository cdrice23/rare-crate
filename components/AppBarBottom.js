import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  InputBase,
  Box,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import LinearScaleIcon from "@mui/icons-material/LinearScale";

export default function AppBarBottom(props) {
  return (
    <>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <LinearScaleIcon sx={{ transform: "rotate(90deg)" }} />
        </Toolbar>
      </AppBar>
    </>
  );
}
