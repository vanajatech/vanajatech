import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

import TalenomLogo from "../images/talenom-logo.svg"

const OurWork = () => (
  <Layout>
    <SEO title="Our Work" />

    <Grid container direction="column" justify="flex-start" alignItems="center">
      <Grid item md={8} xs={12}>
        <Box textAlign="center" m="9rem 0 6rem">
          <h1>Our Work</h1>
          <p>
            Chambray plaid edison bulb, church-key occupy you probably haven't
            heard of them snackwave pok pok. Vexillologist prism authentic
            pour-over jean shorts. Pok pok artisan everyday carry food truck,
            messenger bag hoodie offal bespoke four loko.
          </p>
        </Box>
      </Grid>
    </Grid>

    <Grid container direction="column" justify="flex-start" alignItems="center">
      <Grid item md={6} xs={12}>
        <Grid container wrap="nowrap" style={{ marginBottom: "4rem" }}>
          <Grid item>
            <BigNumber>1</BigNumber>
          </Grid>
          <Grid item xs zeroMinWidth>
            <h3>Business Critical Applications</h3>
            <p>
              We promise self-confidently we can implement the most
              business-critical applications. We’ve already written code to pay
              invoices, transfer money and create an audit trail.
            </p>
            <p>Tell us what you need; we’ll dare to implement it.</p>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" style={{ marginBottom: "4rem" }}>
          <Grid item>
            <BigNumber>2</BigNumber>
          </Grid>
          <Grid item xs zeroMinWidth>
            <h3>Specialty: Business Services and Finance</h3>
            <p>
              Chambray plaid edison bulb, church-key occupy you probably haven't
              heard of them snackwave pok pok. Vexillologist prism authentic
              pour-over jean shorts.
            </p>
            <p>
              Pok pok artisan everyday carry food truck, messenger bag hoodie
              offal bespoke four loko.
            </p>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" style={{ marginBottom: "4rem" }}>
          <Grid item>
            <BigNumber>3</BigNumber>
          </Grid>
          <Grid item xs zeroMinWidth>
            <h3>Boldly Self-Confident</h3>
            <p>We work efficiently and decisively.</p>
            <p>
              Instead of contemplating what to do, we approach problems head on
              and progress to pick the right way to proceed.
            </p>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" style={{ marginBottom: "4rem" }}>
          <Grid item>
            <BigNumber>4</BigNumber>
          </Grid>
          <Grid item xs zeroMinWidth>
            <h3>JavaScript-Oriented Generalists</h3>
            <p>We use the best technology for each project</p>
            <p>
              But if we can do it in JavaScript, we will. The JavaScript
              ecosystem is growing fast and it can be ubiquitously used in
              servers, websites and mobile apps.
            </p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>

    <Grid container direction="column" justify="flex-start" alignItems="center">
      <Grid item xs>
        <Box textAlign="center" m="9rem 0 6rem">
          <h2>Notable Customers</h2>
          <Box display="flex" alignItems="center" mt="2rem" py="4rem">
            <TalenomLogo height="48" style={{ paddingRight: "4rem" }} />
            <Image
              alt="Oscar Software logo."
              filename="oscar-logo.png"
              style={{ width: 210, height: 64 }}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  </Layout>
)

const BigNumber = styled.div`
  display: inline;
  text-align: right;
  vertical-align: top;
  color: rgba(180, 10, 10, 0.6);
  font-family: "IBM Plex Mono";
  font-weight: bold;
  font-size: 144px;
  line-height: 110px;
  letter-spacing: 0.03em;
  margin-right: 2rem;
`

export default OurWork
