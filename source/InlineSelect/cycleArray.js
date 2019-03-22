export const getPrevItem = (list, index) => {
  if ((index - 1) < 0) {
    return list.length;
  } else {
    return index - 1;
  }
};

export const getNextItem = (list, index) => {
  if ((index + 1) > list.length) {
    return 0;
  } else {
    return index + 1;
  }
};
