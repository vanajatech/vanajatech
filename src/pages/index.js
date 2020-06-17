import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import Grid from "@material-ui/core/Grid"

import Button from "../components/button"
import Image from "../components/image"
import ContactForm from "../components/contactForm"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <FrontPageStyle />

    <Grid container spacing={4}>
      <Grid item xs>
        <h1 className="slogan mt-16 md:mt-32 mb-0">
          Talk is cheap;
          <br />
          <span className="h1 font-bold">execution is everything.</span>
        </h1>
        <h2 className="slogan mb-16 md:mb-32">
          Vanaja Technologies is a software house in Hämeenlinna, Finland.
        </h2>
      </Grid>
    </Grid>

    <Grid container spacing={4} className="mb-16 md:mb-32">
      <Grid item md={6} xs={12}>
        <Image
          alt="Window a day keeps Matti away."
          filename="windows-2EwyKv4-03k-unsplash.jpg"
          className="w-full h-full"
        />
      </Grid>
      <Grid
        item
        md={6}
        xs={12}
        className="flex flex-col justify-center items-center text-center"
      >
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

    <Grid container className="mb-16 md:mb-32 relative">
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

    <Grid container spacing={4} className="mb-16 md:mb-32">
      <Grid item xs className="text-center">
        <h2 className="h1 m-0">Contact Us</h2>
        <h4 className="mb-8">We are always looking for new opporturnities.</h4>
        <Button to="/contact-us">Contact Us</Button>
      </Grid>
    </Grid>

    <ContactForm
      name="got-interested"
      title="Got interested? Let's get in touch!"
      submitText="Contact me!"
    />
  </Layout>
)

const FrontPageStyle = createGlobalStyle`
  .slogan {
    color: var(--gray-900);
    font-weight: normal;
    font-size: 2.25rem;
    line-height: 1.25;
    margin-bottom: 3rem;
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
  padding: 1rem;
  text-align: center;
  background-color: var(--gray-900);
  background-color: rgba(31, 37, 56, 0.5);
  color: var(--gray-100);
  height: 100%;
  width: 100%;

  p {
    font-size: 1.5rem;
    line-height: 1.25;
    margin-bottom: 2rem;
    max-width: 75%;
  }

  a {
    color: #fff;
    background: transparent;
    border: 4px solid #fff;
    border-radius: 0.5rem;
    padding: 1rem 1.5rem;
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 1;
    box-shadow: none;

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
