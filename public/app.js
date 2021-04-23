var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { Position } from "./enums/position.js";
var form = document.querySelector("form.new-item-form");
var type = document.querySelector("#type");
var toFrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
var ul = document.querySelector("ul");
var list = new ListTemplate(ul);
var addUID = function (object) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, object), { uid: uid });
};
var docOne = addUID({ name: "Kasra", age: 34 });
console.log(docOne.name);
var docTwo = {
    uid: 1,
    resourceName: "person",
    data: { name: "Kaveh" },
};
console.log(docTwo.data.name);
var docThree = {
    uid: 2,
    resourceName: "family",
    data: ["Kamal", "Kasra", "Kaveh"],
};
console.log(docThree.data);
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var doc;
    var values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    type.value === "invoice"
        ? (doc = new (Invoice.bind.apply(Invoice, __spreadArray([void 0], values)))())
        : (doc = new (Payment.bind.apply(Payment, __spreadArray([void 0], values)))());
    list.render(doc, type.value, Position.END);
});
