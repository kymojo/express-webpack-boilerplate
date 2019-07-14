// =========================================
// Import modules using webpack
// -----------------------------------------
const path = require('path');
const express = require('express');

// =========================================
// Set up express app
// -----------------------------------------
// Set express app
const app = express();
app.use(express.json()); // allow JSON parsing

// Set port using PORT environment variable
// (eg. using command: set PORT=1337)
// if not set, default to port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

// =========================================
// Use public folder
// -----------------------------------------

app.use(express.static(path.join(__dirname, '../client/public')));