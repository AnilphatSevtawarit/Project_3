const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


// Add this line

app.get("/", (req, res) => {
    res.send('ขจรยศ จาวยญ <br> สุพิศจา เจิมแก้ว');
});
app.get("/2", (req, res) => {
    res.send('Hello, World!');
});

// Add this line
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
