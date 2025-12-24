const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));
app.listen(port, () => {
    console.log(`Game is running on port ${port}`);
    console.log(`Open your browser and go to http://localhost:${port}`);
});