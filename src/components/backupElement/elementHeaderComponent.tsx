
import React, { useContext } from 'react'
import { Typography, Button } from "@material-ui/core"
import { ThemeContext } from '../../themeProvider';


export default function ElementComponent() {
  const setThemeName = useContext(ThemeContext)



  return (
    <div>
      <Typography variant="h1" color="secondary">
        Element

      </Typography>

      <div className="App">
        <Button
          variant="contained"
          color="primary"
          onClick={() => setThemeName("lightTheme")}

        >
          Set Light Theme
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setThemeName("darkTheme")}
        >
          Set Dark Theme
        </Button>
      </div>
    </div>
  )
}
