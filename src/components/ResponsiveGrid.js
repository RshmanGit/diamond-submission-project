import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import IframeResizer from "iframe-resizer-react";
import {Link } from "react-router-dom"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "000",
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "center",
  color: "000"
}));

export default function ResponsiveGrid(props) {
  return (
    <Box sx={{ flexGrow: 1 }} style={{backgroundColor:"#131313"}} >
      <Grid 
        container
        spacing={{ xs: 2, sm: 2, md: 2 }} 
        columns={{ xs: 12, sm: 8, md: 12 }} 
      >
        {props.ids.map((id) => (
          <Grid item xs={12} sm={12} md={3.9} key={id}  >
            <Link to = {`/${id}`}>
              <Item style={{overflow:"hidden" ,maxHeight:"350px",backgroundColor:"#131313", borderColor:"#131313"}}>
                <IframeResizer 
                  name="Cutwise Widget"
                  width="600"
                  height="430"
                  frameBorder="0"
                  src={`https://widget.cutwise.com/performance/v1/${id}`}
                  style={{ width: "1px", minWidth: "103%", position:"relative" , top:"-80px"}}
                />
                <Button variant="text"  style={{backgroundColor:"#fff",color:"lightBlue"}}>
                  <Link to = "/333" style={{textDecoration:"none"}} >View Detailed Report</Link>
                </Button>
              </Item>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}