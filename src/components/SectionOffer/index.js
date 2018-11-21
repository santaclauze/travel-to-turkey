import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

import H2 from '@bootstrap-styled/v4/lib/H2';
import H3 from '@bootstrap-styled/v4/lib/H3';

import Offers from './Offers';
import Wrapper from '../Wrapper';

const MockContent = styled.div`
    height: 350px;
    width: 750px;
    background-color: blue;
    margin: 0 auto;
`;


class SectionOfferUnstyled extends Component {

    static propTypes = {
        className: PropTypes.string,
    }

    render() {
        const { className } = this.props;
        return (
            <div className={className}>
                <Wrapper>
                    <H2 className="text-center mb-4">Travel agency specialized for <span className="font-weight-bold">Turkey</span>.</H2>
                    <MockContent />
                    <H3 className="text-center my-4">Do exactly and only what <span className="font-weight-bold">you want</span>.</H3>
                    <Offers />
                </Wrapper>
			</div>
		)
	}
}

const SectionOffer = styled(SectionOfferUnstyled)`
`;

export default SectionOffer;