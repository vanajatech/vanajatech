import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import Button from "../components/button"
import Image from "../components/image"
import ContactForm from "../components/contactForm"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Grid container spacing={4}>
      <Grid item xs>
        <h1 className="font-normal text-4xl mt-16 md:mt-32 mb-1">
          Technology partnership with organisations that
          <br />
          <span className="h1 font-bold text-6xl">Form The Future.</span>
        </h1>
        <h2 className="font-normal text-4xl mb-16 md:mb-32">
          Vanaja Technologies is a software house in Hämeenlinna, Finland.
        </h2>
      </Grid>
    </Grid>

    <Grid container spacing={4} className="mb-16 md:mb-32">
      <Grid item md={6} xs={12}>
        <Image
          alt="Two handsome fellas smiling to the camera."
          filename="IMG_7327.jpg"
          className="w-full h-full"
          withWebp
        />
      </Grid>
      <Grid
        item
        md={6}
        xs={12}
        className="flex flex-col justify-center items-center text-center"
      >
        <h2>We Do Software</h2>
        <p className="mb-12">
Best apps, websites and back office systems are tools for <b>boosting productivity</b> of individuals or teams, <b>bringing satisfaction</b> to users and enabling <b>access to new customer segments</b> or markets.    
        </p>
        <p>
          Building those tools is our bread and butter. We would love to build your tools with you. 
        </p>
        <Button to="/our-work/">See More</Button>
      </Grid>
    </Grid>

    <Grid container spacing={4} className="mb-16 md:mb-32 md:relative">
      <Grid item xs={12}>
        <Image
          alt="Vanaja Tech team playing football."
          filename="IMG_4290.jpg"
          className="w-full h-full"
          withWebp
          style={{ maxHeight: 720 }}
        />
      </Grid>
      <Grid item xs={12} className="md:absolute md:h-full">
        <Overlay>
          <h2>Join the Team</h2>
          <p>
            We’re an innovative and fast growing team of passionate fellows,
            based in Hämeenlinna. Personal and professional development of each
            and every member of the team is in the heart of Vanaja Tech.
          </p>
          <Button to="/careers/">See Open Positions</Button>
        </Overlay>
      </Grid>
    </Grid>

    <Grid container spacing={4} className="mb-16 md:mb-32">
      <Grid item xs className="text-center">
        <h2 className="m-0">Contact Us</h2>
        <h4 className="mb-8">
          We want to help you build your next ambitious project
        </h4>
        <Button to="/contact-us/">Contact Us</Button>
      </Grid>
    </Grid>

    <ContactForm
      name="got-interested"
      title="Got interested? Let's get in touch!"
      submitText="Contact me!"
    />
  </Layout>
)

const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;

  @media (min-width: 768px) {
    background-color: var(--gray-900);
    background-color: rgba(31, 37, 56, 0.35);
    color: var(--gray-100);
    padding: 1rem;

    h4 {
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.5rem;
      line-height: 1;
      margin-bottom: 2rem;
      max-width: 75%;
    }

    a {
      background: rgba(255, 255, 255, 1);
      color: var(--gray-900);
      box-shadow: none;

      &:hover,
      &:focus {
        background: rgba(255, 255, 255, 0.8);
        color: var(--gray-900);
      }

      &:active {
        background: rgba(255, 255, 255, 0.9);
        color: var(--gray-900);
      }
    }
  }
`

export default IndexPage
