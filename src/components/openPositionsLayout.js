import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "./layout"

import Grid from "@material-ui/core/Grid"

import SEO from "./seo"
import PageHeader from "./pageHeader"

export default class openPositionsLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data
    return (
      <Layout>
        <SEO title={markdownRemark.frontmatter.title} />
        <PageHeader title={markdownRemark.frontmatter.title} />

        <Grid container justify="center">
          <Grid item xs={8}>
            <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
          </Grid>
        </Grid>
      </Layout>
    )
  }
}

export const query = graphql`
  query OpenPositionQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`
