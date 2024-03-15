import { Box, Button, Container, Grid } from "@mui/material";
import homeimg from './HomeBg.jpg';


function Home() {
    return ( 
        <>
        <Box  style={{backgroundImage: `url(${homeimg})`, backgroundSize: 'cover'}}>
     
        <Box sx={{pt:15   ,pb:15   ,textAlign:"center" }}  >
        <Grid container spacing={2} sx={{pb:"25px"}}>
            <Grid item xs={2.5 }></Grid>
        <Grid item xs={7} textAlign={"center"} >
    <span style={{fontSize:"50px",color:"white"}}>Streamline Your Healthcare Journey Today</span>
  </Grid>
  <Grid item xs={2}></Grid>
        </Grid>

        <Grid container spacing={2} sx={{pb:"25px",mt:"5"}}>
            <Grid item xs={2.5 }></Grid>
        <Grid item xs={7} textAlign={"center"} >
    <span style={{fontSize:"19px",color:"white"}}> Welcome to Rugnaarth Simplifying Medical Record Management.Empower Yourself with Secure, Easy Record Access & Management.
</span>
  </Grid>
  <Grid item xs={2}></Grid>
        </Grid>
      <Grid container spacing={2} sx={{mt:5 }}  >
            <Grid item xs={2.5 }></Grid>
  
        <Grid item xs={7} textAlign={"center"}  >
     
        <Button   sx={{border:"3px solid violet",mr:6, bgcolor:"white", color:"white",":hover":{bgcolor:"violet"}}}  > <i  class="fa-brands fa-google-play" style={{color:"black",marginRight:"5px"}}></i> <span style={{color:"black"}}> Play Store</span> </Button>
        <Button   sx={{border:"3px solid violet",bgcolor:"white", color:"white",":hover":{bgcolor:"violet"}}}  > <i  class="fa-brands fa-apple" style={{color:"black",marginRight:"5px"}}></i> <span style={{color:"black"}}> App Store</span> </Button>
       
  </Grid>
  <Grid item xs={2}></Grid>
        </Grid>

        </Box>
 
        </Box>

        </>
    );
}

export default Home;
