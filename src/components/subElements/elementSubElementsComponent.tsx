
import React, { useEffect } from 'react'
import { Button, CssBaseline, TextField, Theme, Tooltip, Typography, withStyles } from "@material-ui/core"
import { LixiElement } from '../../models/LixiElement'
import { findByLabelText } from '@testing-library/react'

type SubElementType = { subElements: { [key: string]: Element[] } | undefined }

export const SubElements: React.FC<SubElementType> = ({ subElements }) => {
  const HtmlTooltip = withStyles((theme: Theme) => ({
    tooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }))(Tooltip);
  useEffect(() => {
    console.log("ashrgf", subElements ? subElements["sequence"] : "")
  })
  return <div>
    <div>
      <Typography style={{ color: '#444' }} gutterBottom variant="h5" color="secondary">

        {subElements ? `Sub-Elements - ${Object.keys(subElements)[0].toUpperCase()}` : "No Sub-Element"}

      </Typography>
    </div>
    {subElements ? <div style={{ maxHeight: "50vh", overflowY: "scroll" }} >
      <CssBaseline />

      <div style={{ display: "flex", alignContent: "flex-start", flexDirection: "column", alignItems: "flex-start", overflow: "hidden", }}>
        {subElements && "sequence" in subElements ?
          Array.prototype.map.call(subElements["sequence"], (subEle, idx) => {
            const lixiElement = new LixiElement(subEle)
            return (
              <HtmlTooltip
                title={<React.Fragment>
                  <Typography variant="h6" style={{ color: "#1976d2" }}>
                    {lixiElement.label()}
                  </Typography>
                  <Typography variant="body1" >
                    {lixiElement.documentation()}
                  </Typography>
                </React.Fragment>
                }
                arrow
                placement="bottom-start">
                <TextField
                  style={{ width: "100%", color: "#fff", boxSizing: "border-box", marginBottom: "0.5rem", padding: "0.5rem" }}
                  inputProps={{ style: { color: "#fff" } }}
                  key={`${idx}_${lixiElement.name}`}
                  variant="filled"
                  color="secondary"
                  value={lixiElement.label()}
                >
                </TextField>
              </HtmlTooltip>
            )
          })
          : undefined}
        {subElements && "choice" in subElements ?
          Array.prototype.map.call(subElements["choice"], (subEle, idx) => {
            const lixiElement = new LixiElement(subEle)
            return (<Typography align="left" key={`${idx}_${lixiElement.name}`} variant="h6" color="secondary">

              {lixiElement.name}

            </Typography>)
          })
          : undefined}
      </div>
    </div> : undefined}
  </div>
}

