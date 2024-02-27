const fs = require('fs');

function countStudents(path) {
  return new Promise(() => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        throw new Error('Cannot load the database');
      }
      const rows = data.trim().split('\n');
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
      for (const [key, value] of Object.entries(fieldsWithFirstName)) {
        const list = value.join(', ');
        console.log(`Number of students in ${key}: ${value.length}. List: ${list}`);
      }
    });
  });
}

module.exports = countStudents;
