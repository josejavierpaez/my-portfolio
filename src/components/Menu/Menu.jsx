import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Menu = ({ dark, setDark }) => {
  const sunIcon = <FontAwesomeIcon icon={faSun} />;
  const moonIcon = <FontAwesomeIcon icon={faMoon} />;
  const handleClick = () => {
    setDark(!dark);
  };
  return (
    <Navbar
      id={dark ? 'menu-dark' : 'menu'}
      bg={dark ? 'dark' : ''}
      className="pt-5 pl-5 pr-5"
      expand="sm"
    >
      <Navbar.Toggle className="justify-content-end" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
        <Nav>
          <Nav.Item className="ml-5 mr-5">
            <Nav.Link>
              <Link className="text-color-menu" to="about" smooth duration={1000}>
                About me
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="ml-5 mr-5">
            <Nav.Link>
              <Link
                className="text-color-menu"
                to={dark ? 'projects-dark' : 'projects'}
                smooth
                duration={1000}
              >
                Projects
              </Link>
            </Nav.Link>
          </Nav.Item>
          {/* <Nav.Item className="ml-5 mr-5">
            <Nav.Link>
              <Link className="text-color-menu" to="about" smooth duration={1000}>
                Blog
              </Link>
            </Nav.Link>
          </Nav.Item> */}
          <Nav.Item className="ml-5 mr-5">
            <Nav.Link>
              <Link className="text-color-menu" to="contact" smooth duration={1000}>
                Contact
              </Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
      <Form>
        <Button onClick={handleClick} className="dark-button">
          {dark ? moonIcon : sunIcon}
        </Button>
      </Form>
    </Navbar>
  );
};

Menu.propTypes = {
  dark: PropTypes.bool,
  setDark: PropTypes.func,
};

export default Menu;
