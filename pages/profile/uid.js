// RENAME TO SLUG
import { useRef, useState } from "react";
import AppBarTop from "@/components/AppBarTop";
import AppBarBottom from "@/components/AppBarBottom";
import { Box, Button, Typography } from "@mui/material";
import ProfileHeader from "@/components/ProfileHeader";
import ProfileCenter from "@/components/ProfileCenter";
import ProfileTabs from "@/components/ProfileTabs";
import TabMenu from "@/components/TabMenu";
import ProfileTabPanel from "@/components/ProfileTabPanel";
import { theme } from "styles/theme";

export default function Profile(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(+event.currentTarget.value);
  };

  return (
    <>
      <AppBarTop />
      <Box
        position={"sticky"}
        top={"56px"}
        sx={{ backgroundColor: theme.palette.background.default }}
        zIndex={2}
      >
        <ProfileHeader />
        <ProfileCenter />
        <TabMenu handleChange={handleChange} value={value} />
      </Box>
      <ProfileTabPanel value={value} />
      <AppBarBottom />
    </>
  );
}
