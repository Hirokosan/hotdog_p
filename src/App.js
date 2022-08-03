import { HashRouter, Switch, Route, useHistory, useLocation } from "react-router-dom";
import './App.less';
import { Button } from 'antd';
import Home from "./pages/home";
import GetItem from "./pages/setting";
import Wares from "./pages/Wares/wares";
import Detail from "./pages/detail/detail";
import Paysuccess from "./pages/paysuccess/paysuccess";
import History from "./pages/history/history";
import Historydetail from "./pages/history/historyditail/historyditail";
import Nearby from "./pages/nearby/nearby";

function App() {
  return (

    <HashRouter>
      <Switch  >
        <Route exact path="/" component={Home}></Route>
        <Route path='/wares'><Wares></Wares></Route>
        <Route path='/detail' component={Detail}></Route>
        <Route path='/paysuccess'><Paysuccess></Paysuccess></Route>
        <Route path='/history'><History></History></Route>
        <Route path='/history1'><Historydetail></Historydetail></Route>
        <Route path='/nearby'><Nearby></Nearby></Route>
        <Route path="/setting" component={GetItem}></Route>
      </ Switch>
    </HashRouter>
  );
}

export default App;
