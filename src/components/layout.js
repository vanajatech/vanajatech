import React from "react"
import PropTypes from "prop-types"
import { motion, AnimatePresence } from "framer-motion"
import Container from "@material-ui/core/Container"

import Nav from "./nav"
import Footer from "./footer"
import "../css/layout.css"

const duration = 0.1

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration },
  },
}

const Layout = ({ children }) => (
  <Container maxWidth="lg">
    <Nav />
    <AnimatePresence>
      <motion.main
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        {children}
      </motion.main>
    </AnimatePresence>
    <Footer />
  </Container>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
