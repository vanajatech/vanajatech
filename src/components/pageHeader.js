import React from "react"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"

const PageHeader = ({ title, children }) => (
  <Grid container direction="column" alignItems="center" spacing={4}>
    <Grid item md={8} xs={12}>
      <Box textAlign="center" m="7rem 0 4rem">
        <h1>{title}</h1>
        {children}
      </Box>
    </Grid>
  </Grid>
)

export default PageHeader
