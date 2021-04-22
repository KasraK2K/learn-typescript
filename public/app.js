import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { Position } from "./enums/position.js";
const form = document.querySelector("form.new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
const addUID = (object) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, object), { uid });
};
let docOne = addUID({ name: "Kasra", age: 34 });
console.log(docOne.name);
const docTwo = {
    uid: 1,
    resourceName: "person",
    data: { name: "Kaveh" },
};
console.log(docTwo.data.name);
const docThree = {
    uid: 2,
    resourceName: "family",
    data: ["Kamal", "Kasra", "Kaveh"],
};
console.log(docThree.data);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    type.value === "invoice"
        ? (doc = new Invoice(...values))
        : (doc = new Payment(...values));
    list.render(doc, type.value, Position.END);
});
