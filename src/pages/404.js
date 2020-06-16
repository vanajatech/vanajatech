import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageHeader"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <PageHeader title="404: Not found">
      <p>You just hit a route that doesn&#39;t exist :(</p>
    </PageHeader>
  </Layout>
)

export default NotFoundPage
