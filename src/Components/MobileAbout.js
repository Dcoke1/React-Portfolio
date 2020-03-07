import React, { Component } from "react";
import MediaQuery from "react-responsive";

class MobileAbout extends Component {
	render() {
		return (
			<MediaQuery
				className="mobileSection"
				query="(max-device-width: 800px)"
			>
				<div className="reda">
					<div className="mobileBackground">
						<div className="mobileSkills">
							<div className="mobileSub mobileSubL">
								<i class="fas fa-laptop-code"></i>
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
							<div className="mobileSub">
								<i class="far fa-address-card"></i>
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
							<div className="mobileSub">
								<i class="far fa-handshake"></i>
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
							<div className="mobileSub">
								<i class="fas fa-running"></i>
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
							<div className="mobileSub mobileSubR"></div>
						</div>
					</div>
				</div>
			</MediaQuery>
		);
	}
}

export default MobileAbout;
