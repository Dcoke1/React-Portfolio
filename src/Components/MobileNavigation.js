import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBCollapse, MDBContainer,
MDBHamburgerToggler } from 'mdbreact';
import Headroom from 'react-headroom';
import MediaQuery from 'react-responsive';
import logo from './assets/logo.svg';


class MobileNavigation extends Component{
  state = {
    collapse1: false,
    collapseID: ''
  }
  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
  }

  toggleSingleCollapse = collapseId => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId]
    });
  }
    render() {
  return (
  		<MediaQuery className="mobileHeader" query="(max-device-width: 800px)">
        <Headroom>
          <MDBContainer>
          <MDBNavbar color="amber lighten-4" light>
            <MDBContainer>
              <MDBNavbarBrand>
                      <aside className='subHeader'>
      <img src={logo} className="App-logo" alt="logo" /><span className="App-logo-span">Douglas Coke
      </span></aside>
              </MDBNavbarBrand>
              <MDBHamburgerToggler color="#d3531a" id="hamburger1" onClick={()=> this.toggleSingleCollapse('collapse1')} />
                <MDBCollapse isOpen={this.state.collapse1} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <a href='#about'>About</a>
                    </MDBNavItem>
                    <MDBNavItem>
                      <a href='#resume'>Resume</a>
                    </MDBNavItem>
                    <MDBNavItem>
                      <a href='#projects'>Projects</a>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        </MDBContainer>
      </Headroom>
  	</MediaQuery>

    );
  }
}

export default MobileNavigation;


