import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { mediaBreakpointUp } from '@bootstrap-styled/css-mixins/lib/breakpoints';

class WrapperUnstyled extends Component {

    static propTypes = {
        className: PropTypes.string,
    }

    render() {
        const { className, ...props } = this.props;
        return (
            <div className={className} {...props} />
        )
    }
}

const Wrapper = styled(WrapperUnstyled)`
${(props) => `
      width: 100%;
      margin-right: auto;
      margin-left: auto;
      padding-left: 12px;
      padding-right: 12px;
     padding-top: 2rem;
     padding-bottom: 2rem;
    
    ${mediaBreakpointUp(
        'sm',
        props.theme['$grid-breakpoints'],
        `max-width: 540px;`
    )}
    ${mediaBreakpointUp(
        'md',
        props.theme['$grid-breakpoints'],
        `max-width: 720px;`
    )}
    ${mediaBreakpointUp(
        'lg',
        props.theme['$grid-breakpoints'],
        `max-width: 960px;`
    )}
    ${mediaBreakpointUp(
        'xl',
        props.theme['$grid-breakpoints'],
        `max-width: 1140px;`
    )}
`}

`;
export default Wrapper;