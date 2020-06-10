import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import Grid from "@material-ui/core/Grid"

import Button from "../components/button"
import { Card, CardHeader } from "../components/card"
import Image from "../components/image"
import { Input } from "../components/input"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Dots from "../images/dots.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <GlobalStyle />

    <Grid container spacing={4}>
      <Grid item xs>
        <h1 className="slogan">
          Ideas are cheap;
          <br />
          <span className="big-text-pls-rename">execution is everything.</span>
          <br />
          That’s where we at Vanaja Technologies come in.
        </h1>
        <h2 className="slogan">
          Our expertise in world-class applications ensures your success.
        </h2>
      </Grid>
    </Grid>

    <Grid container spacing={4} className="mb-32">
      <Grid item md={6} xs={12}>
        <Image
          alt="Window a day keeps Matti away."
          filename="windows-2EwyKv4-03k-unsplash.jpg"
          className="w-full h-full"
        />
      </Grid>
      <Grid item md={6} xs={12} className="text-center">
        <h2 className="h1">We Do Software</h2>
        <p className="mb-12">
          Chambray plaid edison bulb, church-key occupy you probably haven't
          heard of them snackwave pok pok. Vexillologist prism authentic
          pour-over jean shorts. Pok pok artisan everyday carry food truck,
          messenger bag hoodie offal bespoke four loko.
        </p>
        <Button to="/our-work">See More</Button>
      </Grid>
    </Grid>

    <Grid container className="mb-32 relative">
      <Grid item xs>
        <Image
          alt="Vanaja Tech team doing something fun together."
          filename="timmy-wesley-3Ltn2aWVNcM-unsplash.jpg"
          className="w-full h-full"
          style={{ maxHeight: 720 }}
        />
      </Grid>
      <Grid item xs className="absolute h-full">
        <Overlay>
          <h2 className="h1">Join the Team</h2>
          <p>
            We’re an innovative and fast growing team of passionate fellows,
            based in Hämeenlinna. Personal and professional development of each
            and every member of the team is in the heart of Vanaja Tech.
          </p>
          <Button to="/careers">See Open Positions</Button>
        </Overlay>
      </Grid>
    </Grid>

    <Grid container spacing={4} className="mb-32">
      <Grid item xs className="text-center">
        <h2 className="h1 m-0">Contact Us</h2>
        <h4 className="mb-8">We are always looking for new opporturnities.</h4>
        <Button to="/contact-us">Contact Us</Button>
      </Grid>
    </Grid>

    <Grid container>
      <Grid item xs={12}>
        <Card className="relative text-center">
          <Dots className="absolute left-0 top-0 w-16 m-4" />
          <CardHeader>Got interested? Let’s get in touch!</CardHeader>
          <form name="got-interested" netlify>
            <Input
              type="email"
              name="email"
              placeholder="jack@mail.com"
              className="mr-2"
            />
            <Button type="submit">Contact me!</Button>
          </form>
          <Dots className="absolute right-0 bottom-0 w-16 m-4" />
        </Card>
      </Grid>
    </Grid>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

const GlobalStyle = createGlobalStyle`
  .slogan {
    color: var(--gray-900);
    font-weight: normal;
    font-size: 2.25rem;
    line-height: 1.25;
    margin-bottom: 3rem;

    &:first-child {
      margin-top: 9rem;
    }

    &:last-child {
      margin-bottom: 9rem;
    }
  }

  .big-text-pls-rename {
    font-size: 2.75rem;
    line-height: 1.25;
  }

  .h1 {
    font-size: 72px;
    line-height: 1.25;
    letter-spacing: -0.06em;
  }
`

const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 8rem;
  text-align: center;
  background-color: var(--gray-900);
  background-color: rgba(31, 37, 56, 0.5);
  color: var(--gray-100);
  height: 100%;
  width: 100%;

  p {
    font-size: 2rem;
    line-height: 1.25;
    margin-bottom: 2rem;
  }

  a {
    color: #fff;
    background: transparent;
    border: 4px solid #fff;
    border-radius: 0.5rem;
    padding: 1.5rem 2rem;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1;

    &:hover,
    &:focus {
      background: #fff;
      color: var(--gray-900);
    }

    &:active {
      background: var(--gray-300);
      border: 4px solid var(--gray-300);
      color: var(--gray-900);
    }
  }
`

export default IndexPage
