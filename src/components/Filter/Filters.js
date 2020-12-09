import React from "react";
import { Button, Container, Grid, makeStyles } from "@material-ui/core";
import Categories from "./Categories";
import Sort from "./Sort";
import { useDispatch } from "react-redux";
import { popUpShowToggled } from "../../redux/ducks/users";

const useStyles = makeStyles({
  containerMargin: {
    marginTop: 100,
  },
});

function Filters() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const popUpShow = () => {
    dispatch(popUpShowToggled());
  };

  return (
    <Container maxWidth="md" className={classes.containerMargin}>
      <Grid container justify="space-between">
        <Grid item>
          <Grid container spacing={5}>
            <Grid item>
              <Categories />
            </Grid>
            <Grid item>
              <Sort />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button onClick={popUpShow} variant="outlined">
            Добавить
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Filters;
