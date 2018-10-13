import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';


class LandingUnstyled extends Component {

	propTypes = {
		className: PropTypes.string,
	}

	render() {
		return (
			<CarouselProvider
				naturalSlideWidth={100}
				naturalSlideHeight={125}
				totalSlides={3}
			>
				<Slider>
					<Slide index={0}>I am the first Slide.</Slide>
					<Slide index={1}><img src="../../assets/img/landing.jpg" alt="test" /></Slide>
					<Slide index={2}>	<img src="../../assets/img/landing2.jpg" alt="test" /></Slide>
				</Slider>
			</CarouselProvider>
		)
	}
}
const Landing = styled(LandingUnstyled)`

`;

export default Landing;
