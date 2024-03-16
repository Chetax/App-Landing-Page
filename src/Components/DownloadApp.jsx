import { Box, Button, Container, Grid, Typography } from "@mui/material";
import img1 from './Work/playstorebuton.png';
import img2 from './Work/appstore.png';
import mobileimg from './Work/mobileimg.png';
import Footer from "./Footer/Footer";
function Download() {
  return (
    <>
      <Box sx={{ bgcolor: "#cce9f6" }}>
        <Container sx={{ pb: 15, pt: 15 }}>
          <Grid container spacing={2}>
        
            <Grid item xs={12} lg={6} xl={6} style={{display:"flex",justifyContent:"center"}}>
            <img style={{height:"400px"}} src={mobileimg} alt="" />  
           </Grid>
               <Grid item xs={12} lg={6} xl={6} sx={{mt:5}} style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
              <Typography variant="h2" sx={{ fontSize: "45px", marginBottom: "1rem" }}>Download Our Application</Typography>
              <Typography variant="body1" sx={{ marginTop: "2rem" }}>Access our feature-rich app for seamless healthcare services on both Play Store and App Store.</Typography>
           <div className="div">
              <Button><img src={img1} style={{width:"170px"}} alt="" /></Button>
              
              <Button><img src={img2}style={{width:"160px",height:"150px"}}  alt="" /></Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer/>
    </>
  );
}

export default Download;
