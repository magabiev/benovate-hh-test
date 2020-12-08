import React, { useMemo } from "react";
import { Container, Grid, LinearProgress, makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import User from "./User";
import LoadMore from "./LoadMore";
import Filters from "./Filters";

const useStyles = makeStyles({
  containerMargin: {
    marginTop: "50px",
  },
  progressBar: {
    width: "100%",
  },
});

function Users() {
  const classes = useStyles();
  const users = useSelector((state) => state.users);
  const filterCategoriesId = useSelector((state) => state.filterCategoriesId);
  const isFilteredByAlphabet = useSelector(
    (state) => state.isFilteredByAlphabet
  );
  const isFilteredByAlphabetReverse = useSelector(
    (state) => state.isFilteredByAlphabetReverse
  );
  const usersLoading = useSelector((state) => state.usersLoading);
  const filteredByCategories = useMemo(() => {
    return filterCategoriesId
      ? users.filter((item) => item.groupId === filterCategoriesId)
      : users;
  }, [filterCategoriesId, users]);

  const filterByAlphaBet = useMemo(() => {
    return [...filteredByCategories].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }, [filteredByCategories]);
  const filterByAlphaBetReverse = useMemo(() => {
    return [...filterByAlphaBet].reverse();
  }, [filterByAlphaBet]);

  const sortedUsers = isFilteredByAlphabet
    ? filterByAlphaBet
    : filterByAlphaBetReverse;

  const isSortedUsers =
    isFilteredByAlphabet || isFilteredByAlphabetReverse
      ? sortedUsers
      : filteredByCategories;

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
            isSortedUsers.map((item) => {
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
          {users.length !== 0 && <LoadMore />}
        </Grid>
      </Container>
    </>
  );
}

export default Users;
