import React from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia, Typography, Button, Box } from "@mui/material";
import {
  cardStyles,
  cardMediaStyles,
  overlayStyles,
  titleStyles,
  buttonStyles,
} from "./ProcuctListStyle";
export const Product = ({ elements }) => {
  if (!elements || !elements.image || !elements.title || !elements.id)
    return null;
  return (
    <Card sx={cardStyles}>
      <CardMedia
        component="img"
        image={elements.image}
        alt={elements.title}
        sx={cardMediaStyles}
      />
      <Box className="overlay" sx={overlayStyles}>
        <Typography variant="h6" sx={titleStyles}>
          {elements.title}
        </Typography>
        <Button
          component={Link}
          to={`/product/${elements.id}`}
          variant="contained"
          sx={buttonStyles}
        >
          Show Details
        </Button>
      </Box>
    </Card>
  );
};
