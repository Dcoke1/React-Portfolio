import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Resume extends Component {

  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
		return(
		<React.Fragment>
	<div id="resume"className='cv'>
		<article>
				      			<h3>Douglas J. Coke</h3>
	      		  <h5>C: 954-551-0807  || E: Douglas.Coke@aol.com</h5>
 		<h6><a className="cvLink" href='https://www.linkedin.com/in/douglascoke/' target='_blank' rel="noopener noreferrer">linkedin.com/in/douglascoke</a> || <a className="cvLink" href='https://www.freecodecamp.org/dcoke17' target='_blank' rel="noopener noreferrer">freecodecamp.org/dcoke17</a></h6><hr />
							<strong>EDUCATION</strong><hr />

<section><p><strong>University of Central Florida</strong>, Orlando, FL</p> <p>May 2017 — October 2017</p></section>
<p className='subHeading'><i>Full Stack Web Developer / BootCamp</i></p><br />					         

<section><p><strong>Freecodecamp.org</strong></p><p>October 2017 — Present</p></section>
<p className='subHeading'><i>Full Stack Web Development</i></p><hr />

							<strong>SKILLS</strong><hr />

<ul className="cv-ul-left">
 <div> React | Express | Node | JavaScript/Es6 | Html5 | Css3 | API integration | Mongo DB | Github | AdobeXD</div>
</ul><hr />

							<strong>EXPERIENCE</strong><hr />

<section><p><strong>TrueTicket</strong> Orlando, FL</p> <p>July 2019  —-  Present</p></section>
<p className='subHeading'><i>Senior UI/UX Developer</i></p>

<ul className="cv-ul-left">
<li>Design, create, test, and modify all aspects of the user interface with functionality and aesthetics in mind</li>
<li>Clearly communicate research and design ideas to rest of the team and upper management</li> 
<li>Analyze and translate user behavior and research into actionable data</li>
<li>Create concepts, wireframes, and mockups that lead to intuitive user experiences</li>
<li>Ensure website is optimized for various devices</li>
<li>Collaborate with backend team for seamless data integration using Node and MongoDB</li>
</ul>

<section><p><strong>University of Central Florida</strong>, Orlando, FL</p> <p>April 2017  —-  Present</p></section>
<p className='subHeading'><i>Web Developer/Bootcamp</i></p>

<ul className="cv-ul-left">
<li>Create HTML documents with clear, semantic code, meta tags, and proper headings for best SEO optimization</li>
<li> Effectively incorporating 2018/19 design principals and trends utilizing CSS Flex-box, CSS Grid, positioning, Z-Index, opacity, and responsive design practices such as media queries and percentage values</li> 
<li> Skilled with managing JavaScript events and using JQuery to append data to HTML</li>
<li> Experience sending AJAX request as well as manipulating API and API keys to access JSON objects</li>
<li> Sound knowledge working with Node.js, NPM packages, and Express.js</li>
</ul>

<section><p><strong>Duke Energy</strong>, Lake Mary, FL</p><p> December 2017  —  July 2019</p></section>
<p className='subHeading'><i>Customer Service Specialist</i></p>

<ul className="cv-ul-left"> 
<li> Attentively listening and anticipating over 2000 customer needs monthly while offering solutions</li>
<li> Assisting customers with creating an online profile, navigating, and troubleshooting on the Duke Energy website including working with a web portal to reset passcodes and impersonate profiles</li>
<li> Actively managed customer accounts including establishing service and disconnecting service, performing soft credit checks to determine deposit requirements and creating payment arrangements based off customer history</li>
<li> Submit request by email, skype, and order work management systems to multiple departments for customer follow up</li>
</ul>

<section><p><strong>Hilton Grand Vacations at Sea World</strong>, Orlando, FL</p> <p>August 2016 — December 2017</p></section>
<p className='subHeading'><i>Guest Service Associate</i></p><hr />                                                                                                                                     			          

							<strong>VOLUNTEER EXPERIENCE</strong><hr />

<section><p><strong>Boys Town Central Florida</strong>, Orlando, FL</p> <p>January 2015 – May 2015</p></section>
<p className='subHeading'><i>Project Manager</i></p>

<ul className="cv-ul-left">
<li>Responsible for the social media campaign fundraiser at Boys Town which raised $810 in donations</li>
<li>Planned and coordinated events for the children including an Orlando Magic Basketball game and catered dinner</li>
<li>Worked in a team organizing fundraisers on and off campus totaling $3241 in monetary and non monetary contributions</li>
</ul>

</article>

</div>
<div>
<a className="button" href="https://docs.google.com/document/d/13iov9GPncbNR9O86GA7T1VegU6zxEs0pvZCR039UYFA/edit?usp=sharing" target="_blank" rel="noopener noreferrer" content="cv">
<Button onClick={this.handleClick} variant="warning" bsPrefix="btn">Download Resume</Button>
</a>
</div>
</React.Fragment>

		)
	}
}

export default Resume;