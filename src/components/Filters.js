import React, { useState } from "react";
import { Box, TextField, MenuItem, Button } from "@mui/material";
import { styled } from "@mui/system";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  gap: theme.spacing(2),
}));

const FormControl = styled(TextField)(({ theme }) => ({
  minWidth: 120,
  width: "100%",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1.5),
  fontSize: "1rem",
}));

const Filters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    location: "",
    price: "",
    bedrooms: "",
    amenities: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange(filters);
  };

  return (
    <Container component="form" onSubmit={handleSubmit}>
      <FormControl
        label="Location"
        name="location"
        value={filters.location}
        onChange={handleChange}
        variant="outlined"
        select
      >
        <MenuItem value="">None</MenuItem>
        <MenuItem value="new-york">New York</MenuItem>
        <MenuItem value="los-angeles">Los Angeles</MenuItem>
        <MenuItem value="san-francisco">San Francisco</MenuItem>
      </FormControl>
      <FormControl
        label="Price Range"
        name="price"
        value={filters.price}
        onChange={handleChange}
        variant="outlined"
        select
      >
        <MenuItem value="">None</MenuItem>
        <MenuItem value="0-500">$0 - $500</MenuItem>
        <MenuItem value="500-1000">$500 - $1000</MenuItem>
        <MenuItem value="1000-2000">$1000 - $2000</MenuItem>
      </FormControl>
      <FormControl
        label="Bedrooms"
        name="bedrooms"
        value={filters.bedrooms}
        onChange={handleChange}
        variant="outlined"
        select
      >
        <MenuItem value="">None</MenuItem>
        <MenuItem value="1">1</MenuItem>
        <MenuItem value="2">2</MenuItem>
        <MenuItem value="3">3</MenuItem>
        <MenuItem value="4">4</MenuItem>
      </FormControl>
      <FormControl
        label="Amenities"
        name="amenities"
        value={filters.amenities}
        onChange={handleChange}
        variant="outlined"
        select
      >
        <MenuItem value="">None</MenuItem>
        <MenuItem value="pool">Pool</MenuItem>
        <MenuItem value="gym">Gym</MenuItem>
        <MenuItem value="parking">Parking</MenuItem>
      </FormControl>
      <StyledButton type="submit" variant="contained" color="primary">
        Apply Filters
      </StyledButton>
    </Container>
  );
};

export default Filters;
