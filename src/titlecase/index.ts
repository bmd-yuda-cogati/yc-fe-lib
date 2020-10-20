export const titleCase = (value: string | undefined) => {
  if (!value) return '';
  let sentence = value.toLowerCase().replace(/[-_]/g, ' ').split(" ");
  for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }

  return sentence.join(" ");
}
