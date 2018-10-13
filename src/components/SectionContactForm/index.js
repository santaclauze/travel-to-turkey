import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ContactForm from './ContactForm';
import Wrapper from '../Wrapper';

class SectionContactFormUnstyled extends Component {

    propTypes = {
        className: PropTypes.string,
    }

    render() {
        const { className } = this.props;
        return (
            <div className={className}>
                <Wrapper>
                    <ContactForm />
                </Wrapper>
            </div>
        )
    }
}

const SectionContactForm = styled(SectionContactFormUnstyled)`
    height: 500px;
    background-color: purple;
`;

export default SectionContactForm;