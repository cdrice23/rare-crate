import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Popover,
  IconButton,
  Divider,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import { styled } from "@mui/system";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AlbumIcon from "@mui/icons-material/Album";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Image from "next/image";
import { defaultData } from "@/constants/defaultdata";
import styles from "../styles/CrateHeader.module.css";

const ChipTabs = styled(Tabs)({
  root: {
    alignItems: "center",
    minHeight: "0px",
  },
});

const ChipTab = styled(Tab)((theme) => ({
  root: {
    textTransform: "none",
    backgroundColor: "#e0e0e0",
    borderRadius: "16px",
    minWidth: 0,
    minHeight: 0,
    height: "24px",
    fontSize: "0.8125rem",
    whiteSpace: "nowrap",
    marginRight: "4px",
    fontFamily: "Roboto",
    color: "white",
  },
}));
// ((props) => {
//   <Tab disableRipple {...props}></Tab>;
// });

export default function CrateHeader(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="5rem"
        >
          <IconButton>
            <ArrowBackIosNewIcon />
          </IconButton>
        </Grid>
        <Grid
          item
          flexGrow={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
          // height={"50%"}
          maxWidth={"66%"}
        >
          <Typography variant="h6" textAlign="center">
            {defaultData.crate.title}
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <IconButton onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Typography>Test popover for edit etc.</Typography>
      </Popover>
      <Grid container sx={{ backgroundColor: "#708090" }} color="white">
        <Grid item xs={2}>
          <Typography
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            TAGS
          </Typography>
        </Grid>
        <Grid item xs={10}>
          {/* <ChipTabs variant="scrollable" scrollButtons allowScrollButtonsMobile>
            {defaultData.crate.tags.map((obj) => (
              <ChipTab label={obj.name} />
            ))}
            <ChipTab label={"test1"} disableRipple disableFocusRipple />
          </ChipTabs> */}
          <Tabs variant="scrollable" scrollButtons allowScrollButtonsMobile>
            {defaultData.crate.tags.map((obj) => (
              <Tab
                label={obj.name}
                disableRipple
                sx={{
                  textTransform: "none",
                  backgroundColor: "#e0e0e0",
                  borderRadius: "16px",
                  minWidth: 0,
                  minHeight: 0,
                  height: "24px",
                  fontSize: "0.8125rem",
                  whiteSpace: "nowrap",
                  marginRight: "4px",
                  fontFamily: "Roboto",
                  // color: "white",
                }}
              />
            ))}
          </Tabs>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={4}>
          <Image
            src={defaultData.crate.cover}
            fill
            priority="true"
            className={styles.image}
          />
        </Grid>
        <Grid item container xs={8} direction={"column"}>
          <Grid item sx={{ backgroundColor: "black" }} xs={4} />
        </Grid>
      </Grid>
    </>
  );
}
