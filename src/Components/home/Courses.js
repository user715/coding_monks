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
      <Card sx={{ minWidth: 275 }} style={{backgroundColor:"rgb(230,230,230)"}}>
        <CardContent style={{margin:"10px"}}>
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
          <Button size="small" href="/coding_monks/course">Learn More</Button>
        </CardActions>
      </Card>
    );
  }




function Courses(){

    return(
        <div>
          <h3 className='course-title'>Courses</h3>
          <div className='Courses row'>
            
            
            <div className="Course col-12 col-sm-8 col-md-6 col-lg-4" style={{margin:"30px auto"}}>
              <BasicCard/>
            </div>
        </div>
        </div>
    )
}

 

export default Courses;