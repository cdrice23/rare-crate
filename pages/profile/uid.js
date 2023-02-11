import AppBarBottom from "@/components/AppBarBottom";
import TimelineControl from "@/components/TimelineControl";
// RENAME TO SLUG

import AppBarTop from "@/components/AppBarTop";
import { Box, Button, Typography } from "@mui/material";
import ProfileHeader from "@/components/ProfileHeader";
import ProfileCenter from "@/components/ProfileCenter";
import ProfileTabs from "@/components/ProfileTabs";
import TabMenu from "@/components/TabMenu";

export default function Profile(props) {
  return (
    <>
      <AppBarTop />
      <ProfileHeader />
      <ProfileCenter />
      {/* <ProfileTabs /> */}
      <TabMenu />
      <AppBarBottom />
    </>
  );
}
