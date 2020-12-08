import Header from "./Header";
import Users from "./Users";
import UserAdd from "./UserAdd";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadApplication } from "../redux/application";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Main from "./Main";

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
