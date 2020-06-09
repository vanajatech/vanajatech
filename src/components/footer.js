import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

// TODO; Try to reduce the amount of bloat this brings
import Grid from "@material-ui/core/Grid"

import { Github, Instagram, Linkedin } from "./icons"

const Footer = () => (
  <Grid container style={{ marginTop: "6rem" }}>
    <Grid item xs>
      <SocialIcons>
        <a href="https://github.com/vanajatech">
          <Github />
        </a>
        <a href="https://www.instagram.com/vanajatech/">
          <Instagram />
        </a>
        <a href="https://www.linkedin.com/company/vanaja-tech/">
          <Linkedin />
        </a>
      </SocialIcons>
      <Links>
        <Link to="/contact-us">Contact Us</Link>
        <span> | </span>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <span> | </span>
        <Link to="/tietosuojaseloste">Tietosuojaseloste</Link>
      </Links>
      <Copyright>© 2020 Vanaja Tech. All rights reserved.</Copyright>
    </Grid>
  </Grid>
)

const SocialIcons = styled.div`
  color: var(--gray-900);
  display: flex;
  justify-content: center;
  margin-top: 4rem;

  svg {
    margin: 0 3rem;
  }
`

const Links = styled.div`
  color: var(--gray-900);
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
`

const Copyright = styled.p`
  color: var(--gray-900);
  font-size: 0.875rem;
  display: flex;
  justify-content: center;
  padding-bottom: 4rem;
`

export default Footer
