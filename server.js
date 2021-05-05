const express = require('express');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/personal-portfolio'));

app.listen(process.env.PORT || 8080);
