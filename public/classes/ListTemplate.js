import { Position } from "../enums/position.js";
var ListTemplate = (function () {
    function ListTemplate(container) {
        this.container = container;
    }
    ListTemplate.prototype.render = function (item, heading, position) {
        var li = document.createElement("li");
        var h4 = document.createElement("h4");
        h4.innerText = heading;
        li.append(h4);
        var p = document.createElement("p");
        p.innerText = item.format();
        li.append(p);
        position === Position.START
            ? this.container.prepend(li)
            : this.container.append(li);
    };
    return ListTemplate;
}());
export { ListTemplate };
