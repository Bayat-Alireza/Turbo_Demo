import { LixiBase } from "./LixiBase";
import { LixiAttributeEnum, LixiLocalNameEnum } from "../enums/lixiEnums";

export interface ILixiElement {
  minOccurs: string | null;
  maxOccurs: string | null;
  getAttributes: () => Element[] | undefined;
  getLixiComplexType: () => Element | undefined;
  getLixiSubElements: () => { [key: string]: Element[] } | null | undefined;
}

export class LixiElement extends LixiBase implements ILixiElement {
  readonly minOccurs: string | null;
  readonly maxOccurs: string | null;
  constructor(element: Element) {
    super(element);
    this.minOccurs = element.getAttribute(LixiAttributeEnum.minOccurs);
    this.maxOccurs = element.getAttribute(LixiAttributeEnum.maxOccurs);
  }

  getAttributes() {
    const attributes: Array<Element> = [];
    const complexType = this.getLixiComplexType();
    if (complexType) {
      for (const child of complexType.children) {
        if (child.localName === LixiLocalNameEnum.attribute) {
          attributes.push(child);
        }
      }
      return attributes;
    }

    return;
  }

  getLixiComplexType() {
    for (const child of this.element.children) {
      if (child.localName === LixiLocalNameEnum.complexType) {
        return child;
      }
    }
  }

  getLixiSubElements() {
    const complexType = this.getLixiComplexType();
    const subElements: { [key: string]: Element[] } = {};
    const firstChild = complexType?.firstElementChild;

    if (firstChild?.localName === LixiLocalNameEnum.sequence) {
      subElements[LixiLocalNameEnum.sequence] = [...firstChild.children];
    } else if (firstChild?.localName === LixiLocalNameEnum.choice) {
      subElements[LixiLocalNameEnum.choice] = [...firstChild.children];
    }
    if (Object.keys(subElements).length > 0) {
      return subElements;
    }
    return;
  }
}
