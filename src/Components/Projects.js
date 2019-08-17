import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCol } from 'mdbreact';

class Projects extends Component{
    render() {
  return (
  	<div id="projects" className="projectsBackground"> 

  		<div className="cardLeft">

  		<ScrollAnimation animateIn='fadeInLeft'>
	    <MDBCol>
	      <MDBCard style={{ width: "22rem" }}>
	        <MDBCardImage className="img-fluid view zoom" src="https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif" waves />
	        <MDBCardBody>
	          <MDBCardTitle>Giphy Search App</MDBCardTitle>
	          <MDBBtn className="btn-warning" href="https://dcoke1.github.io/GiphySearch/" target="_blank" rel="noopener noreferrer">Try it out!</MDBBtn>
	        </MDBCardBody>
	      </MDBCard>
	    </MDBCol>
	    </ScrollAnimation>

	    <div className="cardLeftP">

	    <ScrollAnimation animateIn='fadeIn'>
	    	<p>Find your favorite Giphy! Search any category and save the Giphs you like. Powered by GiphyAPI </p>
	    </ScrollAnimation>
	    
	    </div>

	    </div>

	    <div className="cardRight">

	    <ScrollAnimation animateIn='fadeInRight'>
	    <MDBCol>
	      <MDBCard style={{ width: "22rem" }}>
	        <MDBCardImage className="img-fluid view zoom" src="http://whatsupnewp.com/wp-content/uploads/2015/12/Newspaper-Stack-Trans.png" waves />
	        <MDBCardBody>
	          <MDBCardTitle>NewsAppToday</MDBCardTitle>

	          <MDBBtn className="btn-warning" href="https://newsapptoday.com" target="_blank" rel="noopener noreferrer">Try it out!</MDBBtn>
	        </MDBCardBody>
	      </MDBCard>
	    </MDBCol>
	    </ScrollAnimation>

	    <div className="cardRightP">

	    <ScrollAnimation animateIn='fadeIn'>
	    	<p>Search the latest Headlines across the globe with NewsAppToday! Powered by NewsAPI </p>
	    </ScrollAnimation>

	    </div>

	    </div>

	    <div className="cardLeft">

  		<ScrollAnimation animateIn='fadeInLeft'>
	    <MDBCol>
	      <MDBCard style={{ width: "22rem" }}>
	        <MDBCardImage className="img-fluid" src="https://www.thoughtco.com/thmb/V7RW-lFpAdtvzeUei1OPTYe1_jw=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/thermometer-sun-40-degres--hot-summer-day--high-summer-temperatures-540761642-5ac7776343a1030036b9b70a.jpg" waves />
	        <MDBCardBody>
	          <MDBCardTitle>Celsius To Farenheit Converter</MDBCardTitle>

	          <MDBBtn className="btn-warning" href="https://dcoke1.github.io/CelsiusToFarenheit-Converter/" target="_blank" rel="noopener noreferrer">Try it out!</MDBBtn>
	        </MDBCardBody>
	      </MDBCard>
	    </MDBCol>
	    </ScrollAnimation>

	    <div className="cardLeftP">

	    <ScrollAnimation animateIn='fadeIn'>
	    	<p>Convert from Celsius to Farenheit simply with the Celsius-To-Farenheit Converter App!</p>
	    </ScrollAnimation>
	    
	    </div>

	    </div>

	   </div>

  		)
	}
}

export default Projects;