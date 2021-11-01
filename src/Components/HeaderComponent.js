import {Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import React,{Component} from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        
        return(
            <div>
                <Navbar dark fixed="top" expand="sm">
                    <div className="container-fluid">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" style={{marginright : "10px"}} href="/">Codingmonks</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="nav ml-auto" >
                            <NavItem >
                                <NavLink className="nav-link" to='/home' style={{color : "rgb(255,255,255)"}}
                                activeStyle={{color : "rgb(0,0,0)"}} > Home</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink className="nav-link" to='/course' style={{color : "rgb(255,255,255)"}}
                                activeStyle={{color : "rgb(0,0,0)"}} >Course</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/aboutus'style={{color : "rgb(255,255,255)"}}
                                activeStyle={{color : "rgb(0,0,0)"}} >About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'style={{color : "rgb(255,255,255)"}}
                                activeStyle={{color : "rgb(0,0,0)"}} >Contact Us</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                
            </div>
        );
    }
}

export default Header;