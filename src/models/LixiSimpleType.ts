import { LixiBase } from "./LixiBase";
import { LixiAttributeEnum, LixiLocalNameEnum } from "../enums/lixiEnums";

interface ILixiSimpleType {
  restrictionBase: () => string | null | undefined;
  getRestriction: () => Element | null;
  getRestrictionConstraint: () =>
    | { [key: string]: string[] | string }
    | undefined;
}

export class LixiSimpleType extends LixiBase {
  restrictionBase() {
    return this.getRestriction()?.getAttribute(LixiAttributeEnum.base);
  }

  getRestriction() {
    if (this.annotated) {
      return this.element.lastElementChild;
    }
    return this.element.firstElementChild;
  }

  restrictionConstraint() {
    const constraints: {
      enumerations: string[];
      others: { [key: string]: string };
    } = { enumerations: [], others: {} };
    const children = this.getRestriction()?.children;
    if (!children) return;
    for (const child of children) {
      const value = child.getAttribute(LixiAttributeEnum.value) || undefined;
      if (value) {
        if (child.localName === LixiLocalNameEnum.enumeration) {
          constraints.enumerations.push(value);
        } else {
          constraints.others[child.localName] = value;
        }
      }
    }
    return constraints;
  }
}
