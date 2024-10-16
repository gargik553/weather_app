import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
const InfoBox = ({data}) => {
  return (
    <div style={{alignItems:"center",marginTop:"30px",display:"flex",justifyContent:"center"
    }}>
        
            
       
      <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={`https://openweathermap.org/img/wn/${data.icon}.png`}
        title="green iguana"
      />
       
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {data.city_name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          
          Temperature:{(data.temp-272.15).toFixed(2)}<sup>0C</sup>
          <br />
          Temperature Max:{(data.temp_max-272.15).toFixed(2)}<sup>0C</sup>
          <br />
          Temperature Min:{(data.temp_min-272.15).toFixed(2)}<sup>0C</sup>
          <br />
          Humidity:{data.humidity}
        </Typography>
      </CardContent>
  

      
      
    </Card>

    </div>
  )
}

export default InfoBox
