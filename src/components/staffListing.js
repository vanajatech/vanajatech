import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import Image from "./image"
import { Card } from "./card"
import { Github, Instagram, Linkedin } from "./icons"

const STAFF_QUERY = graphql`
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

const StaffListing = () => (
  <StaticQuery
    query={STAFF_QUERY}
    render={({ allStaffJson }) =>
      allStaffJson.edges.map(({ node }) => (
        <Grid key={node.name} item lg={3} md={4} sm={6} xs={12}>
          <StaffCard>
            <Portrait
              alt="Faceholder."
              filename={node.imageUrl ? node.imageUrl : "face-1.png"}
            />
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

const StaffCard = styled(Card)`
  text-align: center;
  padding: 2rem 1rem;

  h4 {
    margin-bottom: 1.5rem;
  }
`

const Portrait = styled(Image)`
  border-radius: 9999px;
  width: 100%;
  height: 100%;
  max-width: 140px;
  max-height: 140px;
  margin: 0 auto 1.5rem;
`

const BoldLink = styled.a`
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: var(--primary);
`

const SocialIcons = styled.div`
  margin-top: 1.5rem;
  color: var(--gray-500);
  display: flex;
  gap: 20px;
  justify-content: center;

  svg {
    width: 1rem;
    fill: var(--gray-500);
  }
`

export default StaffListing
