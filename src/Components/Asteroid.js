import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

class Asteroid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			isOpen: false
		};
	}

	componentDidMount() {
		const key = "CVuTsqFHd9y5XGHb5uWdnQqd4kuVD2gpjQ3HTnIj";

		fetch("https://api.nasa.gov/planetary/apod?api_key=" + key)
			.then(res => res.json())
			.then(info => {
				this.setState({ data: info });
			})
			.catch(console.log("Error"));
	}

	render() {
		const { data, isOpen } = this.state;

		return (
			<div className="asteroid">
				<h3 className="asteroid_name img_btn">{data.title}</h3>
				<p className="img_btn">By {data.copyright}</p>
				<img
					className="asteroid_img"
					src={data.hdurl}
					alt={data.media_type}
				/>
				<p className="asteroid_subtitle">{data.explanation}</p>
				<button className="img_btn btn-warning"
					type="button"
					onClick={() => this.setState({ isOpen: true })}
				>
					Expand Image
				</button>

				<i className="img_btn">Powered by NASA API</i>

				{isOpen && (
					<Lightbox
						mainSrc={data.hdurl}
						onCloseRequest={() => this.setState({ isOpen: false })}
						imageTitle={data.title}
						imagePadding={40}
						
					/>
				)}
			</div>
		);
	}
}

export default Asteroid;
