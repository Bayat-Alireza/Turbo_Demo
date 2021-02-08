import { FixedSizeList, ListChildComponentProps } from "react-window"
import React, { useState, useEffect, Dispatch, SetStateAction, createRef, RefObject, ChangeEvent, useReducer } from "react";
import { useKeyPress } from "../../util/useKeyPress"
import { ListItem } from "./searchResult/searchReslutComponent"
import { SearchBox } from "./searchBox/searchBoxComponent"
import { ItemType } from "./searchType"
import { useStyles } from "./search2Style"
import { searchReducer, INITIAL_STATE } from "./searchReducer"
import { XmlUtil } from "../../util/nameSpaces"
import { Typography, Divider } from "@material-ui/core";



export const ListExample = () => {
  const [{ result, selected, searchValue, cursor }, dispatch] = useReducer(searchReducer, INITIAL_STATE)
  const classes = useStyles()
  const items = () => {
    const allPath = new XmlUtil().getPathOfAllElements()
    return allPath.map((p, idx) => {

      return { id: idx, name: p || "" }
    })
  }
  const allPath = items()
  const searchBox = createRef<HTMLInputElement>()
  const resultListRef = createRef<FixedSizeList>()

  const upPress = useKeyPress("ArrowUp", searchBox);
  const enterPress = useKeyPress("Enter", searchBox);
  const downPress = useKeyPress("ArrowDown", searchBox);
  const escapePress = useKeyPress("Escape", searchBox);


  const recycleSearchItems = (props: ListChildComponentProps) => {
    const { index, style } = props
    if (result.length) {
      return (
        <ListItem
          style={style}
          index={index}
          key={result[index].id}
          active={index === cursor}
          item={result[index]}
          setSelected={dispatch}
          setHovered={dispatch}
        />
      )
    } else {
      return (<div style={style}></div>)
    }
  }

  const optionsCount = result.length || 1
  const optionsHeight = optionsCount > 8 ? 608 : optionsCount * 36

  const handelChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const sanitizedSearchValue = e.currentTarget.value
      .replace(/^([.*+\-?^${}()|[\]\\\/\s])/g, "")
      .replace(/([.*+\-?^${}()|[\]\\\/\s])+/g, ".");


    dispatch({ type: "search", payLoad: { searchValue: sanitizedSearchValue, items: allPath } })

  }

  useEffect(() => {
    if (enterPress) {
      dispatch({ type: "enterPress" })
    }
  }, [enterPress])

  useEffect(() => {
    if (escapePress) {
      console.log("escape pressed")
      dispatch({ type: "search", payLoad: { searchValue: "", items: allPath } })

    }
  }, [escapePress])
  useEffect(() => {

    const upPressTimeOut = setTimeout(() => {
      if (upPress) {
        dispatch({ type: "keyUpPress" })
      }
    }, 50);

    return (() => {
      clearTimeout(upPressTimeOut)
    })


  })
  useEffect(() => {

    const downPressTimeOut = setTimeout(() => {
      if (downPress) {
        dispatch({ type: "keyDownPress" })
      }

    }, 50);

    return (() => {
      clearTimeout(downPressTimeOut)
    })

  })



  useEffect(() => {
    resultListRef.current?.scrollToItem(cursor, "smart")
  }, [cursor, resultListRef])

  return (
    <div className={classes.root}>
      <div style={{ display: "relative", justifyItems: "center" }} >
        <form>
          <div className={classes.search}>
            <SearchBox refToSearchBox={searchBox} type="search" onChange={handelChange} value={searchValue} />
          </div>
        </form>

        {searchValue && searchValue?.length >= 3 && !selected ?
          < div className={classes.searchResult}  >
            <div style={{ backgroundColor: "#d1c4e9", display: "flex", justifyItems: "center", padding: "0.2rem 0.5rem", marginBottom: "0.5rem", borderRadius: "0.15rem" }}>
              <Typography
                className={classes.resultCount}
                align="left"
                variant="subtitle1"
                color="primary"
              >

                {`${result.length ? result.length : "No "}`} Results Found
            </Typography>
            </div>



            {result.length && !selected ?
              <FixedSizeList
                ref={resultListRef}
                height={optionsHeight}
                itemCount={optionsCount}
                itemSize={32}
                width={896}
                useIsScrolling
                initialScrollOffset={2}

              >
                {recycleSearchItems}
              </FixedSizeList>
              : null}
          </div>
          : null}

      </div>

    </div >

  );
};
