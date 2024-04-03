import { Box, Button } from "@mui/material";
import React from "react";

export default function Nav() {
  return (
    <Box component="nav">
      <Box sx={{ position: "fixed", top: 0, right: 0, p: 4 }}>
        <Button variant="contained">PRE-ORDER NOW</Button>
      </Box>
    </Box>
  );
}
