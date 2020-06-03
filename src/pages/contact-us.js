import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Button from "../components/button"
import { Row, Col } from "../components/grid"
import { Card, CardHeader } from "../components/card"
import { Input } from "../components/input"

const ContactUs = () => (
  <Layout>
    <SEO title="Contact Us" />
    <Row>
      <Col className="text-center">
        <h1>Contact Us</h1>
        <p>
          Chambray plaid edison bulb, church-key occupy you probably haven't
          heard of them snackwave pok pok. Vexillologist prism authentic
          pour-over jean shorts. Pok pok artisan everyday carry food truck,
          messenger bag hoodie offal bespoke four loko.
        </p>
        <Link to="/">Go back home</Link>
      </Col>
    </Row>
  </Layout>
)

export default ContactUs
