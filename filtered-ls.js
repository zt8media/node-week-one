// Load the required modules
const fs = require('fs');
const path = require('path');

// Get the directory name and file extension from command-line arguments
const directoryPath = process.argv[2];
const fileExtension = '.' + process.argv[3];

// Read the directory asynchronously
fs.readdir(directoryPath, (err, list) => {
  if (err) {
    return console.log('Error reading directory:', err);
  }

  // Filter the list of files by the specified extension
  list.forEach(file => {
    if (path.extname(file) === fileExtension) {
      console.log(file);
    }
  });
});




//Their solution 
// 'use strict'
// const fs = require('fs')
// const path = require('path')

// const folder = process.argv[2]
// const ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })