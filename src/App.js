import { HashRouter, Switch, Route, useHistory, useLocation } from "react-router-dom";
import './App.less';
import { Button } from 'antd';
import Home from "./pages/home";
import GetItem from "./pages/setting";
import Wares from "./pages/Wares/wares";

function App() {
  return (

    <HashRouter>
      <Switch  >
        <Route exact path="/" component={Home}></Route>
        <Route path='/wares'><Wares></Wares></Route>
        <Route path="/setting" component={GetItem}></Route>
      </ Switch>
    </HashRouter>
  );
}

export default App;
