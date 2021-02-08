import React, { Fragment, ChangeEvent } from "react"
import { useStyles } from "./searchBoxStyle"
import { TextField, InputBase } from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';

type SearchBoxType = {
  refToSearchBox: React.RefObject<HTMLInputElement>
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  value: string | undefined
  type: string
  inputStyle?: Record<"inputStyle", string>
}

export const SearchBox = ({ type, refToSearchBox, onChange, value, ...props }: SearchBoxType) => {
  const classes = useStyles()
  return (
    <Fragment>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        autoComplete="off"
        onChange={onChange}
        name="q"
        ref={refToSearchBox}
        fullWidth
        placeholder="Search…"
        value={value}
        type={type}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </Fragment>
  )

}
