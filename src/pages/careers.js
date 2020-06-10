import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageHeader"
import Image from "../components/image"
import { Card } from "../components/card"
import { Button } from "../components/button"
import ContactForm from "../components/contactForm"

const Careers = () => (
  <Layout>
    <SEO title="Join the Team" />
    <PageHeader title="Join the Team">
      <h4>
        We are always looking for more members to join our Counter-Strike team.
      </h4>
    </PageHeader>

    <Grid container spacing={4}>
      <Grid item xs={6} className="flex flex-col justify-center pr-8 mb-24">
        <p>
          We’re an innovative and fast growing team of passionate fellows, based
          in Hämeenlinna. Personal and professional development of each and
          every member of the team is in the heart of Vanaja Tech.
        </p>
        <p>
          We want to make sure that everyone in our team feels at home. That’s
          why we take time to be together every week, be it having fun in
          Counter-Strike, sweating on the football field or hiking in the
          beautiful forests nearby.
        </p>
      </Grid>

      <Grid item xs={6} className="mb-24">
        <Image
          alt="Our team."
          filename="annie-spratt-QckxruozjRg-unsplash.jpg"
          className="w-full h-full"
        />
      </Grid>

      <Grid item xs={6}>
        <Image
          alt="Hämeenlinna, the city."
          filename="IMG_0502.jpg"
          className="w-full h-full"
        />
      </Grid>

      <Grid item xs={6} className="flex flex-col justify-center pl-16">
        <h2>
          About <Accent>Hämeenlinna</Accent>
        </h2>
        <p className="mb-0">
          There are 107 towns in Finland, but none of them equals Hämeenlinna,
          the only town with an ideal combination of <Accent>nature </Accent>
          and <Accent>culture</Accent>, everything nicely and easily within your
          reach.
        </p>
      </Grid>

      <Grid item xs={12} className="text-center mt-24 mb-8">
        <h2 className="mb-4">Apply to join our team!</h2>
      </Grid>

      <Grid item xs={6}>
        <Card>
          <h4>Senior Software Engineer</h4>
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
          <h4>Junior Software Engineer</h4>
          <p>
            Chambray plaid edison bulb, church-key occupy you probably haven't
            heard of them snackwave pok pok. Vexillologist prism authentic
            pour-over jean shorts.
          </p>
          <Button>Apply</Button>
        </Card>
      </Grid>

      <Grid item xs={12} className="text-center my-8">
        <h5>
          You can also send us an open application,{" "}
          <a
            className="text-red font-semibold"
            href="mailto:careers@vanajatech.com"
          >
            careers@vanajatech.com
          </a>
        </h5>
      </Grid>
    </Grid>

    <Grid container>
      <Grid item xs={12}>
        <ContactForm
          name="careers"
          title="Want to know when new positions open?"
          submitText="Yes!"
        />
      </Grid>
    </Grid>
  </Layout>
)

const Accent = styled.span`
  color: var(--secondary);
`

export default Careers
