import React from "react";
import { Route, Redirect, Switch, useHistory } from "react-router-dom";
import { isMobile } from "./utils";
import AppContainer from "./components/AppContainer";
import H5Container from "./components/H5Container";
import { mobile as mobileRouter, pc as pcRouter } from "./routers";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/h5">
        <H5Container>
          {mobileRouter.map(item => (
            <Route key={item.path} path={`/h5${item.path}`} component={item.components} />
          ))}
        </H5Container>
      </Route>
      <Route path="/">
        <AppContainer>
          {pcRouter.map(item => {
            return <Route key={item.path} path={item.path} component={item.components} />;
          })}
          {/* 判断是移动端还是PC进入 */}
          {isMobile() ? <Redirect to="/mobile" /> : <Redirect to="/home" />}
        </AppContainer>
      </Route>
    </Switch>
  );
};

export default App;
