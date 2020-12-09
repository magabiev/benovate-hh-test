import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Main from "../Main/Main";
import { loadApplication } from "../../redux/ducks/users";
import UserAddDialog from "../UserAddDialog/UserAddDialog";
import Users from "../Users/Users";
import Header from "../Header/Header";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadApplication());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <UserAddDialog />
      <Switch>
        <Route path="/main" component={Main} />
        <Route path="/users" component={Users} />
        <Redirect to="/main" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
