import React from "react";
import {
  AppBar,
  Button,
  Container,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  buttonSpacing: {
    marginRight: theme.spacing(1),
  },
  linkStyles: {
    textDecoration: "none",
    color: "inherit",
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Grid container justify="space-between">
            <Grid item>
              <Typography variant="h5">Test Task</Typography>
            </Grid>
            <Grid>
              <Button
                className={classes.buttonSpacing}
                variant="outlined"
                color="inherit"
              >
                <Link className={classes.linkStyles} to="/main">
                  Main
                </Link>
              </Button>
              <Button variant="outlined" color="inherit">
                <Link className={classes.linkStyles} to="/users">
                  Users
                </Link>
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
