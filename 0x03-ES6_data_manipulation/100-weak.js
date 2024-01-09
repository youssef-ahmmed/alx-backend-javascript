export const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
  const endpointNumbers = weakMap.get(endpoint) || 0;
  if (endpointNumbers >= 5) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, endpointNumbers + 1);
};
