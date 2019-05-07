const axios = require('axios');
const dotenv = require('dotenv');
const express = require('express');
const path = require('path');

dotenv.config();
const { PORT, PEXELS_SECRET } = process.env;

const app = express();
const root = path.resolve(__dirname, 'dist');

app.get('/images', async (req, res) => {
  const { query, count } = req.query;
  const result = await axios.get(
    `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&page=1&per_page=${count}`,
    {
      headers: {
        Authorization: PEXELS_SECRET,
      },
    }
  );
  res.json(result.data);
});

app.use(express.static(root));

app.get('*', (req, res) => {
  res.sendFile('index.html', { root });
});

app.listen(PORT);
