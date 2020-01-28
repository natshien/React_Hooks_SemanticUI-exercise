import React from 'react'
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <Menu inverted>
        <Container>
            <Link to='/'>
                <Menu.Item name="star wars API"/>
            </Link>
            <Link to='/films'>
                <Menu.Item name="films"/>
            </Link>
            <Link to='/species'>
                <Menu.Item name="species"/>
            </Link>
        </Container>
    </Menu>
    );
}



export default Navbar;