const cleanSet = (set, startString) => {
  const stringWithNoPrefix = [];

  if (startString === '' || typeof startString !== 'string') {
    return '';
  }

  set.forEach((string) => {
    if (typeof string === 'string' && string.startsWith(startString)) {
      stringWithNoPrefix.push(string.substring(startString.length));
    }
  });

  return stringWithNoPrefix.join('-');
};

export default cleanSet;
