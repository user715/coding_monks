import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import AboutUs from './AboutUsComponent';
import CourseComponent from './CourseComponent';
import Contact from './home/ContactUs';
class Main extends Component {

  constructor(props) {
    super(props);
  }

    render() {
        return (
            <div>
              <Header />
            <div style={{margin:"70px"}}></div>
            <Switch>
              <Route path='/coding_monks/home' component={Home} />
              <Route path='/coding_monks/course' component={CourseComponent} />
              <Route path='/coding_monks/aboutus' component={AboutUs} />
              <Redirect to="/coding_monks/home" />
            </Switch>
            <Contact />
            </div>
        );
      }

}

export default Main;