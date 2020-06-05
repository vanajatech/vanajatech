import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import { Card } from "../components/card"
import { Button } from "../components/button"

const Careers = () => (
  <Layout>
    <SEO title="Join the Team" />

    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Box textAlign="center" m="7rem 0 4rem">
          <h1 style={{ margin: 0 }}>Join the Team</h1>
          <h4>
            We are always looking for more members to join our Counter-Strike
            team.
          </h4>
        </Box>
      </Grid>

      <Grid item xs={6} style={{ display: "flex", marginBottom: "7rem" }}>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          pr="2rem"
        >
          <p style={{ marginBottom: "3rem" }}>
            We’re an innovative and fast growing team of passionate fellows,
            based in Hämeenlinna. Personal and professional development of each
            and every member of the team is in the heart of Vanaja Tech.
          </p>
          <h2>Work Meets Play</h2>
          <p style={{ marginBottom: 0 }}>
            We want to make sure that everyone in our team feels at home. That’s
            why we take time to be together every week, be it having fun in
            Counter-Strike, sweating on the football field or hiking in the
            beautiful forests nearby.
          </p>
        </Box>
      </Grid>

      <Grid item xs={6} style={{ marginBottom: "7rem" }}>
        <Image
          alt="Our team."
          filename="annie-spratt-QckxruozjRg-unsplash.jpg"
          style={{ width: "100%", height: "100%" }}
        />
      </Grid>

      <Grid item xs={6}>
        <Image
          alt="Hämeenlinna, the city."
          filename="IMG_0502.jpg"
          style={{ width: "100%", height: "100%" }}
        />
      </Grid>

      <Grid item xs={6} style={{ display: "flex" }}>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          pl="4rem"
        >
          <h2>
            About <Accent>Hämeenlinna</Accent>
          </h2>
          <p style={{ marginBottom: 0 }}>
            There are 107 towns in Finland, but none of them equals Hämeenlinna,
            the only town with an ideal combination of <Accent>nature </Accent>
            and <Accent>culture</Accent>, everything nicely and easily within
            your reach.
          </p>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box textAlign="center" m="8rem 0 2rem">
          <h2 style={{ marginBottom: "1rem" }}>
            Apply for one of these positions
          </h2>
          <h4>or send us an open application</h4>
          <p style={{ color: "var(--gray-500)" }}>careers@vanajatech.com</p>
        </Box>
      </Grid>

      <Grid item xs={6}>
        <Card>
          <h4>Title</h4>
          <p>
            Chambray plaid edison bulb, church-key occupy you probably haven't
            heard of them snackwave pok pok. Vexillologist prism authentic
            pour-over jean shorts.
          </p>
          <Button>Apply</Button>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <h4>Title</h4>
          <p>
            Chambray plaid edison bulb, church-key occupy you probably haven't
            heard of them snackwave pok pok. Vexillologist prism authentic
            pour-over jean shorts.
          </p>
          <Button>Apply</Button>
        </Card>
      </Grid>
    </Grid>
  </Layout>
)

const Accent = styled.span`
  color: var(--secondary);
`

export default Careers
