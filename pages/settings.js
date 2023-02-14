import AppBarBottom from "@/components/AppBarBottom";
import AppBarTop from "@/components/AppBarTop";
import { Box, Button, Typography } from "@mui/material";
import { signOut } from "next-auth/react";

export default function Settings(props) {
  return (
    <>
      <AppBarTop />
      <Box>
        <Typography>This is the settings page.</Typography>
      </Box>
      <Button variant="contained" onClick={() => signOut()}>
        Log out
      </Button>
      <AppBarBottom />
    </>
  );
}
