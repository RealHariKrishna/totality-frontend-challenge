import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Property Rental
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/booking">
          Bookings
        </Button>
        <Button color="inherit" component={Link} to="/checkout">
          Checkout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
