import React, { useState, useEffect, Fragment } from 'react'
import { Typography, Button, Divider, Checkbox, Grid, Paper, CssBaseline, Box, TextField, InputLabel, FormControl, MenuItem, List, InputBase } from '@material-ui/core';

import { parsedXml } from "../../util/nameSpaces"
import { LixiElement } from "../../models/LixiElement"
import { LixiAttribute } from "../../models/LIxiAttribute"
import { LixiSimpleType } from "../../models/LixiSimpleType"
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import SearchIcon from '@material-ui/icons/Search';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { FixedSizeList, ListChildComponentProps } from 'react-window';

import { LixiLocalNameEnum } from '../../enums/lixiEnums';
import { useStyles } from "./mainStyle"


export const Main = () => {
  const classes = useStyles();

  const [attributes, setAttributes] = useState<Element[] | undefined>([])
  const [elements, setElements] = useState<{ [key: string]: Element[] } | undefined>({})
  const [parentElements, setParentElements] = useState<LixiElement | undefined>()


  const recycleSubElement = (props: ListChildComponentProps) => {
    const { index, style } = props
    if (elements && elements[LixiLocalNameEnum.sequence]) {
      return (<div style={{ ...style }}><ListItem button divider key={`${index}_${elements[LixiLocalNameEnum.sequence][index].getAttribute("name")}`} className={classes.buttons} color="secondary" >{new LixiElement(elements[LixiLocalNameEnum.sequence][index]).label()}</ListItem></div>)
    } else {
      return (<div style={style}></div>)
    }
  }

  useEffect(() => {
    const elements = parsedXml.getElementsByTagName("xs:element")
    const lixiEle = new LixiElement(elements[5])
    setAttributes(lixiEle.getAttributes())
    setElements(lixiEle.getLixiSubElements())
    setParentElements(lixiEle)

  }, [])

  const optionsCount = elements?.[LixiLocalNameEnum.sequence]?.length ? elements[LixiLocalNameEnum.sequence].length : 1
  const optionsHeight = optionsCount > 8 ? 600 : optionsCount * 36

  return (
    <div className={classes.root}>
      <CssBaseline />

      <div className={classes.content}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>


        <div>
          <Typography variant="h3">{parentElements?.label()}</Typography>


        </div>
        <div className={classes.elementHeader}>

          <Typography color="primary" variant="h5">{parentElements?.label()}</Typography>
          <Typography variant="caption">{"Required"}</Typography>
          <div>
            <Typography variant="caption">{"Repeatable"}</Typography>
            <Checkbox></Checkbox>
          </div>


        </div>
        <Divider />
        <div className={classes.elementBody} >
          <Grid alignContent="center" alignItems="flex-start" direction="row" container spacing={3}>

            <Grid item  >
              <Typography variant="h6">
                Sub-Elements
          </Typography>

              <Box borderColor="primary.main" borderLeft={1} >
                <List className={classes.elementsOfElement} >
                  <FixedSizeList height={optionsHeight}
                    itemCount={optionsCount}
                    itemSize={50}
                    width={300}
                  >
                    {recycleSubElement}
                  </FixedSizeList>
                </List>
                {/* <List className={classes.elementsOfElement} style={{ maxHeight: '100%', overflow: 'auto' }}>
                  {
                    elements ? elements[LixiLocalNameEnum.sequence]?.map((se, idx) => {
                      return (<Button key={`${idx}_${se.getAttribute("name")}`} className={classes.buttons} color="secondary" variant="outlined">{new LixiElement(se).label()}</Button>)
                    }) : undefined
                  }
                </List> */}

              </Box>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="h6">
                Attributes
          </Typography>
              <div className={classes.attributesOfElement}>
                {attributes?.map((e: any, idx: number) => {
                  const simpleType = new LixiAttribute(e).simpleType()
                  const restrictions = simpleType ? new LixiSimpleType(simpleType).restrictionConstraint() : undefined
                  const enums = restrictions ? restrictions.enumerations : undefined
                  console.log("enums", enums)

                  if (enums && enums?.length > 0) {
                    // return (<select defaultValue={e.getAttribute("name")}>
                    //   {enums.map((e, idx) => {
                    //     return (<option key={idx}>{e}</option>)
                    //   })}
                    // </select>)
                    return (



                      <TextField
                        className={classes.textField}
                        id={`${parentElements?.name}_${e.getAttribute("name")}`}
                        select
                        label={e.getAttribute("name")}
                        key={idx}
                      // value={currency}
                      // onChange={handleChange}

                      >
                        {/* {enums.map((e) => (
                          <MenuItem key={e} value={e}>
                            {e}
                          </MenuItem>
                        ))} */}
                        <FixedSizeList height={optionsHeight}
                          itemCount={optionsCount}
                          itemSize={50}
                          width={300}
                        >
                          {recycleSubElement}
                        </FixedSizeList>
                      </TextField>
                    )
                  } else {
                    return (<TextField key={`${idx}_${e.getAttribute("name")}`} variant="standard" fullWidth margin="dense" spellCheck name={"type"} id="1" label={e.getAttribute("name")} className={classes.textField}></TextField>)
                  }



                  // console.log("enums", new LixiAttribute(e).simpleType())


                })}
              </div>
            </Grid>
          </Grid>
        </div>
        <Button variant="outlined" color="primary">Save</Button>
        <Button variant="outlined" color="secondary">Add</Button>
      </div>

    </div>
  )

}