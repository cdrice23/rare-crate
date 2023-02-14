import AppBarBottom from "@/components/AppBarBottom";
import TimelineControl from "@/components/TimelineControl";
import AppBarTop from "@/components/AppBarTop";
import { Box, Button, Typography } from "@mui/material";
import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <>
      <AppBarTop />
      <TimelineControl />
      <Box>
        <Typography>This is supposed to be the timeline page.</Typography>
      </Box>
      <AppBarBottom />
    </>
  );
}
