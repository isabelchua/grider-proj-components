import React from "react";

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
	render() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>;
		}

		if (!this.state.errorMessage && this.state.lat) {
			return <div>Latitude: {this.state.lat}</div>;
		}

		return <div>Loading..</div>;
	}
}

export default Seasons;
