import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import Logo from "../images/logo.svg"

const Header = () => (
  <Container
    container
    direction="row"
    justify="space-between"
    alignItems="center"
    spacing={4}
  >
    <Grid item sm="auto" xs={12} className="flex justify-center">
      <Link to="/">
        <Logo height="48" />
      </Link>
    </Grid>
    <Grid item sm="auto" xs={12} className="flex justify-center">
      <Link to="/our-work/">Our Work</Link>
      <Link to="/careers/" className="ml-12">
        Careers
        <StaticQuery
          query={query}
          render={data => {
            return (
              <Notification>{data.allMarkdownRemark.totalCount}</Notification>
            )
          }}
        />
      </Link>
      <Link to="/contact-us/" className="ml-12">
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

const query = graphql`
  query OpenPositionsCountQuery {
    allMarkdownRemark {
      totalCount
    }
  }
`

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
