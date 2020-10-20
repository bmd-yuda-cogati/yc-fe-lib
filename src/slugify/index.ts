export const slugify = (val: string) =>
  val
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-") // Replace special characters with -
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text

export default slugify;
