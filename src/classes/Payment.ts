import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  format(): string {
    return `${this.recipient} is owed £${this.amount} for ${this.details}`;
  }
}
