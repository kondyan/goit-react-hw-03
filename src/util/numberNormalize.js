const numberNormalize = (str) =>
  str
    .split("")
    .filter((key) => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].includes(parseInt(key)))
    .map((item, index) => {
      if (index === 10) {
        return;
      }
      if (index === 3 || index === 6 || index === 8) {
        return "-" + item;
      }
      return item;
    })
    .join("");
// DDD-DDD-DD-DD

export default numberNormalize;
