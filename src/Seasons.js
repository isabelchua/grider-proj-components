import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// function Seasons() {
// 	window.navigator.geolocation.getCurrentPosition(
// 		position => console.log(position),
// 		err => console.log(err)
// 	);
// 	return <div>Latitude: </div>;
// }

class Seasons extends React.Component {
	constructor(props) {
		super(props);

		this.state = { lat: null };

		window.navigator.geolocation.getCurrentPosition(
			position => {
				this.setState({ lat: position.coords.latitude });
			},
			err => {
				this.setState({ errorMessage: err.message });
			}
		);
	}
	renderContent() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>;
		}

		if (!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />;
		}

		return <Spinner message="Please accept location request" />;
	}
	render() {
		return <div className="border red">{this.renderContent()}</div>;
	}
}

export default Seasons;
