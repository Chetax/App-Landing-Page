import { Box,Typography } from "@mui/material";
function Footer() {
    return ( <>
   <Box sx={{ bgcolor: "black",textAlign:"center" ,pb:5,pt:5}}>
    <Typography color={"grey"}>Copyright ©2024;  Designed By @ <span style={{color:"white"}}> Team Rugnarath</span></Typography>
    </Box>
    </> );
}

export default Footer;