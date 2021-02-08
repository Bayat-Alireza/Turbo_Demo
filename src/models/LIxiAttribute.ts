import { LixiBase } from "./LixiBase";
import { LixiAttributeEnum, LixiTagEnum } from "../enums/lixiEnums";

interface ILixiAttribute {
  element: Element;
  use: string | null;
  simpleType: () => Element | undefined;
}

export class LixiAttribute extends LixiBase implements ILixiAttribute {
  readonly element: Element;
  readonly use: string | null;
  constructor(element: Element) {
    super(element);
    this.element = element;
    this.use = element.getAttribute(LixiAttributeEnum.use);
  }

  simpleType() {
    const rootDoc = this.rootDocument();
    if (rootDoc) {
      const simpleTypes = rootDoc.getElementsByTagName(LixiTagEnum.simpleType);
      for (const simpleType of simpleTypes) {
        if (simpleType.getAttribute(LixiAttributeEnum.name) === this.type) {
          return simpleType;
        }
      }
    }
  }
}
