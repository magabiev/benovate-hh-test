import React from "react";
import { Button, CircularProgress, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { loadUsersMore } from "../../redux/ducks/users";

const useStyles = makeStyles({
  root: {
    display: "flex",
    width: "100%",
  },
  buttonMargin: {
    margin: "auto",
  },
});

function LoadMore() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const users = useSelector((state) => state.users.items);
  const usersMoreLoading = useSelector((state) => state.users.usersMoreLoading);

  const loadMore = () => {
    dispatch(loadUsersMore(users.length + 50));
  };

  return (
    <div className={classes.root}>
      <div className={classes.buttonMargin}>
        {usersMoreLoading ? (
          <CircularProgress />
        ) : (
          <Button onClick={loadMore}>Загрузить еще</Button>
        )}
      </div>
    </div>
  );
}

export default LoadMore;
