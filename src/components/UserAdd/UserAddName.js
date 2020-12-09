import React from "react";
import { TextField } from "@material-ui/core";

function UserAddName({ value, handleChange }) {
  return (
    <TextField
      margin="dense"
      value={value}
      onChange={handleChange}
      id="name"
      label="Введите имя"
      type="text"
      fullWidth
    />
  );
}

export default UserAddName;
