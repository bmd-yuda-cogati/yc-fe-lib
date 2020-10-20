export const ribuan = (nStr: string | number) => {
  const value: string = nStr.toString();
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export default ribuan;