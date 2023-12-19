const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// In-memory cache (for simplicity, consider using a more robust caching solution in production)
const cache = {};

// Function to fetch data from SWAPI and cache it
const fetchDataAndCache = async (url) => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    cache[url] = data;
    return data;
  } catch (error) {
    throw error;
  }
};

// Middleware to check cache before making an API call
const cacheMiddleware = (req, res, next) => {
  const { resource, id } = req.params;
  const url = `https://swapi.dev/api/${resource}/${id}/`;

  if (cache[url]) {
    // If data is in the cache, send it directly
    res.json(cache[url]);
  } else {
    // If not in the cache, fetch from SWAPI, cache it, and then send the response
    fetchDataAndCache(url)
      .then((data) => res.json(data))
      .catch((error) => res.status(500).json({ error: 'Failed to fetch data from SWAPI' }));
  }
};

// Endpoint to get data by resource and ID
app.get('/:resource/:id', cacheMiddleware);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
