import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from "../components/button"
import { Row, Col } from "../components/grid"
import { Card, CardHeader } from "../components/card"
import { Input } from "../components/input"

import Illustration from "../images/illustration.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Row>
      <Col>
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
      </Col>
      <Col>
        <Illustration style={{ overflow: "visible" }} />
      </Col>
    </Row>
    <Row>
      <Col>
        <Card align="center">
          <CardHeader>Join Our Mailing List</CardHeader>
          <Input type="text" placeholder="jack@mail.com" />
        </Card>
      </Col>
    </Row>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

const H1 = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
`

const H2 = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`

const H3 = styled.h3`
  font-size: 2rem;
  margin-bottom: 2rem;
`

const Red = styled.span`
  color: var(--primary);
`

export default IndexPage
