import AppBarBottom from "@/components/AppBarBottom";
import TimelineControl from "@/components/TimelineControl";
import AppBarTop from "@/components/AppBarTop";
import { Box, Button, Typography } from "@mui/material";

export default function Profile(props) {
  return (
    <>
      <AppBarTop />
      <Box>
        <Typography>This is a user's profile page.</Typography>
      </Box>
      <AppBarBottom />
    </>
  );
}
