import React from "react"
import Grid from "@material-ui/core/Grid"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageHeader"

const Aarre = () => (
  <Layout>
    <SEO
      title="Aarre"
      description="Sattuiko kauan sitten. Aamupäivän paahteessa kuulen kavion kapsetta. Viestintuoja pihaan..."
    />
    <PageHeader title="Aarre - Treasure">
      <h4>Aarteen löysi Jari Nieminen 7.7.2020</h4>
    </PageHeader>

    <Grid container spacing={4} justify="space-between" className="mb-12">
      <Grid item md={6} xs={12}>
        <aside>
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
        </aside>
      </Grid>

      <Grid item md={5} xs={12}>
        <article className="italic">
          <h2>Sattuiko kauan sitten</h2>
          <p>
            Aamupäivän paahteessa
            <br />
            kuulen kavion kapsetta.
            <br />
            Viestintuoja pihaan laukkaa. <br />
            "Savu nousee tuolta kaukaa! <br />
            Se on Birger Hurjapää!
            <br />
            Aarteita tuli ryöstämään!"
          </p>

          <p>
            Sieppaan arkkuni puisen <br />
            ja kohti suojaa, linnaa, juoksen.
            <br />
            Kivinen portti jo turvan tuo. <br />
            Varjot jää taakse, muurin luo. <br />
            Polku pieni ja kallioinen <br />
            kohta tuo aukeaan avaraan.
          </p>

          <p>
            Pitikö kultaa kerätä, voi!
            <br />
            Vaivaa ja hikeä taaskin toi!
          </p>

          <p>
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
          </p>
        </article>
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
          title="Aarrearkku"
        ></iframe>
      </Grid>
    </Grid>
  </Layout>
)

export default Aarre
