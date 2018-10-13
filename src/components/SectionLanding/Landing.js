import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


class LandingUnstyled extends Component {

	propTypes = {
		className: PropTypes.string,
	}

	render() {
		const { className } = this.props;
		return (
			<div className={className}>
			</div>
		)
	}
}
const Landing = styled(LandingUnstyled)`
	background-color: darkblue;
	height: 500px;
`;

export default Landing;
