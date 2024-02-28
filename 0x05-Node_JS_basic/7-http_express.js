const express = require('express');
const fs = require('fs');

const port = 1245;
const path = process.argv[2];

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

const getListDataFromCsvFile = (csvData) => {
  const rows = csvData.trim().split('\n');
  return rows.slice(1).map((row) => row.split(','));
};

const assignNamesWithFields = (results) => {
  const fieldsWithFirstName = {};

  results.forEach((entry) => {
    const field = entry[3];
    const firstName = entry[0];

    if (!fieldsWithFirstName[field]) {
      fieldsWithFirstName[field] = [];
    }

    fieldsWithFirstName[field].push(firstName);
  });

  return fieldsWithFirstName;
};

const getFieldStats = (fieldsWithName) => {
  let fieldStats = '';
  for (const [key, value] of Object.entries(fieldsWithName)) {
    const list = value.join(', ');
    fieldStats += `Number of students in ${key}: ${value.length}. List: ${list}\n`;
  }
  return fieldStats.trim();
};

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const results = getListDataFromCsvFile(data);
    const fieldsWithFirstName = assignNamesWithFields(results);

    let databaseStats = `Number of students: ${results.length}\n`;
    databaseStats += getFieldStats(fieldsWithFirstName);
    resolve(databaseStats);
  });
});

const sendResponse = (res, responseText) => {
  res.send(responseText);
};

app.get('/students', (req, res) => {
  countStudents(path)
    .then((data) => {
      const responseText = `This is the list of our students\n${data}`;
      sendResponse(res, responseText);
    })
    .catch((err) => {
      const responseText = `This is the list of our students\n${err.message}`;
      sendResponse(res, responseText);
    });
});

app.listen(port);

module.exports = app;
