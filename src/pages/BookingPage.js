import React from "react";
import { Container, Paper, Box } from "@mui/material";
import Cart from "../components/Cart";

const BookingPage = () => {
  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Box sx={{ marginTop: 2 }}>
          <Cart />
        </Box>
      </Paper>
    </Container>
  );
};

export default BookingPage;
