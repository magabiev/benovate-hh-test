import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "auto",
  },
});

function User({ name, lastName, groupId }) {
  const classes = useStyles();
  const categories = useSelector((state) =>
    state.categories.find((item) => item.id === groupId)
  );
  const categoriesLoading = useSelector((state) => state.categoriesLoading);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root}>
        <CardMedia
          component="img"
          height="140"
          image="https://picsum.photos/200"
        />
        <CardContent>
          <Typography variant="h5">
            {name} {lastName}
          </Typography>
          <Typography variant="h6">
            {!categoriesLoading && categories?.name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default User;
