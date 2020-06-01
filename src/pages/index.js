import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import { Row, Col } from "../components/grid"
import { Card, CardHeader } from "../components/card"
import { Input } from "../components/input"

import Image from "../components/image"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Row>
      <Col>
        <h1 className="text-gray-900 text-4xl font-light mb-8">
          Ideas are cheap;
          <br />
          <span className="font-bold">execution is everything.</span>
          <br />
          That’s where we at Vanaja Technologies come in.
          <br />
          <br />
          Our expertise in world-class applications ensures your success.
        </h1>
      </Col>
    </Row>
    <Row>
      <Col>
        <Image
          alt="Window a day keeps Matti away."
          filename="windows-2EwyKv4-03k-unsplash.jpg"
          className="w-full h-full"
        />
      </Col>
      <Col className="flex flex-col items-center justify-center">
        <h2 className="text-gray-900 text-5xl tracking-tighter font-bold mb-8">
          We Do Software
        </h2>
        <p className="text-center mb-8">
          Chambray plaid edison bulb, church-key occupy you probably haven't
          heard of them snackwave pok pok. Vexillologist prism authentic
          pour-over jean shorts. Pok pok artisan everyday carry food truck,
          messenger bag hoodie offal bespoke four loko.
        </p>
        <Button>See More</Button>
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

export default IndexPage
