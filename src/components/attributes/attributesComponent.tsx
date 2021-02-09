
import React, { useEffect } from 'react'
import { Box, Divider, Input, TextField, Theme, Tooltip, Typography, withStyles } from "@material-ui/core"
import { LixiAttribute } from '../../models/LIxiAttribute'
import { useStyles } from './attributeStyle'
import prettifyXml from "prettify-xml"
import XMLViewer from 'react-xml-viewer'
import {options, xmlExample,customTheme,customThemeVsCode} from "./xmlExample"

interface LixiAttribType {
  lixiAttribute: Element[] | undefined
  parentName: string | undefined
}

export const ElementAttributes: React.FC<LixiAttribType> = ({ lixiAttribute, parentName }) => {
  const classes = useStyles()
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
    console.log("Attributes:", lixiAttribute)

  }, [lixiAttribute])
  return (
    <div>
      <Typography variant="h5" style={{ color: "#444" }}>
        {`${parentName} Attributes`}
      </Typography>
      <div
        style={{ maxHeight: "25vh", marginTop: "1rem", overflowY: "scroll" }}
      >
        <form action="">
          {lixiAttribute
            ? Array.prototype.map.call(lixiAttribute, (att, idx) => {
                const lixiAttrib = new LixiAttribute(att);
                if (lixiAttrib) {
                  return (
                    <div
                      key={`${idx}_${lixiAttrib.name}`}
                      style={{ marginBottom: "1rem" }}
                    >
                      <HtmlTooltip
                        title={
                          <React.Fragment>
                            <Typography
                              variant="h6"
                              style={{ color: "#1976d2" }}
                            >
                              {lixiAttrib.label()}
                            </Typography>
                            <Typography variant="body1">
                              {lixiAttrib.documentation()}
                            </Typography>
                          </React.Fragment>
                        }
                        arrow
                        placement="bottom-start"
                      >
                        <TextField
                          color="primary"
                          variant="filled"
                          fullWidth
                          inputProps={{ style: { color: "#fff" } }}
                          key={`${idx}_${att}`}
                          label={lixiAttrib.name || ""}
                        />
                      </HtmlTooltip>
                    </div>
                  );
                }
              })
            : undefined}
        </form>
      </div>
      <Divider color="#1976d2"/>
      <div style={{backgroundColor:"#333", margin:"2rem 0", overflow:"scroll",maxHeight:"25vh",padding:"1rem",border:"solid #444 0.2rem"}}>
        <Box >
        <Typography align="left" variant="h4" style={{ color: "#f9a825" }}>
              LIXI Message
        </Typography>
        </Box>
        <Typography align="left" variant="body1">
              <XMLViewer xml={prettifyXml(xmlExample,options)} theme={customThemeVsCode}/>
        </Typography>
      </div>
    </div>
  );
}
