import React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  
   function BasicCard() {
    return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography> */}
          <Typography variant="h6" component="div">
            DSA Interview Ready Course
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Intermidiate
          </Typography>
          <Typography variant="body2">
          <ul>
  <li>Data Structures</li>
  <li>Algorithms</li>
  <li>Dynamic Programing</li>
  <li>OOP</li>
  <li>DBMS</li>
</ul>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }




function Courses(){

    return(
        <div>
        <div className='Courses'>
            <br/>
            <br/>
            <span className='course-title'>Courses</span>
            
            <div className="Course">
        <BasicCard></BasicCard>
            </div>
        </div>
        </div>
    )
}

 

export default Courses;