import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import UserAddName from "./UserAddName";
import UserAddLastName from "./UserAddLastName";
import UserAddGroup from "./UserAddGroup";
import { popUpShowToggled, userAdded } from "../../redux/ducks/users";

function UserAddDialog() {
  const dispatch = useDispatch();
  const adding = useSelector((state) => state.users.adding);
  const popUpIsShow = useSelector((state) => state.users.popUpIsShow);
  const [category, setCategory] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastname] = useState("");
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeLastName = (e) => {
    setLastname(e.target.value);
  };
  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };
  const closePopUp = () => {
    dispatch(popUpShowToggled());
  };
  const userAdd = () => {
    if (name && lastName) {
      dispatch(userAdded(name, lastName, categoryId));
    }
  };

  return (
    <Dialog maxWidth="xs" open={popUpIsShow} onClose={closePopUp}>
      <DialogTitle>Добавить пользователя</DialogTitle>
      <DialogContent>
        <UserAddName value={name} handleChange={handleChangeName} />
        <UserAddLastName value={lastName} handleChange={handleChangeLastName} />
        <UserAddGroup
          handleChange={handleChangeCategory}
          value={category}
          handleClick={setCategoryId}
        />
      </DialogContent>
      <DialogActions>
        <Button disabled={adding} onClick={userAdd} color="primary">
          Добавить
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default UserAddDialog;
