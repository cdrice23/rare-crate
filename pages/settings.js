import AppBarBottom from "@/components/AppBarBottom";
import AppBarTop from "@/components/AppBarTop";
import { Box, Button, Typography } from "@mui/material";

export default function Settings(props) {
  return (
    <>
      <AppBarTop />
      <Box>
        <Typography>This is the settings page.</Typography>
      </Box>
      <AppBarBottom />
    </>
  );
}
