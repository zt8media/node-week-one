// Load the required modules
const fs = require('fs');
const path = require('path');

// Define the path to the planets text file
const filePath = path.join(__dirname, 'planets.txt');

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    return console.log('Error reading file:', err);
  }

  // Split the file content by commas and print each planet
  const planets = data.split(',').map(planet => planet.trim());
  planets.forEach(planet => console.log(planet));
});
