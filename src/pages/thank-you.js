import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageHeader"
import { BoldLink } from "../components/utilities"

const ThankYou = () => (
  <Layout>
    <SEO title="Thank you!" />

    <PageHeader title="Thank you!">
      <p>Your contact information has been received.</p>
      <p>
        <BoldLink href="/">← Back to home page</BoldLink>
      </p>
    </PageHeader>
  </Layout>
)

export default ThankYou
