import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { usersByCategories } from "../../redux/ducks/filter";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function Categories() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const categories = useSelector((state) => state.filter.categories);
  const categoriesLoading = useSelector(
    (state) => state.filter.categoriesLoading
  );
  const [category, setCategory] = useState("");
  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel>Категории</InputLabel>
      <Select value={category} onChange={handleChange}>
        {!categoriesLoading &&
          categories.map((item) => (
            <MenuItem
              onClick={() => dispatch(usersByCategories(item.id))}
              key={item.id}
              value={item.name}
            >
              {item.name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}

export default Categories;
