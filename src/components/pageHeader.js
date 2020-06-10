import React from "react"
import Grid from "@material-ui/core/Grid"

const PageHeader = ({ title, children }) => (
  <Grid container direction="column" alignItems="center" spacing={4}>
    <Grid item md={8} xs={12} className="text-center mt-24 mb-16">
      <h1>{title}</h1>
      {children}
    </Grid>
  </Grid>
)

export default PageHeader
