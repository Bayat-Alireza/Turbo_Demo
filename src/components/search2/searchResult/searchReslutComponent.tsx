import React from "react";
import { ListItemType } from "../searchType"
import { useStyles } from "./searchReslutStyle"

type p = {
  style: any,
  index: number
} & ListItemType

export const ListItem = ({ item, active, setSelected, setHovered, style, index }: p) => {
  // const { style, index } = props
  const classes = useStyles()

  return (

    <div
      style={{ ...style, boxSizing: "border-box", width: "800" }}
      tabIndex={active ? 0 : undefined}
      key={index}
      className={active ? classes.active : classes.searchResultItem}
      onClick={() => setSelected({ type: "click", payLoad: { item } })}
      onMouseEnter={() => setHovered({ type: "hover", payLoad: { item } })}
      onMouseLeave={() => setHovered({ type: "hover", payLoad: undefined })}
    >
      {item.name}
    </div>
  )
};
