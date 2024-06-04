const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Read employees data from the JSON file
const employeesFilePath = path.join(__dirname, 'employees.json');
let employees = [];

fs.readFile(employeesFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading employees.json:', err);
    return;
  }
  employees = JSON.parse(data);
});

// GET endpoint to fetch all employees
app.get('/employees', (req, res) => {
  res.json(employees);
});

// GET endpoint to fetch a specific employee by ID
app.get('/employees/:employeeID', (req, res) => {
  const employeeID = parseInt(req.params.employeeID, 10);
  const employee = employees.find(emp => emp.employeeID === employeeID);

  if (!employee) {
    return res.status(404).json({ error: 'Employee not found' });
  }

  res.json(employee);
});

// GET endpoint for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Employee API! Use /employees to get the list of employees.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
