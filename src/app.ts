/* --------------------------------- IMPORTS -------------------------------- */
import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { Position } from "./enums/position.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

/* -------------------------------- ELEMENTS -------------------------------- */
const form = document.querySelector("form.new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
const ul = document.querySelector("ul")!;

/* ------------------------------ LIST TEMPLATE ----------------------------- */
const list = new ListTemplate(ul);

/* --------------------------------- GENERIC -------------------------------- */
/*      NOTE: just to show how generic works not for use in this project      */
/* -------------------------------------------------------------------------- */
// with function
type DocObject = { name: string };
const addUID = <T extends DocObject>(object: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...object, uid };
};

let docOne = addUID({ name: "Kasra", age: 34 });
console.log(docOne.name);

// with interface
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docTwo: Resource<DocObject> = {
  uid: 1,
  resourceName: "person",
  data: { name: "Kaveh" },
};
console.log(docTwo.data.name);

const docThree: Resource<string[]> = {
  uid: 2,
  resourceName: "family",
  data: ["Kamal", "Kasra", "Kaveh"],
};
console.log(docThree.data);

/* ---------------------------------- CODE ---------------------------------- */
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;
  let values: [string, string, number];

  values = [toFrom.value, details.value, amount.valueAsNumber];
  type.value === "invoice"
    ? (doc = new Invoice(...values))
    : (doc = new Payment(...values));

  list.render(doc, type.value, Position.END);
});
