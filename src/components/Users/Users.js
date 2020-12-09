import React, { useMemo } from "react";
import { Container, Grid, LinearProgress, makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import User from "./User";
import LoadMore from "./LoadMore";
import Filters from "../Filter/Filters";

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
  const users = useSelector((state) => state.users.items);

  const selectedCategoriesId = useSelector(
    (state) => state.filter.selectedCategoriesId
  );
  const isSortedByAlphabet = useSelector(
    (state) => state.filter.isFilteredByAlphabet
  );
  const isSortedByAlphabetReverse = useSelector(
    (state) => state.filter.isFilteredByAlphabetReverse
  );
  const usersLoading = useSelector((state) => state.users.usersLoading);

  const filteredByCategories = useMemo(() => {
    return selectedCategoriesId
      ? users.filter((item) => item.groupId === selectedCategoriesId)
      : users;
  }, [selectedCategoriesId, users]);

  const sortedByAlphabet = useMemo(() => {
    if (isSortedByAlphabet) {
      return [...filteredByCategories].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    } else if (isSortedByAlphabetReverse) {
      return [...filteredByCategories]
        .sort((a, b) => a.name.localeCompare(b.name))
        .reverse();
    }
    return filteredByCategories;
  }, [filteredByCategories, isSortedByAlphabet, isSortedByAlphabetReverse]);

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
            sortedByAlphabet.map((item) => {
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
