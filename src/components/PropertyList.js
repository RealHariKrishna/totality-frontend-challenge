import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import PropertyCard from "./PropertyCard";
import Filters from "./Filters";
import { properties } from "../data/properties";

const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
}));

const FiltersContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const PropertyList = () => {
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const handleFilterChange = (filters) => {
    let filtered = properties;

    if (filters.location) {
      filtered = filtered.filter((property) =>
        property.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    if (filters.price) {
      const [min, max] = filters.price.split("-").map(Number);
      filtered = filtered.filter(
        (property) => property.price >= min && property.price <= max
      );
    }
    if (filters.bedrooms) {
      filtered = filtered.filter(
        (property) => property.bedrooms === Number(filters.bedrooms)
      );
    }
    if (filters.amenities) {
      filtered = filtered.filter((property) =>
        property.amenities.includes(filters.amenities)
      );
    }

    setFilteredProperties(filtered);
  };

  return (
    <Container>
      <FiltersContainer>
        <Filters onFilterChange={handleFilterChange} />
      </FiltersContainer>
      <Grid container spacing={3}>
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <Grid item xs={12} sm={6} md={4} key={property.id}>
              <PropertyCard property={property} />
            </Grid>
          ))
        ) : (
          <Typography variant="h6">No properties found.</Typography>
        )}
      </Grid>
    </Container>
  );
};

export default PropertyList;
