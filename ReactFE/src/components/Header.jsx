import React from "react";
import { AppBar, Toolbar, Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Navigation from "./Navigation";
import CallToAction from "./CallToAction";

export default function Header() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between", padding: { xs: '10px 20px', md: '10px 80px' } }}>
        {/* Logo Section */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Logo />
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
          <Navigation />
        </Box>

        {/* Call To Action */}
        <Box>
          <CallToAction />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
