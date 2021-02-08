import React, { useState, useEffect, Fragment } from 'react'

import { useStyles } from "./mainStyle"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { CssBaseline } from '@material-ui/core';
import { ElementHeader } from '../elementHeader/elementHeaderComponent';
import { ElementAttributes } from '../attributes/attributesComponent';
import { SubElements } from '../subElements/elementSubElementsComponent';

import { parsedXml, XmlUtil } from "../../util/nameSpaces"
import { ILixiElement, LixiElement } from '../../models/LixiElement';
import { LixiAttribute } from '../../models/LIxiAttribute';
import { LixiSimpleType } from '../../models/LixiSimpleType';
// import { ElementHeader } from "./components/elementHeader/elementHeaderComponent"
import { TextField, Button } from '@material-ui/core';
import { ThemeContext } from '../../themeProvider';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
// import { ElementDetails } from '../search2/searchType';


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

interface PathType {
  name: string;
  id: number
}



export const Element = () => {
  const classes = useStyles()
  const [path, setPath] = useState<PathType>()
  const [details, setDetails] = useState<LixiElement>()
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<PathType[] | null>([]);
  const loading = open && options?.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const paths = new XmlUtil().getPathOfAllElements()

      if (active) {
        setOptions(paths.map((p, idx) => ({ id: idx, name: p || "" })));
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  useEffect(() => {
    const elements = parsedXml.getElementsByTagName('xs:element')
    const pathName = path?.name
    const result: Element = Array.prototype.find.call(elements, (element) => {
      return new LixiElement(element).path() === pathName
    })

    if (result) {
      setDetails(new LixiElement(result))
    }
    // console.log("ele", result)
  }, [path?.name])

  return (<div className={classes.root} >
    <CssBaseline />

    <Autocomplete
      id="asynchronous-demo"
      style={{ width: '100%' }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={options || []}
      loading={loading}
      filterSelectedOptions
      ListboxComponent={List}
      includeInputInList
      onChange={(e, v) => { if (v) setPath(v) }}

      renderInput={(params) => (
        <TextField
          {...params}
          style={{ width: '100%' }}

          // style={{ color: "#fff", width: "100%" }}
          // color="secondary"
          className={classes.searchBox}
          label="LIXI Item Path"
          variant="filled"
          fullWidth
          InputProps={{
            ...params.InputProps, fullWidth: true,
            className: classes.searchBox,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
    {path ?
      <Grid container spacing={2} >
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <ElementHeader path={path} details={details} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            { }
            <SubElements subElements={details?.getLixiSubElements()} />
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <ElementAttributes parentName={details?.name || ""} lixiAttribute={details?.getAttributes()} />
          </Paper>
        </Grid>

      </Grid>
      : undefined}

  </div>)

}