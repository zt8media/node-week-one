// Load the filesystem module
const fs = require('fs');

// Get the file path from the command-line arguments
const filePath = process.argv[2];

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    return console.log('Error reading file:', err);
  }

  // Split the file content by newlines and count the number of newlines
  const numberOfNewlines = data.split('\n').length - 1;

  // Print the number of newlines to the console
  console.log(numberOfNewlines);
});




// Their solution 
// 'use strict'
// const fs = require('fs')
// const file = process.argv[2]

// fs.readFile(file, function (err, contents) {
//   if (err) {
//     return console.log(err)
//   }
//   // fs.readFile(file, 'utf8', callback) can also be used
//   const lines = contents.toString().split('\n').length - 1
//   console.log(lines)
// })

