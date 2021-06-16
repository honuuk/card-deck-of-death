export const padZero = (t: number) => {
  const stringNum = t.toString();
  return ('0' + stringNum).slice(-2);
};
