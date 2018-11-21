import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class SectionAboutUnstyled extends Component {

    static propTypes = {
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

const SectionAbout = styled(SectionAboutUnstyled)`
    height: 200px;
    background-color: red;
`;

export default SectionAbout;