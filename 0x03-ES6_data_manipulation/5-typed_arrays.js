const createInt8TypedArray = (length, position, value) => {
  if (position >= length) {
    throw Error('Position outside range');
  }

  const dataView = new DataView(new ArrayBuffer(length));
  dataView.setInt8(position, value);

  return dataView;
};

export default createInt8TypedArray;
