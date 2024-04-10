import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenDrawer(open);
  };

  const navLinks = [
    { text: "Home", link: "/" },
    { text: "About", link: "/about" },
    { text: "Services", link: "/services" },
    { text: "Contact", link: "/contact" },
  ];

  return (
    <>
      <nav position="fixed">
        <Toolbar>
          <Box component="img" src="/hat.png" sx={{ width: "10%" }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, px: 2 }}>
            Sheba Meals
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </nav>
      <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer(false)}>
        <List>
          {navLinks.map((link) => (
            <ListItem button key={link.text}>
              <ListItemText primary={link.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
