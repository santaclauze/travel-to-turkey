import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class SectionReviewsUnstyled extends Component {

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

const SectionReviews = styled(SectionReviewsUnstyled)`
    height: 200px;
    background-color: lightblue;
`;

export default SectionReviews;