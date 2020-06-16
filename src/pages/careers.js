import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageHeader"
import Image from "../components/image"
import { Card } from "../components/card"
import ContactForm from "../components/contactForm"
import { ArrowRight } from "../components/icons"
import { UnderlinedLink } from "../components/utilities"

const Careers = () => (
  <Layout>
    <SEO title="Join the Team" />
    <PageHeader title="Join the Team">
      <h4>
        We are constantly looking for talented individuals to join our
        evergrowing team.
      </h4>
    </PageHeader>

    <Grid container spacing={4}>
      <Grid item xs={6} className="flex flex-col justify-center pr-8 mb-24">
        <h2>About Us</h2>
        <p className="mb-0">
          We’re an innovative and fast growing team of passionate fellows, based
          in Hämeenlinna. Personal and professional development of each and
          every member of the team is in the heart of Vanaja Tech. We want to
          make sure that everyone in our team feels at home.
        </p>
      </Grid>

      <Grid item xs={6} className="mb-24">
        <Image
          alt="Our team."
          filename="annie-spratt-QckxruozjRg-unsplash.jpg"
          className="w-full h-full"
        />
      </Grid>

      <Grid item xs={6}>
        <Image
          alt="Hämeenlinna, the city."
          filename="IMG_0502.jpg"
          className="w-full h-full"
        />
      </Grid>

      <Grid item xs={6} className="flex flex-col justify-center pl-16">
        <h2>
          About <Accent>Hämeenlinna</Accent>
        </h2>
        <p>
          There are 107 towns in Finland, but none of them equals Hämeenlinna,
          the only town with an ideal combination of nature and culture,
          everything nicely and easily within your reach.
        </p>
        <p className="mb-0"></p>
      </Grid>

      <Grid item xs={12} className="text-center mt-24 mb-8">
        <h2 className="mb-4">Apply to join our team!</h2>
      </Grid>

      <Grid item xs="auto" className="mx-auto">
        <StaticQuery
          query={query}
          render={({ allMarkdownRemark }) =>
            allMarkdownRemark.edges.map(({ node }) => (
              <h5 className="mb-6">
                <UnderlinedLink href={`/careers${node.frontmatter.slug}`}>
                  {node.frontmatter.title}
                  {/* <ArrowRight className="ml-6" /> */}
                </UnderlinedLink>
              </h5>
            ))
          }
        />
      </Grid>

      <Grid item xs={12} className="text-center my-8">
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

    <ContactForm
      name="careers"
      title="Want to know when new positions open?"
      submitText="Yes!"
    />
  </Layout>
)

export const query = graphql`
  query OpenPositionsQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date
            slug
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
