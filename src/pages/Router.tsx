import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { DashboardPage } from './Dashboard.page';
import { LoginPage } from './Login.page';
import { RegisterPage } from './Register.page';

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Switch>
    </BrowserRouter>
  );
};
