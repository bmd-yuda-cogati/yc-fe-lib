export const stringToNumber = (value: string | undefined) => {
  if (!value) return 0;
  const replaceSpecialCharacters = value.replace(
    /[-_!@#$%^&*\(\)\+\=\|\]\[\{\]\}\s]/g,
    ""
  );
  return +replaceSpecialCharacters;
};
