import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import AboutUs from './AboutUsComponent';
import CourseComponent from './CourseComponent';
import Footer from './home/footer';
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
              <Route path='/home' component={Home} />
              <Route path='/course' component={CourseComponent} />
              <Route path='/aboutus' component={AboutUs} />
              <Route path='/contactus' component={Footer} />
              <Redirect to="/home" />
            </Switch>
            <div style={{margin:"70px"}}></div>
            </div>
        );
      }

}

export default Main;