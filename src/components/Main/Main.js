import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  containerMargin: {
    marginTop: 100,
  },
});

function Main() {
  const classes = useStyles();
  return (
    <Container maxWidth="xs" className={classes.containerMargin}>
      <Typography variant="h2">Привет Гость</Typography>
    </Container>
  );
}

export default Main;
