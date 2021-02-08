
import React from 'react'
import { Typography, InputBase, Box, CssBaseline, List, ListItem, MenuItem, Menu } from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from "./elementHeaderStyle"
import IconBreadcrumbs from '../breadCrumbs/breadCrumbsComponent';
import VariantAvatars from '../avatar/avatarComponent';
import SmallOutlinedChips from '../chip/chipComponent';
import FreeSolo from '../search/searchComponent';
import { ListExample } from '../search2/search2Component';
import AutoComplete from '../auto-complete/AutoComplete';
import { AnyAaaaRecord } from 'dns';
import { ElementDetails, ItemType } from '../search2/searchType';
import { ILixiElement, LixiElement } from '../../models/LixiElement';

interface ElementHeaderInfo {
  path: ItemType | undefined
  details: LixiElement | undefined
}

export const ElementHeader: React.FC<ElementHeaderInfo> = (props: ElementHeaderInfo) => {

  const classes = useStyles()
  return (
    <div>
      <div className={classes.root}>
        <div>
          <div>

            <IconBreadcrumbs pathSections={props.path?.name.split(".")} />
          </div>
        </div>

        {/* <ListExample /> */}
        {/* <AutoComplete /> */}
      </div>
      <div className={classes.element}>

        <Typography align="left" variant="h4" color="secondary">
          {props.path?.name.split(".").pop()}
        </Typography>
        <SmallOutlinedChips transactions={props.details?.transactions() || []} />


      </div>
      <Box className={classes.minMax}>
        <Box >
          <Typography
            noWrap
            align="left"
            variant="caption"
            color="primary">
            Min Occurs =
            <Typography
              noWrap
              style={{ color: "#444" }}
              align="left"
              variant="caption">
              &nbsp; {`${props.details?.minOccurs}`}
            </Typography>
          </Typography>

        </Box>
        <Box >
          <Typography
            noWrap
            align="left"
            variant="caption"
            color="primary">
            Max Occurs =
            <Typography
              noWrap
              style={{ color: "#444" }}
              align="left"
              variant="caption">
              &nbsp; {`${props.details?.maxOccurs}`}
            </Typography>
          </Typography>

        </Box>
        <Box >
          {props.details?.hasTypeAtt ?
            <Typography noWrap align="left" variant="caption" color="primary" >
              Type: <Typography noWrap align="left" variant="caption" color="secondary">
                {props.details?.type}
              </Typography>
            </Typography>
            : undefined}
        </Box>
      </Box>
      <CssBaseline />
      <div className={classes.element}>

        <Typography style={{ color: "#444" }} align="left" variant="body1" >
          {props.details?.documentation()}
        </Typography>

      </div>


    </div >
  )
}
