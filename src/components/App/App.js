import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Main from "../Main/Main";
import { loadApplication } from "../../redux/ducks/users";
import UserAdd from "../UserAdd/UserAdd";
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
      <UserAdd />
      <Switch>
        <Route path="/main" component={Main} />
        <Route path="/users" component={Users} />
        <Redirect to="/main" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
