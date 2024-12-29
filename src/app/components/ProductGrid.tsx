// components/ProductGrid.tsx
import React from 'react';
import { Grid, Button } from '@mui/material';
import LibraryStoolChair from './LibraryStoolChair';

interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
}

interface ProductGridProps {
    products: Product[];
    addToCart: (product: Product) => void; // Correctly type addToCart
}

const ProductGrid = ({ products, addToCart }: ProductGridProps) => {
    return (
        <Grid container spacing={3} sx={{ mt: 3 }}>
            {products.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                    <LibraryStoolChair product={product} />
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ marginTop: 10, width: '100%' }}
                        onClick={() => addToCart(product)}
                    >
                        Add to Cart
                    </Button>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductGrid;