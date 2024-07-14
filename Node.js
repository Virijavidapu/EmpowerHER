const express = require('express');
const app = express();
const port = 3000;

app.get('/api/getSeason', (req, res) => {
    // Simulate different season responses
    const seasons = ['Summer', 'Winter', 'Autumn', 'Spring'];
    const randomSeason = seasons[Math.floor(Math.random() * seasons.length)];
    res.send(randomSeason);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
