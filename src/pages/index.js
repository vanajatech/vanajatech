import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <H1>
      Ideas are cheap;
      <br />
      execution is everything.
    </H1>
    <H2>
      That’s where <Red>we</Red> come in.
    </H2>
    <H3>Our expertise in world-class applications ensures your success.</H3>
    <Button>Contact Us</Button>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

const H1 = styled.h1`
  font-size: 36px;
  line-height: 44px;
  margin-bottom: 32px;
`

const H2 = styled.h2`
  font-size: 48px;
  line-height: 59px;
  margin-bottom: 32px;
`

const H3 = styled.h3`
  font-size: 36px;
  line-height: 44px;
  margin-bottom: 32px;
`

const Red = styled.span`
  color: var(--primary);
`

const Button = styled.button`
  color: #fff;
  font-size: 24px;
  line-height: 28px;
  background: #b40a0a;
  box-shadow: 2px 2px 5px rgba(180, 10, 10, 0.2);
  border: none;
  border-radius: 28px;
  padding: 14px 26px;
  margin-bottom: 32px;
`

export default IndexPage
