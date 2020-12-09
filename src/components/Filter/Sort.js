import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import {
  usersByAlphabet,
  usersByAlphabetReverse,
} from "../../redux/ducks/filter";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function Sort() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [sortByAlphabet, setSortByAlphabet] = useState("");
  const handleClickSortByAlphabet = (e) => {
    setSortByAlphabet(e.target.value);
  };

  const filteredByAlphabet = () => {
    dispatch(usersByAlphabet());
  };

  const filteredByAlphabetReverse = () => {
    dispatch(usersByAlphabetReverse());
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">Сортировать</InputLabel>
      <Select value={sortByAlphabet} onChange={handleClickSortByAlphabet}>
        <MenuItem onClick={filteredByAlphabet} value="От А до Я">
          От А до Я
        </MenuItem>
        <MenuItem onClick={filteredByAlphabetReverse} value="От Я до А">
          От Я до А
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default Sort;
