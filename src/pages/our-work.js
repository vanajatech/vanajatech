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
        We partner with our customers to design, implement and deliver software
        projects. Mutual trust and sufficient transparency are a must in all we
        do.
      </h4>
    </PageHeader>

    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      spacing={4}
    >
      <Grid item md={6} xs={12}>
        <Grid container justify="center" className="mb-16">
          <Grid
            item
            md="auto"
            xs={12}
            className="text-center md:text-left mb-4"
          >
            <BigNumber>1</BigNumber>
          </Grid>
          <Grid
            item
            md
            xs={10}
            zeroMinWidth
            className="text-center md:text-left"
          >
            <h3>Business Critical Applications</h3>
            <p>
              We promise self-confidently we can implement the most
              business-critical applications. We’ve already written code to pay
              invoices, transfer money and create an audit trail.
            </p>
            <p>Tell us what you need; we’ll dare to implement it.</p>
          </Grid>
        </Grid>
        <Grid container justify="center" className="mb-16">
          <Grid
            item
            md="auto"
            xs={12}
            className="text-center md:text-left mb-4"
          >
            <BigNumber>2</BigNumber>
          </Grid>
          <Grid
            item
            md
            xs={10}
            zeroMinWidth
            className="text-center md:text-left"
          >
            <h3>Boldly Self-Confident</h3>
            <p>We work efficiently and decisively.</p>
            <p>
              Instead of contemplating what to do, we approach problems head on
              and progress to pick the right way to proceed.
            </p>
            <p>
              We do not plan our projects to death. Instead, we estimate
              feasibility, then create a rough plan, and decide weekly actions
              dynamically week by week.{" "}
            </p>
          </Grid>
        </Grid>
        <Grid container justify="center" className="mb-16">
          <Grid
            item
            md="auto"
            xs={12}
            className="text-center md:text-left mb-4"
          >
            <BigNumber>4</BigNumber>
          </Grid>
          <Grid
            item
            md
            xs={10}
            zeroMinWidth
            className="text-center md:text-left"
          >
            <h3>Usability and design</h3>
            <p>The most important aspect of any software is its usability. </p>
            <p>
              How natural is it to use an app? Is the terminology clear and
              descriptive? Is the onboarding flow encouraging and easy?
            </p>
            <p> These are questions we consider in all projects.</p>
          </Grid>
        </Grid>
  <Grid container justify="center" className="mb-16">
          <Grid
            item
            md="auto"
            xs={12}
            className="text-center md:text-left mb-4"
          >
            <BigNumber>2</BigNumber>
          </Grid>
          <Grid
            item
            md
            xs={10}
            zeroMinWidth
            className="text-center md:text-left"
          >
            <h3>Specialty: Business Services and Finance</h3>
            <p>
              The banking and finance industries are on the brink of a
              revolution. Open Banking interfaces (PSD2) are real today. We can
              guide you through the change and help you catch new opportunities.
            </p>
          </Grid>
        </Grid>
        <Grid container justify="center" className="mb-16">
          <Grid
            item
            md="auto"
            xs={12}
            className="text-center md:text-left mb-4"
          >
            <BigNumber>5</BigNumber>
          </Grid>
          <Grid
            item
            md
            xs={10}
            zeroMinWidth
            className="text-center md:text-left"
          >
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

    <Grid container justify="center" alignItems="center">
      <Grid item md={3} xs={6}>
        <DevCell />
      </Grid>
      <Grid
        item
        md={7}
        xs={12}
        className="text-center md:text-left mt-8 md:mt-32 mb-24 md:ml-24"
      >
        <h1>Buy a Dev Cell</h1>
        <h4>A Dev Cell of 3-6 people is productive and agile.</h4>
        <p>
          We provide you with a team that is perfectly suited to build your next
          product fast and reliably.
        </p>
        <p>
          A dev cell may consist of a very senior programmer, a few junior
          programmers and a testing specialist. The senior programmer will guide
          and lead the project responsibly.
        </p>
        <p>
          Additionally, a project manager can be added to the cell, if there are
          several dependencies to other teams or if accurate reporting and
          planning is necessary.
        </p>
      </Grid>
    </Grid>

    <Grid container direction="column" justify="flex-start" alignItems="center">
      <Grid item xs className="text-center my-24">
        <h2 className="mb-8">Notable Customers</h2>
        <Grid container spacing={8} className="">
          <Grid item className="mx-auto">
            <TalenomLogo height="48" />
          </Grid>
          <Grid item className="mx-auto">
            <Image
              alt="Oscar Software logo."
              filename="oscar-logo.png"
              style={{ width: 210, height: 64 }}
              withWebp
            />
          </Grid>
        </Grid>
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
