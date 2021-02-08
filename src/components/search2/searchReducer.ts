import { ItemType } from "./searchType";
import { result } from "../../util/nameSpaces";
interface IActionKeyUpPress {
  type: "keyUpPress";
}

interface IActionKeyDownPress {
  type: "keyDownPress";
}

interface IActionKeyDownDown {
  type: "keyDownDown";
}

interface IActionEnterPress {
  type: "enterPress";
}

export interface IActionHover {
  type: "hover";
  payLoad: { item: ItemType } | undefined;
}

export interface IActionClick {
  type: "click";
  payLoad: { item: ItemType } | undefined;
}

interface IActionSearch {
  type: "search";
  payLoad: { searchValue: string; items: ItemType[] };
}

export interface ISearch {
  result: ItemType[];
  selected: ItemType | undefined;
  cursor: number;
  searchValue: string | undefined;
}

type ISearchAction =
  | IActionKeyDownPress
  | IActionKeyDownDown
  | IActionKeyUpPress
  | IActionEnterPress
  | IActionHover
  | IActionClick
  | IActionSearch;

export const INITIAL_STATE: ISearch = {
  result: [],
  selected: undefined,
  cursor: -1,
  searchValue: "",
};

export const searchReducer = (
  state: ISearch = INITIAL_STATE,
  action: ISearchAction
): ISearch => {
  switch (action.type) {
    case "keyUpPress":
      if (state.result.length) {
        const idx =
          state.cursor > 0 ? state.cursor - 1 : state.result.length - 1;
        return {
          ...state,
          cursor: idx,
          searchValue: state.result[idx].name,
        };
      }
      return {
        ...state,
      };
    case "keyDownPress":
      if (state.result.length) {
        const idx =
          state.cursor < state.result.length - 1 ? state.cursor + 1 : 0;
        return {
          ...state,
          cursor: idx,
          searchValue: state.result[idx].name,
        };
      }
      return {
        ...state,
      };

    case "enterPress":
      if (state.result.length && state.cursor >= 0) {
        return {
          ...state,
          selected: state.result[state.cursor],
          searchValue: state.result[state.cursor].name,
          result: [],
        };
      }
      return {
        ...state,
      };

    case "hover":
      if (action.payLoad?.item) {
        return {
          ...state,
          searchValue: action.payLoad.item.name,

          cursor: state.result.indexOf(action.payLoad.item),
        };
      } else {
        return { ...state };
      }

    case "click":
      if (action.payLoad?.item) {
        return {
          ...state,
          selected: action.payLoad.item,
          searchValue: action.payLoad.item.name,
          cursor: state.result.indexOf(action.payLoad.item),
          result: [],
        };
      } else {
        return { ...state };
      }
    case "search":
      return {
        ...state,
        searchValue: action.payLoad.searchValue,
        selected: undefined,
        result:
          action.payLoad.searchValue.length >= 3
            ? action.payLoad.items.filter((i) => {
                return new RegExp(action.payLoad.searchValue, "ig").test(
                  i.name
                );
              })
            : [],
        cursor: action.payLoad.searchValue ? 0 : -1,
      };

    default:
      return state;
  }
};
