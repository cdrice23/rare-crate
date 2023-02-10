import AppBarBottom from "@/components/AppBarBottom";
import AppBarTop from "@/components/AppBarTop";
import { Box, Button, Typography } from "@mui/material";

export default function Crate(props) {
  return (
    <>
      <AppBarTop />
      <Box>
        <Typography>This is a crate page.</Typography>
      </Box>
      <AppBarBottom />
    </>
  );
}
