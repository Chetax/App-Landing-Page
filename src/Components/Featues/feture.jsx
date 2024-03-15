import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Feat({ features, description, img }) {
  return (
    <Card sx={{ maxWidth: 255, textAlign: "center" }} >
      <CardActionArea sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        <CardMedia
          component="img"
          height="150"
          image={img}
          alt={features} // Use features for alt text
          sx={{ borderRadius: '50%', width: "150px" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {features}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
  );
}
