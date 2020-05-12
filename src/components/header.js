import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { Logo } from "./logo"

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Link to="/">
      <Logo height={58} />
    </Link>
    <Nav>
      <a>Our Work</a>
      <a>Careers</a>
      <a>Contact Us</a>
    </Nav>
  </Wrapper>
)

const Wrapper = styled.header`
  display: flex;
  margin: 0 auto;
  padding: 64px 32px;
  max-width: 1440px;
  justify-content: space-between;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  color: var(--gray);
  font-family: "Montserrat";
  font-size: 22px;

  a {
    margin-left: 96px;
  }
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
