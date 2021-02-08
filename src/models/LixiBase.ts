import {
  LixiAttributeEnum,
  LixiLocalNameEnum,
  LixiTagEnum,
} from "../enums/lixiEnums";
interface ILixiBase {
  element: Element;
  name: string | null;
  hasTypeAtt: boolean;
  type: string | null;
  annotated: boolean;
  transactions: () => string[] | undefined;
  path: () => string | null | undefined;
  label: () => string | null | undefined;
  documentation: () => string | null | undefined;
}
export class LixiBase implements ILixiBase {
  readonly element: Element;
  readonly name: string | null;
  readonly hasTypeAtt: boolean;
  readonly type: string | null;
  readonly annotated: boolean;
  constructor(element: Element) {
    this.element = element;
    this.name = element.getAttribute(LixiAttributeEnum.name);
    this.hasTypeAtt = element.hasAttribute(LixiAttributeEnum.type);
    this.type = element.getAttribute(LixiAttributeEnum.type);
    this.annotated =
      this.element.children[0].localName === LixiLocalNameEnum.annotation;
  }

  transactions() {
    if (this.annotated) {
      return this.element.children[0]
        .getElementsByTagName(LixiTagEnum.transactions)[0]
        .textContent?.split(",");
    }
  }

  path() {
    if (this.annotated) {
      return this.element.children[0].getElementsByTagName(LixiTagEnum.path)[0]
        .textContent;
    }
  }

  label() {
    if (this.annotated) {
      return this.element.children[0].getElementsByTagName(LixiTagEnum.label)[0]
        .textContent;
    }
  }
  documentation() {
    if (this.annotated) {
      return this.element.children[0].getElementsByTagName(
        LixiTagEnum.documentation
      )[0].textContent;
    }
  }

  rootDocument() {
    return this.element.ownerDocument;
  }
}
