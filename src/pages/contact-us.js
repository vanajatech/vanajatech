import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card } from "../components/card"
import StaffListing from "../components/staffListing"
import { Letter, Phone, Pin } from "../components/icons"

const ContactUs = () => (
  <Layout>
    <SEO title="Contact Us" />

    <Grid container spacing={4}>
      <Grid item xs>
        <Box textAlign="center" m="7rem 0 4rem">
          <h1 style={{ margin: 0 }}>Contact Us</h1>
          <h4>We are always looking for new opporturnities.</h4>
        </Box>
      </Grid>
    </Grid>

    <Grid container spacing={4} justify="center">
      <Grid item lg={3} md={4} sm={6} xs={12}>
        <Card textAlign="center" style={{ padding: 48 }}>
          <Letter
            style={{ margin: "0 auto 24px auto", color: "var(--primary)" }}
          />
          <h4 style={{ marginBottom: 24 }}>Email</h4>
          <BoldLink>Send us an email</BoldLink>
        </Card>
      </Grid>

      <Grid item lg={3} md={4} sm={6} xs={12}>
        <Card textAlign="center" style={{ padding: 48 }}>
          <Phone
            style={{ margin: "0 auto 24px auto", color: "var(--primary)" }}
          />
          <h4 style={{ marginBottom: 24 }}>Call</h4>
          <BoldLink>Call +358 45 1234 567</BoldLink>
        </Card>
      </Grid>

      <Grid item lg={3} md={4} sm={6} xs={12}>
        <Card textAlign="center" style={{ padding: 48 }}>
          <Pin
            style={{ margin: "0 auto 24px auto", color: "var(--primary)" }}
          />
          <h4 style={{ marginBottom: 24 }}>Visit</h4>
          <BoldLink>Get directions</BoldLink>
        </Card>
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

const BoldLink = styled.a`
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: var(--primary);
`

export default ContactUs
