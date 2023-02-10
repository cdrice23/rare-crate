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
} from "@mui/material";
import { styled } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

export default function AppBarBottom(props) {
  return (
    <>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar disableGutters>
          <IconButton
            size="large"
            color="inherit"
            sx={{ flexGrow: 1 }}
            href="/"
            component="a"
            LinkComponent={Link}
          >
            <LinearScaleIcon sx={{ transform: "rotate(90deg)" }} />
          </IconButton>
          <StyledFab color="secondary" aria-label="add">
            <AddIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }}></Box>
          <IconButton
            size="large"
            color="inherit"
            sx={{ flexGrow: 1 }}
            href="/profile/uid"
            component="a"
            LinkComponent={Link}
          >
            <PersonIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
