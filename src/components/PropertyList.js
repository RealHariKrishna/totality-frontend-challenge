import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropertyCard from "./PropertyCard";
import Filters from "./Filters";
import { properties } from "../data/properties";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
  },
  filtersContainer: {
    marginBottom: theme.spacing(4),
  },
}));

const PropertyList = () => {
  const classes = useStyles();
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
    <Box className={classes.container}>
      <Box className={classes.filtersContainer}>
        <Filters onFilterChange={handleFilterChange} />
      </Box>
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
    </Box>
  );
};

export default PropertyList;
