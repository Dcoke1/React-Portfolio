import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import mypic from "./assets/mypic.jpg";

class About extends Component {
	render() {
		return (
			<div id="about" className="about">
				<img className="mypic" src={mypic} alt="headshot" />
				<h1>Douglas Coke</h1>
				<h2>Front-End Developer</h2>
				<ul className="socialbtns fa-2x">
					<li>
						<a
							href="https://github.com/Dcoke1"
							target="_blank"
							rel="noopener noreferrer"
							className="fa fa-github"
						/>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/douglascoke/"
							target="_blank"
							rel="noopener noreferrer"
							className="fa fa-linkedin"
						/>
					</li>
					<li>
						<a
							href="https://www.freecodecamp.org/dcoke17"
							target="_blank"
							rel="noopener noreferrer"
							className="fa fa-free-code-camp"
						/>
					</li>
				</ul>

				<div className="skills">
					<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
						<ul className="skillsIcons">
							<div className="subSkills">
								<i className="fas fa-laptop-code"></i>
								<span className="skillsSpan">UI/UX</span>
								<p className="skillsP">
									UX design is all about understanding the
									user’s needs and putting them first. In
									order to do this you must try and anticpate
									your user’s desires. Every detail should be
									taken in consideration. I enjoy being able
									to imagine and design an intuative layout to
									match what I imagined on screen
								</p>
							</div>
							<div className="subSkills">
								<i className="far fa-address-card"></i>
								<span className="skillsSpan">
									Responsive Design
								</span>
								<p className="skillsP">
									According to research from SimilarWeb, 63%
									of website visits in the US come from mobile
									devices. This trend will only continue
									upwards in 2019 moving forward with IoT and
									wearables. Fortunately, there are many tools
									web developers can use to aid in building
									responsive layouts, some of which include
									grid systems, flexbox, and media queries
								</p>
							</div>
							<div className="subSkills">
								<i className="far fa-handshake"></i>
								<span className="skillsSpan">Team Player</span>
								<p className="skillsP">
									Good teamwork provides a company with a
									diversity of thought, creativity,
									perspectives, opportunities, and
									problem-solving approaches. Coming from a
									sports background I know how important good
									teamwork and being a team player is to an
									organization
								</p>
							</div>
							<div className="subSkills">
								<i className="fas fa-running"></i>
								<span className="skillsSpan">Versatile</span>
								<p className="skillsP">
									Over 3 years of Front-end development and
									UI/UX design experience. Specializing in
									translating marketing design mock ups into
									highly functional, pixel perfect web
									applications. Highly skilled in leveraging
									Javascript for solutions to everyday
									business needs.
								</p>
							</div>
						</ul>
					</ScrollAnimation>
				</div>
			</div>
		);
	}
}

export default About;
