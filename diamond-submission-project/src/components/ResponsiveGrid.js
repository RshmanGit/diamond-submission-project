import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import IframeResizer from "iframe-resizer-react";






const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid(props) {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <Grid 
        container
        spacing={{ xs: 2, sm: 2, md: 2 }}
        columns={{ xs: 12, sm: 8, md: 12 }}
        
      >
        {Array.from(Array(10)).map((_, index) => (
          <Grid item xs={12} sm={12} md={3.9} key={index}  >
            <Item id={props.id}  style={{overflow:"hidden" ,maxHeight:"350px",backgroundColor:"#333", borderColor:"#333"}} >
              <IframeResizer
                name="Cutwise Widget"
                width="600"
                height="430"
                frameBorder="0"
                src={`https://widget.cutwise.com/performance/v1/${props.a[0]}`}
                style={{ width: "1px", minWidth: "103%", position:"relative" , top:"-80px"}}
                
                
              />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
