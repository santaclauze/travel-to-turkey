import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

import Offers from './Offers';
import Wrapper from '../Wrapper';

class SectionOfferUnstyled extends Component {

    propTypes = {
        className: PropTypes.string,
    }

    render() {
        const { className } = this.props;
        return (
            <div className={className}>
                <Wrapper>
				    <Offers />
                </Wrapper>
			</div>
		)
	}
}

const SectionOffer = styled(SectionOfferUnstyled)`
	height: 500px;
`;

export default SectionOffer;