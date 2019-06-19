import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
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
          <div className="navBar" style={{height: '100px'}}>
            <Layout fixedHeader>
                <Header className='subHeader'>
                <img src={logo} className="App-logo" alt="logo" /><span className="App-logo-span">
                </span>

                </Header>
                <Drawer title="DC Portfolio">
                    <Navigation className="navLinks">
                      <a href='#about'>About</a>
                      <a href='#resume'>Resume</a>
                      <a href='#projects'>Projects</a>
                    </Navigation>
                </Drawer>
                <Content />
            </Layout>
          </div>
      </Headroom>
  	</MediaQuery>

    );
  }
}

export default MobileNavigation;


