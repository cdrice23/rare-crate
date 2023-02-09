import AppBarBottom from "@/components/AppBarBottom";
import AppBarTop from "@/components/AppBarTop";
import { Box, Button, Typography } from "@mui/material";
import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <>
      <AppBarTop />
      <Box>
        <Typography>This is supposed to be the timeline page.</Typography>
        <Button variant="contained" onClick={() => signOut()}>
          Log out
        </Button>
      </Box>
      <AppBarBottom />
    </>
  );
}
