const fs = require('fs');
const parse = require('csv-parse/lib/es5/sync');

// Read the CSV file
const csvData = fs.readFileSync('products.csv', 'utf8');

// Parse the CSV data using csv-parse
const data = parse(csvData, {
  columns: true,  // Treat the first row as a header row
  escape: '\\',   // Use backslash as the escape character
  delimiter: ',', // Use comma as the delimiter
});

// Convert the data to JSON
const jsonData = JSON.stringify(data);

// Write the JSON to a file or use it in your JavaScript code
fs.writeFileSync('myFile.json', jsonData);
