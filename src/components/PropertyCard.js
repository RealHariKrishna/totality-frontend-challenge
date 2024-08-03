import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { useCart } from "../context/CartContext";

const PropertyCard = ({ property }) => {
  const { addToCart } = useCart();

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={property.image}
        alt={property.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {property.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {property.description}
        </Typography>
        <Typography variant="h6">${property.price} / night</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => addToCart(property)}>
          Book Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default PropertyCard;
