const cleanSet = (set, startString) => {
  const copiedArray = Array.from(set);

  if (startString === '' || typeof startString !== 'string') {
    return '';
  }

  copiedArray.forEach((element) => {
    if (element.startsWith(startString)) {
      const updatedElement = element.substring(startString.length);

      set.delete(element);
      set.add(updatedElement);
    } else {
      set.delete(element);
    }
  });

  return Array.from(set).join('-');
};

export default cleanSet;
