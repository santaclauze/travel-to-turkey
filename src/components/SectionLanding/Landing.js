import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Carousel from './Carousel';

class LandingUnstyled extends Component {

	static propTypes = {
		className: PropTypes.string,
	}

	render() {
		const { className } = this.props;
		return (
			<div className={className}>
				<Carousel />
			</div>
		)
	}
}
const Landing = styled(LandingUnstyled)`
	img {
		height: auto;
		width: 100%;
		object-fit: cover;
	}
`;

export default Landing;
