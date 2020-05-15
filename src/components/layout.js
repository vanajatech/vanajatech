/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { Container } from "./grid"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Body>
      <Container>
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
      </Container>
    </Body>
  )
}

const Body = styled.div`
  font-family: "Montserrat";
  font-weight: 500;
  color: var(--gray-500);
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
