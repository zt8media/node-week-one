// Load the filesystem module
const fs = require('fs');

// Get the file path from the command-line arguments
const filePath = process.argv[2];

// Read the file synchronously
const fileContent = fs.readFileSync(filePath, 'utf8');

// Split the file content by newlines and count the number of newlines
const numberOfNewlines = fileContent.split('\n').length - 1;

// Print the number of newlines to the console
console.log(numberOfNewlines);





// Thier solution 
// 'use strict'
//     const fs = require('fs')
    
//     const contents = fs.readFileSync(process.argv[2])
//     const lines = contents.toString().split('\n').length - 1
//     console.log(lines)
    
    // note you can avoid the .toString() by passing 'utf8' as the
    // second argument to readFileSync, then you'll get a String!
    //
    // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
