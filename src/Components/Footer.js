import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#96705B", p: 3 }}>
      <Box>
        <Typography variant="body1" sx={{ fontWeight: 600, py: 2 }}>
          Quick Links
        </Typography>
        <Typography variant="body1" sx={{ py: 1 }}>
          Recipies
        </Typography>
        <Typography variant="body1" sx={{ py: 1 }}>
          Order
        </Typography>
      </Box>
      <Box sx={{ py: 5 }}>
        <Typography variant="body1" sx={{ fontWeight: 600, py: 2 }}>
          Socials
        </Typography>
        <Typography variant="body1" sx={{ py: 1 }}>
          {" "}
          <FaInstagram /> Instagram
        </Typography>
        <Typography variant="body1" sx={{ py: 1 }}>
          {" "}
          <FaTiktok /> TikTok
        </Typography>
        <Typography variant="body1" sx={{ py: 1 }}>
          {" "}
          <FaFacebook /> Facebook
        </Typography>
        <Typography variant="body1" sx={{ py: 1 }}>
          {" "}
          <FaEnvelope /> Mail
        </Typography>
      </Box>
      <Divider />
      <Typography variant="body1" sx={{ py: 1 }}>
        © {new Date().getFullYear()} Sheba Meals
      </Typography>
    </Box>
  );
}
