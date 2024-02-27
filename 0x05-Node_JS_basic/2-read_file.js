const fs = require('fs');

const countStudents = (path) => {
  try {
    const csvData = fs.readFileSync(path, 'utf8');
    const rows = csvData.trim().split('\n');
    const results = rows.slice(1).map((row) => row.split(','));

    const fieldsWithFirstName = {};

    results.forEach((entry) => {
      const field = entry[3];
      const firstName = entry[0];

      if (!fieldsWithFirstName[field]) {
        fieldsWithFirstName[field] = [];
      }

      fieldsWithFirstName[field].push(firstName);
    });

    console.log(`Number of students: ${results.length}`);

    for (const key in fieldsWithFirstName) {
      const value = fieldsWithFirstName[key];
      console.log(`Number of students in ${key}: ${value.length}. List: ${value}`);
    }

  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
