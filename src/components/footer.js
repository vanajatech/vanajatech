import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import {
  Github,
  // Instagram,
  Linkedin,
} from "./icons"
import { Separator } from "./utilities"

const Footer = () => (
  <Grid container className="mt-24">
    <Grid item xs>
      <SocialIcons>
        <a href="https://github.com/vanajatech">
          <Github />
        </a>
        <a href="https://www.linkedin.com/company/vanaja-tech/">
          <Linkedin />
        </a>
      </SocialIcons>
      <Links>
        <Link to="/">Aarre</Link>
        <Separator />
        <a href="https://www.talenom.fi/">Our Work</a>
        <Separator />
        <a href="https://rekry.talenom.fi/">Careers</a>
        <Separator />
        <a href="https://www.talenom.fi/">Contact Us</a>
      </Links>
      <Copyright>
        © Vanaja Technologies Ltd. since 2020. All rights reserved.
      </Copyright>
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
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const Copyright = styled.p`
  color: var(--gray-900);
  font-size: 0.875rem;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 4rem;
`

export default Footer
