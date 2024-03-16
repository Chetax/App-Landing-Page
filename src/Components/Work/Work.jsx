import { Box, Button, Container, Grid } from "@mui/material";
import homeimg from './HomeBg.jpg';
import img1 from './step1.png';
import img2 from './step2.png';
import img3 from './step3.png';
import Feat from '../Featues/feture';
function Work() { 
    
const Title=["User Registration & Login ","Patient Profile Setup","Start Using App"];
const decription=["Create account, sign in securely.","Enter medical details, personalize profile.","Explore features, access healthcare services."];
const images=[img1,img2,img3];
    return (<>

    <Box  style={{backgroundImage: `url(${homeimg})`, backgroundSize: 'cover'}}>
         <Box sx={{pt:15   ,pb:15   ,textAlign:"center" }}  >
        <Grid container spacing={2} sx={{pb:"25px"}}>
       <Grid item xs={2.5 }></Grid>
        <Grid item xs={7} textAlign={"center"} >
    <span style={{fontSize:"50px",color:"white"}}>How Does It Work</span>
  </Grid>
  <Grid item xs={2}></Grid>
        </Grid>

        <Grid container spacing={2} sx={{pb:"25px",mt:"5"}}>
            <Grid item xs={3 }></Grid>
        <Grid item xs={6} textAlign={"center"} >
    <span style={{fontSize:"19px",color:"white"}}> Unlock Your Health Potential with Rugnarath: Register, Set Up Your Profile, Thrive!
</span>
  </Grid>
  <Grid item xs={2}></Grid>
        </Grid>

     

        </Box>
        <Box sx={{ pb: 15, paddingLeft: "15%", paddingRight: "15%" ,'@media (max-width:600px)': { paddingLeft: "27%" ,paddingRight:10 } }}>
  <Grid container spacing={2} justifyContent="center">
    {Title.map((feature, index) => (
      <Grid item xs={12} lg={3.5} sm={6} md={5} xl={4} key={feature}>
        <Feat features={feature} description={decription[index]} img={images[index]} color="white"/>
      </Grid>
    ))}
  </Grid>
</Box>

        </Box>
       
    </>  );
}

export default Work;