// RENAME TO SLUG

import AppBarBottom from "@/components/AppBarBottom";
import AppBarTop from "@/components/AppBarTop";
import CrateHeader from "@/components/CrateHeader";
import { Box, Button, Typography } from "@mui/material";

export default function Crate(props) {
  return (
    <>
      <AppBarTop />
      <CrateHeader />
      <AppBarBottom />
    </>
  );
}
