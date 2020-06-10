import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card } from "../components/card"
import PageHeader from "../components/pageHeader"
import StaffListing from "../components/staffListing"
import { Letter, Phone } from "../components/icons"
import { BoldLink } from "../components/utilities"

const ContactUs = () => (
  <Layout>
    <SEO title="Contact Us" />
    <PageHeader title="Contact Us">
      <h4>We are always looking for new opporturnities.</h4>
    </PageHeader>

    <Grid container spacing={4} justify="center">
      <Grid item md={4} sm={6} xs={12}>
        <ContactCard className="text-center">
          <Letter />
          <h4>Send us an email</h4>
          <BoldLink href="mailto:info@vanajatech.com">
            info@vanajatech.com
          </BoldLink>
        </ContactCard>
      </Grid>

      <Grid item md={4} sm={6} xs={12}>
        <ContactCard className="text-center">
          <Phone />
          <h4>Give us a call</h4>
          <BoldLink href="tel:+358407537665">+358 40 753 7665</BoldLink>
        </ContactCard>
      </Grid>

      {/* <Grid item md={4} sm={6} xs={12}>
        <ContactCard className="text-center">
          <Pin />
          <h4>Visit</h4>
          <BoldLink>Get directions</BoldLink>
        </ContactCard>
      </Grid> */}
    </Grid>

    <Grid container spacing={4} justify="center">
      <Grid item xs={12} className="text-center mt-16">
        <h2>Our Team</h2>
      </Grid>
      <StaffListing />
    </Grid>
  </Layout>
)

const ContactCard = styled(Card)`
  padding: 48px;

  svg {
    margin: 0 auto 1rem auto;
    color: var(--primary);
  }

  h4 {
    font-weight: 600;
    margin-bottom: 1rem;
  }
`

export default ContactUs
