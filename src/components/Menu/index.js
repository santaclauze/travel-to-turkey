import React, { Component } from 'react';
import styled from 'styled-components';

import Navbar from '@bootstrap-styled/v4/lib/Navbar';
import Container from '@bootstrap-styled/v4/lib/Container';
import NavbarBrand from '@bootstrap-styled/v4/lib/Navbar/NavbarBrand';
import NavbarToggler from '@bootstrap-styled/v4/lib/Navbar/NavbarToggler';
import Collapse from '@bootstrap-styled/v4/lib/Collapse';
import Nav from '@bootstrap-styled/v4/lib/Nav';
import NavItem from '@bootstrap-styled/v4/lib/Nav/NavItem';
import NavLink from '@bootstrap-styled/v4/lib/Nav/NavLink';
import A from '@bootstrap-styled/v4/lib/A';

class MenuUnstyled extends Component {

	state = {
		isOpen: false,
	};

	handleClick = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	};

	render() {
		const { className } = this.props;
		return (
			<Navbar className={className} color="faded" light toggleable="lg">
				<Container>
					<div className="d-flex justify-content-between">
						<NavbarBrand tag={A} to="javascript:;">Brand</NavbarBrand>
						<NavbarToggler onClick={this.handleClick} />
					</div>
					<Collapse navbar isOpen={this.state.isOpen}>
						<Nav navbar className="mr-auto">
							<NavItem>
								<NavLink>Holidays</NavLink>
							</NavItem>
							<NavItem>
								<NavLink>Testimonies</NavLink>
							</NavItem>
							<NavItem>
								<NavLink>About me</NavLink>
							</NavItem>
							<NavItem>
								<NavLink>Contact form</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		)
	}
}

const Menu = styled(MenuUnstyled)`
	&.navbar {
		z-index: 999;
	}
`;

export default Menu;