// *https://www.registers.service.gov.uk/registers/country/use-the-api*
import fetch from 'cross-fetch';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { XmlUtil } from "../../util/nameSpaces"
import { List, ListItem } from '@material-ui/core';
import { lightGreen } from '@material-ui/core/colors';

interface PathType {
  name: string;
  id: number
}

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function AutoComplete() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<PathType[] | null>([]);
  const loading = open && options?.length === 0;

  // const items = () => {
  //   const allPath = new XmlUtil().getPathOfAllElements()
  //   return allPath.map((p, idx) => {

  //     return { id: idx, name: p || "" }
  //   })
  // }
  // const allPath = items()
  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await fetch('https://country.register.gov.uk/records.json?page-size=5000');
      await sleep(1e3); // For demo purposes.
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

  return (
    <Autocomplete
      id="asynchronous-demo"
      style={{ width: 600 }}
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

      renderInput={(params) => (
        <TextField
          {...params}
          style={{ color: "#fff" }}

          label="Asynchronous"
          variant="standard"
          InputProps={{
            ...params.InputProps,
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
  );
}
