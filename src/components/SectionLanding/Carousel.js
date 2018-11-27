import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import landing1 from './landing.jpg';
import landing2 from './landing2.jpg';
import landing3 from './landing3.png';
import landing4 from './landing4.JPG';

const CarouselWrapper = styled.div`
`;

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 700,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            pauseonHover: false,
        };
        return (
            <CarouselWrapper>
                <Slider {...settings}>
                    <div>
                        <img src={landing1} alt="landing" style={{ height: '665px', maxWidth: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                        <img src={landing2} alt="landing" style={{ height: '665px', maxWidth: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                        <img src={landing3} alt="landing" style={{ height: '665px', maxWidth: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                        <img src={landing4} alt="landing" style={{ height: '665px', maxWidth: '100%', objectFit: 'cover' }} />
                    </div>
                </Slider>
            </CarouselWrapper>
        );
    }
}