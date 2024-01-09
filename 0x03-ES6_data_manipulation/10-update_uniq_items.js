const updateUniqueItems = (groceryMap) => {
  if (!(groceryMap instanceof Map)) {
    throw Error('Cannot process');
  }

  for (const [key, value] of groceryMap.entries()) {
    if (value === 1) {
      groceryMap.set(key, 100);
    }
  }

  return groceryMap;
};

export default updateUniqueItems;
