export const createArr = () => {
  const today = new Date().getFullYear();
  let arrOfDate = [];
  for (let i = today; i >= 1874; i--) {
    arrOfDate.push(i);
  }
  return arrOfDate;
};
