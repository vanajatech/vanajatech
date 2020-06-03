import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { Row } from "./grid"

const Footer = () => (
  <Row>
    <div className="flex flex-1 justify-between px-4">
      <div className="flex items-center text-gray-500 text-sm font-normal py-12">
        <p className="text-sm text-gray-500">
          © 2020 Vanaja Tech. All rights reserved.
        </p>
        <a className="ml-12">Privacy Policy</a>
        <a className="ml-12">Tietosuojaseloste</a>
      </div>
    </div>
  </Row>
)

export default Footer
