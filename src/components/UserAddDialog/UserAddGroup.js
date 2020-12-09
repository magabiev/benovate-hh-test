import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useSelector } from "react-redux";

function UserAddGroup({ handleChange, value, handleClick }) {
  const categories = useSelector((state) => state.filter.categories);
  const categoriesLoading = useSelector(
    (state) => state.filter.categoriesLoading
  );
  return (
    <FormControl margin="dense" fullWidth>
      <InputLabel id="demo-simple-select-label">Категории</InputLabel>
      <Select value={value} onChange={handleChange}>
        {!categoriesLoading &&
          categories.map((item) => (
            <MenuItem
              onClick={() => handleClick(item.id)}
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

export default UserAddGroup;
