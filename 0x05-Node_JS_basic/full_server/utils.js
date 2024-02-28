import fs from 'fs';

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

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const results = getListDataFromCsvFile(data);
    const fieldsWithFirstName = assignNamesWithFields(results);

    resolve(fieldsWithFirstName);
  });
});

export default readDatabase;
