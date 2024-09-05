import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import ProductResult from './ProductResult';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(response => {
        console.log(response.data.products); // Adjust according to actual data structure
        setProducts(response.data.products); // Access the 'products' array
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setError('Error fetching products');
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Products</h1>
      <TextField
        label="Search Products"
        variant="outlined"
        fullWidth
        margin="normal"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <Grid container spacing={2}>
        {filteredProducts.map(product => (
          <ProductResult key={product.id} product={product} />
        ))}
      </Grid>
    </div>
  );
};

export default Products;
