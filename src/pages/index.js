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
    <Row className="mb-32">
      <Col>
        <Image
          alt="Window a day keeps Matti away."
          filename="windows-2EwyKv4-03k-unsplash.jpg"
          className="w-full h-full"
        />
      </Col>
      <Col className="flex flex-col items-center justify-center">
        <h2 className="text-gray-900 mb-8">We Do Software</h2>
        <p className="text-center mb-8">
          Chambray plaid edison bulb, church-key occupy you probably haven't
          heard of them snackwave pok pok. Vexillologist prism authentic
          pour-over jean shorts. Pok pok artisan everyday carry food truck,
          messenger bag hoodie offal bespoke four loko.
        </p>
        <Button>See More</Button>
      </Col>
    </Row>
    <Row className="mb-32">
      <Col className="p-0">
        <Image
          alt="Window a day keeps Matti away."
          filename="timmy-wesley-3Ltn2aWVNcM-unsplash.jpg"
          className="w-full h-full"
          style={{ maxHeight: 720 }}
        />
        <div className="absolute bg-gray-900 bg-opacity-50 text-white text-center inset-0 w-full h-full flex flex-col items-center justify-center px-12">
          <div>
            <h2 className="mb-8">Join the Team</h2>
            <p className="text-white text-2xl leading-7 mb-8">
              We’re an innovative and fast growing team of passionate fellows,
              based in Hämeenlinna. Personal and professional development of
              each and every member of the team is in the heart of Vanaja Tech.
            </p>
            <Button>See Open Positions</Button>
          </div>
        </div>
      </Col>
    </Row>
    <Row className="mb-32">
      <Col className="text-gray-900 text-center">
        <h2>Contact Us</h2>
        <p className="text-2xl leading-7 mb-8">
          We are always looking for new opporturnities.
        </p>
        <Button>Contact Us</Button>
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
