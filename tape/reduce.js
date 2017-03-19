const filtered = obj => Object.keys(obj).reduce((acc, key) => {
  if (key > 1) {
    acc[key] = obj[key];
  }

  return acc;
}, {});

export default filtered;
