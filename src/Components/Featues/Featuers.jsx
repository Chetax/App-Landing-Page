import { Box, Container, Grid } from "@mui/material";
import Feat from "./feture";
import img1 from './Feture1.png';
import img2 from './fetrure2.png';
import img3 from './feture3.png';
import img4 from './feuter_4.png';


function Features() {
    const Allfeature=["Patient Data Management","AI Disease Prediction"," Doctor Consultation","Patient-Doctor Connection"];
    const decription=[" Efficiently manage patient information with intuitive CRUD operations.","Utilize advanced AI algorithms to accurately predict diseases based on patient data.","Seamlessly connect with healthcare professionals for expert medical advice","Facilitate direct communication and collaboration between patients and doctors"];
    const images=[img1,img2,img3,img4];
    return (  <>
    <Box sx={{pt:15 , pb:15}}>
    
    <Grid container spacing={2} sx={{pb:"25px"}}>
            <Grid item xs={2.5 }></Grid>
        <Grid item xs={7} textAlign={"center"} >
    <span style={{fontSize:"40px",fontWeight:"bold", color:"black"}}>Awesome App <span style={{color:"violet"}} >Features</span></span>
  </Grid>
  <Grid item xs={2}></Grid>
        </Grid>
        <Grid container spacing={2} sx={{pb:"25px",mt:"5"}}>
            <Grid item xs={3.5 }></Grid>
        <Grid item xs={5} textAlign={"center"} >
    <span style={{fontSize:"19px",color:"black"}}> Here you are welcome to present number of the most characteristic features of our app  you are proud of.
</span>
  </Grid>
  <Grid item xs={2}></Grid>
        </Grid>

    </Box>

    <Box sx={{ ml: 20,pb:15, mr: 10, '@media (max-width: 473px)': {mr:15} }}>
  <Grid container spacing={2}>
    {Allfeature.map((feature, index) => (
      <Grid  item xs={12} lg={3.5} sm={6} md={5} xl={3} key={feature}>
       <Feat features={feature} description={decription[index]} img={images[index]} color="white"/>
   </Grid>
    ))}
  </Grid>
</Box>


    </>);

}

export default Features;