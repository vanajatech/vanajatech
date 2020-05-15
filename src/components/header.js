import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Logo from "../images/logo.svg"

import { Row } from "./grid"
// import { Container, Row, Col } from "../components/grid"

const Header = () => (
  <Row>
    <Wrapper>
      <Link to="/" style={{ display: "flex" }}>
        <Logo style={{ height: 48 }} />
      </Link>
      <Nav>
        <a>Our Work</a>
        <a>Careers</a>
        <a>Contact Us</a>
      </Nav>
    </Wrapper>
  </Row>
)

const Wrapper = styled.header`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  font-size: 1.25rem;

  a {
    margin-left: 4rem;
  }
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
