import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import { Card } from "../components/card"
import { Button } from "../components/button"
import {
  Letter,
  Phone,
  Pin,
  Github,
  Instagram,
  Linkedin,
} from "../components/icons"

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
      <Grid item lg={3} md={4} sm={6} xs={12}>
        <Card textAlign="center" style={{ padding: "2rem 1rem" }}>
          <Image
            alt="Faceholder."
            filename="face-1.png"
            style={{
              width: "100%",
              height: "100%",
              maxWidth: 140,
              margin: "0 auto 1.5rem auto",
            }}
          />
          <h4 style={{ marginBottom: "1.5rem" }}>Josh Samoilenko</h4>
          <BoldLink>josh.samoilenko@vanajatech.com</BoldLink>
          <SocialIcons>
            <a href="https://github.com/vanajatech">
              <Github />
            </a>
            <a href="https://www.instagram.com/vanajatech/">
              <Instagram />
            </a>
            <a href="https://www.linkedin.com/company/vanaja-tech/">
              <Linkedin />
            </a>
          </SocialIcons>
        </Card>
      </Grid>
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

const SocialIcons = styled.div`
  margin-top: 1.5rem;
  color: var(--gray-500);
  display: flex;
  gap: 20px;
  justify-content: center;

  svg {
    width: 1rem;
    fill: var(--gray-500);
  }
`

export default ContactUs
