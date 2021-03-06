import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import Button from "../components/button"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageHeader"
import Image from "../components/image"
import { BigLink, Separator } from "../components/utilities"

const Careers = () => (
  <Layout>
    <SEO
      title="Join the Team"
      description="We’re an innovative and fast growing team, and constantly looking for talented individuals to join our team."
    />
    <PageHeader title="Join the Team">
      <h4>
        We are constantly looking for talented individuals to join our team.
      </h4>
    </PageHeader>

    <Grid container spacing={4} justify="center">
      <Grid
        item
        md={6}
        xs={12}
        className="flex flex-col justify-center md:pr-8 mb-24"
      >
        <h2>About Us</h2>
        <p className="mb-0">
          We’re an innovative and fast growing team of passionate fellows, based
          in Hämeenlinna. Personal and professional development of each and
          every member of the team is in the heart of Vanaja Tech. We want to
          make sure that everyone in our team feels at home.
        </p>
      </Grid>
      <Grid item md={6} xs={12} className="order-first md:order-none md:mb-24">
        <Image
          alt="Our team."
          filename="IMG_4219.jpg"
          className="w-full h-full rounded-lg"
          withWebp
        />
      </Grid>

      <Grid item md={6} xs={12}>
        <Image
          alt="Hämeenlinna, the city."
          filename="IMG_0502.jpg"
          className="w-full h-full rounded-lg"
          withWebp
        />
      </Grid>

      <Grid
        item
        md={6}
        xs={12}
        className="flex flex-col justify-center md:pl-16"
      >
        <h2>
          About <Accent>Hämeenlinna</Accent>
        </h2>
        <p className="mb-0">
          Hämeenlinna is an old city with an ideal combination of nature and
          culture, everything nicely and easily within your reach. Its location
          between the cities of Helsinki and Tampere is very convenient. Local
          home prices are reasonable. Welcome!
        </p>
      </Grid>

      <Grid item md={7} xs={12} className="mt-24">
        <h2>Open Positions</h2>
      </Grid>

      <Grid item md={7} xs={12}>
        <StaticQuery
          query={query}
          render={({ allMarkdownRemark }) =>
            allMarkdownRemark.edges.map(({ node }) => (
              <div className="mb-16">
                <div className="flex justify-between">
                  <BigLink href={`/careers${node.frontmatter.slug}`}>
                    {node.frontmatter.title}
                  </BigLink>
                  <Button href={`/careers${node.frontmatter.slug}`}>
                    Apply
                  </Button>
                </div>
                <div>
                  <span>{node.frontmatter.location}</span>
                  <Separator />
                  <span>{node.frontmatter.type}</span>
                </div>
              </div>
            ))
          }
        />
      </Grid>

      <Grid item md={7} xs={12}>
        <h5>
          {"You can also send us an open application, "}
          <a
            className="text-red font-semibold"
            href="mailto:jobs@vanajatech.com"
          >
            jobs@vanajatech.com
          </a>
        </h5>
      </Grid>
    </Grid>
  </Layout>
)

export const query = graphql`
  query OpenPositionsQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          frontmatter {
            slug
            date
            title
            location
            type
          }
        }
      }
    }
  }
`

const Accent = styled.span`
  color: var(--secondary);
`

export default Careers
