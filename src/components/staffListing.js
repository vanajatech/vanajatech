import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import Image from "./image"
import { Card } from "./card"
import { Github, Instagram, Linkedin } from "./icons"
import { BoldLink } from "./utilities"

const StaffListing = () => (
  <StaticQuery
    query={query}
    render={({ allStaffJson }) =>
      allStaffJson.edges.map(({ node }) => (
        <Grid key={node.name} item md={4} sm={6} xs={12}>
          <StaffCard>
            <Portrait alt="Faceholder." filename={node.imageUrl} withWebp />
            <h4>{node.name}</h4>
            <BoldLink>{node.email}</BoldLink>
            <SocialIcons>
              {node.github && (
                <a href={node.github}>
                  <Github />
                </a>
              )}
              {node.instagram && (
                <a href={node.instagram}>
                  <Instagram />
                </a>
              )}
              {node.linkedin && (
                <a href={node.linkedin}>
                  <Linkedin />
                </a>
              )}
            </SocialIcons>
          </StaffCard>
        </Grid>
      ))
    }
  />
)

const query = graphql`
  query StaffQuery {
    allStaffJson {
      edges {
        node {
          name
          email
          imageUrl
          github
          instagram
          linkedin
        }
      }
    }
  }
`

const StaffCard = styled(Card)`
  text-align: center;
  padding: 2rem 1rem;
  height: 100%;

  h4 {
    margin-bottom: 1rem;
    font-weight: 600;
  }
`

const Portrait = styled(Image)`
  border-radius: 9999px;
  margin: 0 auto 1rem;
  width: 100%;
  height: 100%;
  max-width: 140px;
  max-height: 140px;
`

const SocialIcons = styled.div`
  margin-top: 1.5rem;
  color: var(--gray-500);
  display: flex;
  justify-content: center;

  svg {
    fill: var(--gray-900);
    margin: 0 1rem;
    height: 1.25rem;
    width: 1.25rem;
  }
`

export default StaffListing
