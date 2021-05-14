import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Menu = () => {
  return (
    <Nav className="justify-content-end mr-5 mt-5" activeKey="">
      <Nav.Item color="#0000" className=" ml-5">
        <Nav.Link>
          <Link className="text-color-menu" to="about" smooth duration={1000}>
            About me
          </Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="ml-5">
        <Nav.Link>
          <Link className="text-color-menu" to="projects" smooth duration={1000}>
            Projects
          </Link>
        </Nav.Link>
      </Nav.Item>
      {/* <Nav.Item className="ml-5">
        <Nav.Link style={style}>
          <Link to="about" smooth duration={1000}>
            Blog
          </Link>
        </Nav.Link>
      </Nav.Item> */}
      <Nav.Item className="ml-5">
        <Nav.Link>
          <Link className="text-color-menu" to="contact" smooth duration={1000}>
            Contact
          </Link>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Menu;
