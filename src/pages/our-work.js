import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import Layout from "../components/layout"
import PageHeader from "../components/pageHeader"
import SEO from "../components/seo"
import Image from "../components/image"
import ContactForm from "../components/contactForm"

import DevCell from "../images/dev-cell.svg"
import TalenomLogo from "../images/talenom-logo.svg"

const OurWork = () => (
  <Layout>
    <SEO title="Our Work" />
    <PageHeader title="Our Work">
      <h4>
        We are a young company with a lot of combined skill and experience.
      </h4>
    </PageHeader>

    <Grid container direction="column" alignItems="center" spacing={4}>
      <Grid item md={6} xs={12}>
        <Grid container wrap="nowrap" className="mb-16">
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
        <Grid container wrap="nowrap" className="mb-16">
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
        <Grid container wrap="nowrap" className="mb-16">
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
        <Grid container wrap="nowrap" className="mb-16">
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

    <Grid container alignItems="center">
      <Grid item md={3} xs={12}>
        <DevCell />
      </Grid>
      <Grid item md={7} xs={12} className="mt-32 mb-24 md:ml-24">
        <h1 className="m-0">Buy a Dev Cell</h1>
        <h4>A Dev Cell of 3-6 people is productive and agile.</h4>
        <p>
          We provide you with a team that is perfectly suited to build your next
          product fast and reliably.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Grid>
    </Grid>

    <Grid container direction="column" justify="flex-start" alignItems="center">
      <Grid item xs className="text-center mt-32 mb-24">
        <h2>Notable Customers</h2>
        <div className="flex items-center mt-8 py-16">
          <TalenomLogo height="48" className="pr-16" />
          <Image
            alt="Oscar Software logo."
            filename="oscar-logo.png"
            style={{ width: 210, height: 64 }}
            withWebp
          />
        </div>
      </Grid>
    </Grid>

    <ContactForm
      name="got-interested"
      title="Got interested? Let's get in touch!"
      submitText="Contact me!"
    />
  </Layout>
)

const BigNumber = styled.div`
  display: inline;
  text-align: right;
  vertical-align: top;
  color: var(--primary);
  font: 600 144px var(--font-mono);
  line-height: 110px;
  letter-spacing: 0.03em;
  margin-right: 2rem;
`

export default OurWork
