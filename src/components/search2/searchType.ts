import { Dispatch, SetStateAction } from "react";
import { IActionClick, IActionHover } from "./searchReducer";

export type ItemType = { id: number; name: string };

export type ElementDetails = {
  name:string
  type?:string
  minOccurs:number
  maxOccurs:number
  transactions: string[]
  description:string
}

export type ListItemType = {
  item: ItemType;
  active: boolean;
  setSelected: ({ type, payLoad }: IActionClick) => void;
  setHovered: ({ type, payLoad }: IActionHover) => void;
};
