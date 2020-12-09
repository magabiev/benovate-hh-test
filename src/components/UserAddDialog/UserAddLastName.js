import React from "react";
import { TextField } from "@material-ui/core";

function UserAddLastName({ value, handleChange }) {
  return (
    <TextField
      margin="dense"
      value={value}
      onChange={handleChange}
      id="lastName"
      label="Введите Фамилию"
      type="text"
      fullWidth
    />
  );
}

export default UserAddLastName;
