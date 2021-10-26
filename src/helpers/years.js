export const yearMap = () => {
  const years = {};
  for (let i = 1900; i < 2022; i += 1) {
    years[i] = `${i}-01-01`;
  }
  return years;
};
