import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import Button from "../components/button"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageHeader"
import Image from "../components/image"
import { BigLink, Separator } from "../components/utilities"

const Aarre = () => (
  <Layout>
    <SEO title="Aarre" />
    <PageHeader title="Aarre - Treasure" />

    <Grid container spacing={4} justify="center" className="mb-12">
      <Grid item xs="auto">
        <h3>
          <i>Sattuiko kauan sitten</i>
        </h3>
        <p>
          <i>
            Aamupäivän paahteessa
            <br />
            kuulen kavion kapsetta.
            <br />
            Viestintuoja pihaan laukkaa. <br />
            "Savu nousee tuolta kaukaa! <br />
            Se on Birger Hurjapää!
            <br />
            Aarteita tuli ryöstämään!"
          </i>
        </p>

        <p>
          <i>
            Sieppaan arkkuni puisen <br />
            ja kohti suojaa, linnaa, juoksen.
            <br />
            Kivinen portti jo turvan tuo. <br />
            Varjot jää taakse, muurin luo. <br />
            Polku pieni ja kallioinen <br />
            kohta tuo aukeaan avaraan.
          </i>
        </p>

        <p>
          <i>
            Pitikö kultaa kerätä, voi!
            <br />
            Vaivaa ja hikeä taaskin toi!
          </i>
        </p>

        <p>
          <i>
            Mihin aarteen kätkisimme?
            <br />
            Pian, katseen alle, minne!
            <br />
            Kaksikymmentä askelta oikealle,
            <br />
            katson alas, kuusen alle.
            <br />
            Sinne sen lasken, ei vihollinen nää,
            <br />
            odottakoon uutta löytäjää!
          </i>
        </p>
      </Grid>
    </Grid>

    <Grid container spacing={4} justify="center" className="mb-12">
      <Grid item md={6} xs={12}>
        <h2>Huomaathan</h2>
        <p>
          Aarre ei sijaitse yksityisalueella, eikä sitä löytääkseen tarvitse
          maksaa pääsy- tai muita maksuja.
          <br />
          Arkun avaamiseen ei tarvita työkaluja, eikä sitä ole kaivettu maan
          alle, vaan laskettu vain paikalleen.
          <br />
          Aarre sijaitsee Hämeenlinnan alueella, mutta ei valitettavasti
          esteettömässä paikassa.
        </p>
      </Grid>
    </Grid>

    <Grid container spacing={4} justify="center">
      <Grid item md={6} xs={12}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/SsPvE4Uby-E"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Grid>
    </Grid>
  </Layout>
)

export default Aarre
