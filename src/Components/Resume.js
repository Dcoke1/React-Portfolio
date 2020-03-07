import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Resume extends Component {

  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
		return(
	<div id="resume"className='cv'>
		<article>
				      			<h3>{this.props.name}</h3>
	      		  <h5>C: 954-551-0807  || E: Douglas.Coke@aol.com</h5>
 		<h6><a className="cvLink" href='https://www.dcoke1.github.io/React-Portfolio/' target='_blank' rel="noopener noreferrer">dcoke1.github.io/React-Portfolio/</a> || <a className="cvLink" href='https://www.linkedin.com/in/douglascoke/' target='_blank' rel="noopener noreferrer">linkedin.com/in/douglascoke</a></h6><hr />
							<strong>EDUCATION</strong><hr />

<section><p><strong>Valencia College</strong>, Orlando, FL</p> <p>August 2019 — Present</p></section>
<p className='subHeading'><i>A.S Computer Programming</i></p><br />

<section><p><strong>Freecodecamp.org</strong>, Orlando, FL</p> <p>October 2017 — Present</p></section>
<p className='subHeading'><i>Full Stack Web Development</i></p><br />					         

<section><p><strong>University of Central Florida</strong></p><p>May 2017 — October 2017</p></section>
<p className='subHeading'><i>Full Stack Web Developer Boot Camp</i></p><hr />

							<strong>SKILLS</strong><hr />

<ul className="cv-ul-left">
 <center><div> React | JSP | Node | CMS | JavaScript/ES6 | Apache | Html5 | Css3/Sass | Jira | AWS | Git | AdobeXD</div></center>
</ul><hr />

							<strong>EXPERIENCE</strong><hr />

<section><p><strong>Westgate Resorts</strong> Orlando, FL</p> <p>September 2019 – Present</p></section>
<p className='subHeading'><i>Front-End Developer</i></p>

<ul className="cv-ul-left">
<li>Collaborate with designers and backend team to translate our marketing web mockup designs into user friendly web pages and internal web applications utilizing the web technology stack JavaScript, Java Server Pages, HTML5, CSS/Sass for our corporate websites <a href='https://www.westgateresorts.com/' target='_blank' rel="noopener noreferrer">www.westgateresorts.com</a> and <a href='http://www.iloveorlando.com/' target='_blank' rel="noopener noreferrer">www.iloveorlando.com</a></li>
<li>Implement solutions to code errors and bugs as desired by the project management team</li>
<li>Manage dynamic, component based code for internal web applications mapped from our content management system </li>
<li>Participate in daily code reviews submitted from other developers to ensure quality </li>
</ul>

<section><p><strong>TrueTicket</strong>, Orlando, FL</p> <p>July 2019 – Present</p></section>
<p className='subHeading'><i>Senior React UI/UX / Front-End Developer</i></p>

<ul className="cv-ul-left">
<li> Design, create, test, and modify all aspects of the react user interface with functionality and aesthetics in mind</li>
<li> Clearly communicate research and design ideas to rest of the team and upper management</li> 
<li> Develop and manage stateful and stateless JSX components and optimized them for reusability</li>
<li> Create concepts, wireframes, and mockups for features that lead to a more intuitive user experience using AdobeXD</li>
<li> Ensured company website <a href='https://www.trueticket.live/' target='_blank' rel="noopener noreferrer">www.trueticket.live</a> was flexible and responsive on various devices</li>
</ul>

<section><p><strong>University of Central Florida</strong>, Orlando, FL </p><p> April 2017 — September 2019</p></section>
<p className='subHeading'><i>Web Developer</i></p>

<ul className="cv-ul-left"> 
<li> Created JSX components based on business team mock up design requirements using clear and semantic html structure, meta tags, and proper headings for best SEO optimization in an Agile environment</li>
<li> Effectively incorporated 2018/19 design principles and trends utilizing CSS Flex-box, positioning, Z-Index, opacity, and responsive design practices such as media queries and percentage values</li>
<li> Experience sending AJAX request to third party APIs utilizing react lifecycle hooks for application optimization as well as manipulating API and API keys</li>
<li> Skilled with managing JavaScript events and using jQuery selectors and methods</li>
</ul>

<section><p><strong>Duke Energy</strong>, Lake Mary, FL</p> <p>December 2017 — July 2019</p></section>
<p className='subHeading'><i>Customer Service Specialist</i></p><hr />                                                                                                                                     			          

							<strong>Personal Project</strong><hr />

<section><p><strong><a href='https://www.newsapptoday.com/' target='_blank' rel="noopener noreferrer">www.newsapptoday.com</a></strong></p></section>

<div className="cv-ul-left">
<p>
Virtual newspaper web application developed in React.js. Provides users with real time news updates from various news sources delivered from the NewsAPI. The project is hosted on AWS EC2 and Https secured through CloudFront and Route 53. Styling utilizes CSS Flexbox and grid system.
</p>
</div>

</article>

<div>
<a className="button" href="https://docs.google.com/document/d/13iov9GPncbNR9O86GA7T1VegU6zxEs0pvZCR039UYFA/edit?usp=sharing" target="_blank" rel="noopener noreferrer" content="cv">
<Button variant="warning" bsPrefix="btn">Download Resume</Button>
</a>
</div>

</div>


		)
	}
}

export default Resume;