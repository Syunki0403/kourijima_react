import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as History from 'history';
import { Top, About, Map, Beach, Blog, Access, Information } from './components/index';

// historyの作成
const history = History.createBrowserHistory();

const App = () => {
return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path={"/"} component={Top} />
          <Route exact path={"/about"} component={About} />
          <Route exact path={"/map"} component={Map} />
          <Route exact path={"/beach"} component={Beach} />
          <Route exact path={"/blog"} component={Blog} />
          <Route exact path={"/access"} component={Access} />
          <Route exact path={"/information"} component={Information} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
