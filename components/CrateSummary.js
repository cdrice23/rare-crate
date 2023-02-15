import {
  Stack,
  Chip,
  Grid,
  Box,
  Typography,
  Tooltip,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import { defaultData } from "@/constants/defaultdata";
import Image from "next/image";
import styles from "../styles/CrateSummary.module.css";

const SmallChip = styled(Chip)({
  fontSize: "0.6rem",
  height: "unset",
});

export default function CrateSummary(props) {
  return (
    <>
      <Button
        as={Grid}
        item
        xs={5.5}
        sx={{ backgroundColor: "#EED9C4" }}
        minHeight={"45vw"}
        maxHeight={"45vw"}
        margin={1}
        onClick={() => console.log("clicked!")}
        transition={"unset"}
        border={"unset"}
      >
        {/* <Grid
          item
          xs={5.5}
          sx={{ backgroundColor: "#EED9C4" }}
          minHeight={"45vw"}
          maxHeight={"45vw"}
          // zIndex={-2}
          margin={1}
        > */}
        <Box
          id="lip"
          sx={{
            backgroundColor: "black",
            height: "5%",
            width: "30%",
            clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
            // width: "49px",
            // borderBottom: "solid 20px black",
            // borderLeft: "9px solid transparent",
            // borderRight: "9px solid transparent",
            margin: "0 auto",
          }}
        ></Box>
        <Box maxWidth={"65%"} margin="0 auto">
          <Image
            src={props.cover}
            fill
            priority="true"
            className={styles.image}
          />
        </Box>
        <Box
          textAlign={"center"}
          sx={{ backgroundColor: "rgba(229, 230, 235, 1)" }}
          maxWidth="85%"
          padding={1}
          margin={"0 auto"}
        >
          <Tooltip title={props.name}>
            <Typography align="center" noWrap fontSize={"0.8rem"}>
              {props.name}
            </Typography>
          </Tooltip>
        </Box>
        {/* </Grid> */}
      </Button>
    </>
  );
}
