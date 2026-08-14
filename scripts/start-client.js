const path = require('path');
require('dotenv').config();

// Keep the React dev server on a dedicated client port even when backend PORT is set in .env.
process.env.PORT = process.env.CLIENT_PORT || '3000';

require(path.join(__dirname, '..', 'node_modules', 'react-scripts', 'scripts', 'start'));
