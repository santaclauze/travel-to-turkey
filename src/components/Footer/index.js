import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FooterBs from '@bootstrap-styled/v4/lib/Footer';

class FooterUnstyled extends Component {

    propTypes = {
        className: PropTypes.string,
    }

    render() {
        const { className } = this.props;
        return (
            <FooterBs className={className}>
            </FooterBs>
        )
    }
}

const Footer = styled(FooterUnstyled)`
    height: 200px;
    background-color: grey;
`;

export default Footer;