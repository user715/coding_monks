import React from 'react'
import DashboardIntro from './DashboardIntro'
import Achievements from './Companies'
import './Style.css'
import Courses from './Courses'
import Footer from './footer'
import Expereinces from './Experiences'

function Dashboard() {
    
    return(
        <div>
            {/* <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>
          <li><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
          <li><Link  to="about" spy={true} smooth={true}>About</Link></li>
          <li><Link  to="contact" spy={true} smooth={true}>Contact</Link></li>
          <li><Link  to="service" spy={true} smooth={true}>Service</Link></li>
            </ul> */}


            <DashboardIntro/>
            <Achievements />
            <Expereinces/>
            <Courses />
            <Footer />
        </div>
    )
}

export default Dashboard;