import { master_schema } from "../assets/LIXI-Master-Schema";
import { LixiTagEnum } from "../enums/lixiEnums";
type NameSpace = {
  [ns: string]: string;
};

export const nameSpaceResolver: XPathNSResolver = (
  prefix: string | null
): string | null => {
  const ns: NameSpace = {
    xs: "http://www.w3.org/2001/XMLSchema",
    lx: "lixi.org.au/schema/appinfo_elements",
    li: "lixi.org.au/schema/appinfo_instructions",
  };
  return prefix ? ns[prefix] : null;
};

const parser = new DOMParser();
export const parsedXml = parser.parseFromString(master_schema, "text/xml");

export const path = parsedXml.evaluate(
  "//lx:path[1]/text()",
  parsedXml,
  nameSpaceResolver,
  XPathResult.ANY_TYPE,
  null
);

export const result = parsedXml.evaluate(
  "/xs:schema/xs:element",
  parsedXml,
  nameSpaceResolver,
  XPathResult.ANY_TYPE,
  null
);

export const packageElement = parsedXml.evaluate(
  "/xs:schema/xs:element[@name='Package']",
  parsedXml,
  nameSpaceResolver,
  XPathResult.ANY_TYPE,
  null
);

export class XmlUtil {
  private parsedDoc: Document;
  constructor(parsedDoc: Document = parsedXml) {
    this.parsedDoc = parsedDoc;
  }

  getPathOfAllElements() {
    const elementsPath = [];
    const elements = parsedXml.getElementsByTagName(LixiTagEnum.element);
    for (const e of elements) {
      elementsPath.push(
        e.getElementsByTagName(LixiTagEnum.path)[0].textContent
      );
    }
    return elementsPath;
  }

  evaluateXpath(xpath: string, contextNode: Node | Document): XPathResult {
    contextNode = !contextNode ? this.parsedDoc : contextNode;
    return this.parsedDoc.evaluate(
      xpath,
      contextNode,
      nameSpaceResolver,
      XPathResult.ANY_TYPE,
      null
    );
  }
}
