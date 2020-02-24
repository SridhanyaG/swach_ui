import React from 'react';

class Header extends React.Component {
	constructor() {
		super();
		this.state = {
			appName: "SwachUI"
		};
	}
	render() {
    return (
      <h1>{this.state.appName}</h1>
    )
	}
}

export default Header;