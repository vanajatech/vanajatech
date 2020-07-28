import React from "react"
import Grid from "@material-ui/core/Grid"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PageHeader from "../components/pageHeader"
import { BoldLink } from "../components/utilities"

const Aarre = () => (
  <Layout>
    <SEO
      title="Toinen Aarre"
      description="Mies syntyi, kasvoi vahvaksi. Elämänsä oli kova, raskaskin. Vaan tuskin häntä muistetaan - vain hänenlaisiaan."
    />
    <PageHeader title="Toinen Aarre" />

    <Grid container spacing={4} justify="space-between" className="mb-12">
      <Grid item md={5} xs={12}>
        <article className="italic">
          <h2>Kohtaloita</h2>
          <p>
            Mies syntyi, kasvoi vahvaksi.
            <br />
            Elämänsä oli kova, raskaskin.
            <br />
            Vaan tuskin häntä muistetaan
            <br />- vain hänenlaisiaan.
          </p>
          <p>
            Tapasi naisen, rakastui kai.
            <br />
            Vaimon kohtalo suruinen, voi!
            <br />
            Vaan tuskin häntä muistetaan
            <br />- vain hänenlaisiaan.
          </p>
          <p>
            Mut kyllä silti täällä lie
            <br />
            Hämeenlinnassa kulkutie,
            <br />
            heidän nimiänsä muistuttaa.
            <br />
            Sattuma sen niin kai saa.
          </p>
          <p>
            Sen korkealta kohdalta
            <br />
            kun alas katselee, voi
            <br />
            polun nähdä viihtyisän.
            <br />
            Sitä lähde kulkemaan.
          </p>
          <p>
            Elä kertaakaan käänny oikeaan.
            <br />
            Vaimonsa elämän mukaan:
            <br />
            jokaista elinpäiväänsä kohti
            <br />
            reilut kolme tuumaa kulje.
          </p>
          <p>
            Kun maisema matkan pysäyttää,
            <br />
            tartu hetkeen, nauti hetki tää!
            <br />
            Nyt jälkeen muutaman askeleen
            <br />
            voit kääntää katseesi oikeaan.
          </p>
          <p>
            Jos tarkkaan katsot, näet puun:
            <br />
            Se tummana muista erottuu.
            <br />
            Aarre nukkuu kätkössä sen.
            <br />
            Mene, ja katso alle lehtien.
          </p>
          <p>
            Kohtalo sinulle aarteita suo.
            <br />
            Olkoon onneksi löytö tuo!
          </p>
        </article>
      </Grid>
      <Grid item md={6} xs={12}>
        <aside>
          <Image
            alt="Aarrearkku."
            filename="IMG_6771.jpg"
            className="w-full h-full rounded-lg mb-8"
            withWebp
          />
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
          <p>
            <BoldLink href="/ensimmainen-aarre/">
              Ensimmäinen aarre löytyi 7.7.2020
            </BoldLink>
          </p>
        </aside>
      </Grid>
    </Grid>

    <Grid container spacing={4} justify="center">
      <Grid item md={6} xs={12}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/55WoX7H5ll0"
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
