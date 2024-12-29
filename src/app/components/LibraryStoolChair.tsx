import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

interface LibraryStoolChairProps {
  product: Product;
}

const LibraryStoolChair: React.FC<LibraryStoolChairProps> = ({ product }) => {
  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={product.image}
        alt={product.name}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {product.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            ${product.price}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default LibraryStoolChair;