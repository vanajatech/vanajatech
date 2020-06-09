import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card } from "../components/card"
import PageHeader from "../components/pageHeader"
import StaffListing from "../components/staffListing"
import { Letter, Phone, Pin } from "../components/icons"
import { BoldLink } from "../components/utilities"

const ContactUs = () => (
  <Layout>
    <SEO title="Contact Us" />
    <PageHeader title="Contact Us">
      <h4>We are always looking for new opporturnities.</h4>
    </PageHeader>

    <Grid container spacing={4} justify="center">
      <Grid item lg={3} md={4} sm={6} xs={12}>
        <ContactCard textAlign="center">
          <Letter />
          <h4>Email</h4>
          <BoldLink>Send us an email</BoldLink>
        </ContactCard>
      </Grid>

      <Grid item lg={3} md={4} sm={6} xs={12}>
        <ContactCard textAlign="center">
          <Phone />
          <h4>Call</h4>
          <BoldLink>Call +358 45 1234 567</BoldLink>
        </ContactCard>
      </Grid>

      <Grid item lg={3} md={4} sm={6} xs={12}>
        <ContactCard textAlign="center">
          <Pin />
          <h4>Visit</h4>
          <BoldLink>Get directions</BoldLink>
        </ContactCard>
      </Grid>
    </Grid>

    <Grid container spacing={4} justify="center">
      <Grid item xs={12}>
        <Box textAlign="center" m="4rem 0 0">
          <h2>Our Team</h2>
        </Box>
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
