import AppBarBottom from "@/components/AppBarBottom";
import AppBarTop from "@/components/AppBarTop";
import { Box, Button, Typography } from "@mui/material";

export default function Notifications(props) {
  return (
    <>
      <AppBarTop />
      <Box>
        <Typography>This is the notifications page.</Typography>
      </Box>
      <AppBarBottom />
    </>
  );
}
