import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categoryImages = {
    tv: '/images/categories/tv.jpg',
    audio: '/images/categories/audio.jpg',
    laptop: '/images/categories/laptop.jpg',
    mobile: '/images/categories/mobile.jpg',
    gaming: '/images/categories/gaming.jpg',
    appliances: '/images/categories/appliances.jpg',
  };

  useEffect(() => {
    axios.get('http://localhost:3000/categories')
      .then(response => {
        console.log(response.data);
        // Ensure the response has the 'categories' array
        if (response.data && Array.isArray(response.data.categories)) {
          setCategories(response.data.categories);
        } else {
          setError('Invalid categories data');
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
        setError('Error fetching categories');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Categories</h1>
      <Grid container spacing={2}>
        {Array.isArray(categories) && categories.length > 0 ? (
          categories.map(category => (
            <Grid item xs={12} sm={6} md={4} key={category}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={categoryImages[category]}  // Dynamically load the image based on category
                  alt={category}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <p>No categories available</p>
        )}
      </Grid>
    </div>
  );
};

export default Categories;
