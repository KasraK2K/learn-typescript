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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
function g(name) {
    return function (target, propertyKey, descriptor) {
        var fn = descriptor.value;
        descriptor.value = function () { return fn(name); };
    };
}
var C = (function () {
    function C() {
    }
    C.prototype.method = function (name) {
        console.log("method called", name);
    };
    __decorate([
        g("Kaveh"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], C.prototype, "method", null);
    return C;
}());
new C().method("Kasra");
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
