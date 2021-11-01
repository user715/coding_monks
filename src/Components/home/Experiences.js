// import { Translate } from "@material-ui/icons";
import React from "react";
import { Carousel } from 'react-carousel-minimal';
import image1 from '../../Images/1.jpg'
import image2 from '../../Images/2.jpg'
import image3 from '../../Images/3.jpg'



function Expereinces() {

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }


    const data = [
        {
          image: image1,
          caption: ""
        },
        {
          image: image2,
          caption: ""
        },
        {
          image: image3,
          caption: ""
        },
        {
          image: image1,
          caption: ""
        },
        {
          image: image2,
          caption: ""
        },
        {
          image: image3,
          caption: ""
        },
      ];


   
    return (
        <div className='experiences'>
          <br/>
            <h1 style={{marginTop:50}}>Past Batch Students</h1>

            <Carousel
            data={data}
            time={2000}
            width="750px"
            height="400px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px 450px 80px",
              transform:'TranslateZ(-10000)'
            }}
          />
<br/>
        </div>
    )
    
}

export default Expereinces

