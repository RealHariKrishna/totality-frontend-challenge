import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Box>
      <Typography variant="h4">Your Cart</Typography>
      {cartItems.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        cartItems.map((item) => (
          <Box
            key={item.id}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb={2}
          >
            <Typography>
              {item.title} - ${item.price} x {item.quantity}
            </Typography>
            <Box>
              <IconButton
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                -
              </IconButton>
              <IconButton
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </IconButton>
              <IconButton onClick={() => removeFromCart(item.id)}>
                Remove
              </IconButton>
            </Box>
          </Box>
        ))
      )}
      <Typography variant="h5">Total: ${total}</Typography>
    </Box>
  );
};

export default Cart;
