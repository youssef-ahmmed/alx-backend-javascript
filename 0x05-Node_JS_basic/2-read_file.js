const fs = require('fs');

const getDataFromCsvFile = (path) => {
  const csvData = fs.readFileSync(path, 'utf8');
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

const printFieldStats = (fieldsWithName) => {
  for (const [key, value] of Object.entries(fieldsWithName)) {
    const list = value.join(', ');
    console.log(`Number of students in ${key}: ${value.length}. List: ${list}`);
  }
};

const countStudents = (path) => {
  try {
    const results = getDataFromCsvFile(path);
    const fieldsWithFirstName = assignNamesWithFields(results);

    console.log(`Number of students: ${results.length}`);
    printFieldStats(fieldsWithFirstName);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
