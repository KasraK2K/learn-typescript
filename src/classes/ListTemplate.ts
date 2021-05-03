import { Position } from "../enums/position";
import { HasFormatter } from "../interfaces/HasFormatter";
/**
 * @constructor get the ul element as container
 * @method render create html list item and add to container
 */
export class ListTemplate {
  constructor(private container: HTMLUListElement) {}

  render(item: HasFormatter, heading: string, position: Position) {
    const li = document.createElement("li");

    const h4 = document.createElement("h4");
    h4.innerText = heading;
    li.append(h4);

    const p = document.createElement("p");
    p.innerText = item.format();
    li.append(p);

    position === Position.START
      ? this.container.prepend(li)
      : this.container.append(li);
  }
}
