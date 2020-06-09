import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
// TODO; Try to reduce the amount of bloat this brings
import Grid from "@material-ui/core/Grid"

import Logo from "../images/logo.svg"

const Header = () => (
  <Container
    container
    direction="row"
    justify="space-between"
    alignItems="center"
  >
    <Grid item>
      <Link to="/">
        <Logo height="48" />
      </Link>
    </Grid>
    <Grid item>
      <Link to="/our-work" className="ml-12">
        Our Work
      </Link>
      <Link to="/careers" className="ml-12">
        Careers
        <Notification>2</Notification>
      </Link>
      <Link to="/contact-us" className="ml-12">
        Contact Us
      </Link>
    </Grid>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const Container = styled(Grid)`
  padding: 1rem 0;
`

const Notification = styled.span`
  background: var(--primary);
  color: #fff;
  font-size: 0.75rem;
  text-align: center;
  font-weight: 600;
  border-radius: 99px;
  line-height: 1rem;
  position: absolute;
  width: 1rem;
  height: 1rem;
  margin-left: 8px;
`

export default Header
