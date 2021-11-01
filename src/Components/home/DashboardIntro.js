import React from 'react'
import homepagebanner from '../../Images/homepage.png'
import TypeWriterEffect from 'react-typewriter-effect';


function DashboardIntro() {

    var option ={strings: ['Hello', 'World'],autoStart: true,loop: true}
    
    return(
        <div style={{marginTop:0}} id="home">
            <div  className="dashboard-top">
                <div style={{marginTop:200}}className="dashboard-top-matter">
                <TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
          color: '#3F3D56',
          fontWeight: 500,
          fontSize: '1.5em',
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          'Grab your dream job with Codemonks Interview Ready Course ',
        //   'it consist of two types...',
        //   'Single text display and multi text display',
        //   'Fonts can be customized.',
        //   'The type speed can be customized as well',
        ]}
        multiTextDelay={1000}
        typeSpeed={120}
      />
      {/* <Typewriter options={option}/> */}
</div>
                
                <div className="dashboard-top-banner">
                    <img className="dashboard-top-banner-image" style={{borderRadius:100}}src={homepagebanner} alt="" />
                </div>

            </div>
        </div>
    )
}

export default DashboardIntro