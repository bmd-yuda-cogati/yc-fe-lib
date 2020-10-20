export const stringToNumber = (value: string | undefined) => {
  if (!value) return 0;
  const replaceSpecialCharacters = value.replace(
    /[A-Za-z-~`!@#$%^&*()_+=?/.,><|\}\{\]\[\s]/g,
    ""
  );
  return +replaceSpecialCharacters;
};
