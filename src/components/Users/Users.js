import React from "react";
import { Container, Grid, LinearProgress, makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import User from "./User";
import LoadMore from "./LoadMore";
import Filters from "../Filter/Filters";
import { getUsersSelector } from "../../redux/ducks/users";

const useStyles = makeStyles({
  containerMargin: {
    marginTop: 50,
  },
  progressBar: {
    width: "100%",
  },
});

function Users() {
  const classes = useStyles();
  const usersLoading = useSelector((state) => state.users.usersLoading);
  const usersTotalCount = useSelector((state) => state.users.usersTotalCount);
  const users = useSelector(getUsersSelector);

  return (
    <>
      <Filters />
      <Container maxWidth="md" className={classes.containerMargin}>
        <Grid container spacing={4}>
          {usersLoading ? (
            <div className={classes.progressBar}>
              <LinearProgress />
            </div>
          ) : (
            users.map((item) => {
              return (
                <User
                  key={item.id}
                  name={item.name}
                  lastName={item.lastName}
                  groupId={item.groupId}
                />
              );
            })
          )}
          {users.length !== 0 && usersTotalCount !== users.length && (
            <LoadMore />
          )}
        </Grid>
      </Container>
    </>
  );
}

export default Users;
