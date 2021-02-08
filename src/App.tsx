import React, { useEffect, useState, Fragment, useContext } from 'react';
import './App.css';
import { parsedXml } from "./util/nameSpaces"
import { LixiElement } from './models/LixiElement';
import { LixiAttribute } from './models/LIxiAttribute';
import { LixiSimpleType } from './models/LixiSimpleType';
// import { ElementHeader } from "./components/elementHeader/elementHeaderComponent"
import { TextField, Button } from '@material-ui/core';
import { ThemeContext } from './themeProvider';
import { Element } from "./components/element/elementComponent"






function getLixiElementsChildAttributes(element: Element) {
  const complexType = element.getElementsByTagName("xs:complexType")[0]

  const attributes = []
  for (const child of complexType.children) {
    if (child.localName === "attribute") {
      attributes.push(child.getAttribute("name"))
    }
  }
  return attributes
}



function App() {

  const [attributes, setAttributes] = useState<(string | null)[]>([])


  useEffect(() => {
    const elements = parsedXml.getElementsByTagName('xs:element')
    const simpleTypes = parsedXml.getElementsByTagName('xs:simpleType')
    const LixiEle = new LixiElement(elements[5])
    setAttributes(getLixiElementsChildAttributes(elements[5]))
    // console.log("transactions: ", LixiEle.transactions())
    // console.log("label: ", LixiEle.label())
    // console.log("path: ", LixiEle.path())
    // console.log("name: ", LixiEle.name)
    // console.log("minOccurs: ", LixiEle.minOccurs)
    // console.log("maxOccurs: ", LixiEle.maxOccurs)
    // console.log("hasTypeAtt: ", LixiEle.hasTypeAtt)
    // console.log("type: ", LixiEle.type)
    // console.log("getComplexType: ", LixiEle.getLixiComplexType())
    // console.log("getLixiAttributes: ", LixiEle.getAttributes())
    const attributes = LixiEle.getAttributes()
    if (attributes) {
      for (const att of attributes) {
        const newAtt = new LixiAttribute(att)
        // console.log("Attributes' path: ", newAtt.path())
        // console.log("Attributes' type: ", newAtt.type)

        for (const simple of simpleTypes) {
          if (simple.getAttribute("name") === newAtt.type) {
            const newSimple = new LixiSimpleType(simple)
            // console.log("base", newSimple.restrictionBase())
            // console.log("simpleType: ", newSimple.restrictionConstraint())

          }
        }
      }
    }


    // console.log("getLixiSubElements: ", LixiEle.getLixiSubElements())
    // console.log("annotated: ", LixiEle.annotated)
  }, [])


  // const setThemeName = useContext(ThemeContext)
  return (
    <Element />
  );
}

export default App;
