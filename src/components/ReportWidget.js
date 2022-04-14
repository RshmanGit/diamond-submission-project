
import IframeResizer from "iframe-resizer-react";
import {useParams} from "react-router-dom"
import GoToTop from './GoToTop';


import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {Link } from "react-router-dom"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

export default function ReportWidget() {

  
  const params =useParams();
  const id=params.id;
  return (
    <div className="widget" style={{backgroundColor:"#000", margin:"0", padding:"0"}} >
     <h3 style={{color:"#0000aa", backgroundColor:"#333" ,padding:"20px"}}><Link to= '/'>{`< Back to Listing`}</Link></h3>
    <Box sx={{ flexGrow: 1 }}  >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        
      >
        {Array.from(Array(1)).map((_, index) => (
          <Grid item xs={12} sm={12} md={12} key={index} style={{padding:0}}>
            <Item style={{padding:0}} ><IframeResizer
    name="Cutwise Widget"
    width="100%"
    height="1800px"
    frameBorder="0"
    src={`https://widget.cutwise.com/report/v1/${id}`}
    allowFullScreen
></IframeResizer>
</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
    <GoToTop />
    </div>
  );
}

