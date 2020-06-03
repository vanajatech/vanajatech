import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "../images/logo.svg"

import { Row } from "./grid"
// import { Container, Row, Col } from "../components/grid"

const Header = () => (
  <Row>
    <div className="flex flex-1 justify-between px-4">
      <Link to="/" className="flex">
        <Logo className="h-12" />
      </Link>
      <div className="flex items-center text-gray-500 font-normal text-base">
        <Link to="/our-work" className="ml-12">
          Our Work
        </Link>
        <Link to="/careers" className="ml-12">
          Careers
          <span className="bg-red text-white text-xs text-center font-bold leading-4 rounded-full d-block absolute w-4 h-4">
            2
          </span>
        </Link>
        <Link to="/contact-us" className="ml-12">
          Contact Us
        </Link>
      </div>
    </div>
  </Row>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
