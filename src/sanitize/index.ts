export const sanitize = (value: string | undefined) => {
  if (!value) return "";
  const replaceSpecialCharacters = value.replace(
    /[~`!@#$%^&*()_+=?/.,><|\}\{\]\[]/g,
    ""
  );
  return replaceSpecialCharacters;
};
