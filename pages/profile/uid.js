import AppBarBottom from "@/components/AppBarBottom";
import TimelineControl from "@/components/TimelineControl";
// RENAME TO SLUG

import AppBarTop from "@/components/AppBarTop";
import { Box, Button, Typography } from "@mui/material";
import ProfileHeader from "@/components/ProfileHeader";

export default function Profile(props) {
  return (
    <>
      <AppBarTop />
      <ProfileHeader />
      <AppBarBottom />
    </>
  );
}
