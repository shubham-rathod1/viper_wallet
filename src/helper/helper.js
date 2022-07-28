export const ellipsify = (str) => {
  const length = str.length;
  if (str.length > 6) {
    return str.substring(0, 3) + '...' + str.substring(length - 3, length);
  } else {
    return str;
  }
};
