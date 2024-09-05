import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const ProductResult = ({ product }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={product.image} // Use 'image' property
          alt={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography variant="h6">
            Price: ${product.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Brand: {product.brand}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Model: {product.model}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Color: {product.color}
          </Typography>
          {product.popular && <Typography variant="body2" color="text.secondary">Popular</Typography>}
          {product.onSale && <Typography variant="body2" color="text.secondary">On Sale</Typography>}
          {product.discount > 0 && <Typography variant="body2" color="text.secondary">Discount: {product.discount}%</Typography>}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductResult;
