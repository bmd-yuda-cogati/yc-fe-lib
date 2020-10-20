import { titleCase } from "../src/titlecase";

const status: string = 'WAITING_FOR_APPROVAL';
const titleize = titleCase(status);
console.log(titleize);