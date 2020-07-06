import { Link, StaticQuery, graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import Logo from "../images/logo.svg"

const Nav = () => (
  <Grid container direction="row" justify="space-between" alignItems="center">
    <Grid item sm="auto" xs={12} className="flex justify-center pt-4 pb-2">
      <Link to="/">
        <Logo height="48" />
      </Link>
    </Grid>
    <Grid
      item
      sm="auto"
      xs={12}
      className="flex justify-center pt-2 pb-4 whitespace-pre"
    >
      <Link to="/">Home</Link>
      <Link to="/aarre/" className="ml-6 sm:ml-12">
        Aarre
      </Link>
      <Link to="/our-work/" className="ml-6 sm:ml-12">
        Our Work
      </Link>
      <Link to="/careers/" className="ml-6 sm:ml-12">
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
      <Link to="/contact-us/" className="ml-6 sm:ml-12">
        Contact Us
      </Link>
    </Grid>
  </Grid>
)

const query = graphql`
  query OpenPositionsCountQuery {
    allMarkdownRemark {
      totalCount
    }
  }
`

const Notification = styled.span`
  background: var(--primary);
  color: #fff;
  font-size: 0.75rem;
  text-align: center;
  font-weight: 900;
  border-radius: 99px;
  line-height: 1rem;
  position: absolute;
  width: 1rem;
  height: 1rem;
  margin-top: -4px;
  margin-left: 2px;
`

export default Nav
