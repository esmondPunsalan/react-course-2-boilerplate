import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from "history/createBrowserHistory";
import DashboardPage from '../components/dashboard';
import NotFoundPage from '../components/not-found';
import LoginPage from '../components/login';
import PrivateRoute from "./private-route";
import PublicRoute from "./public-route";

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>    
                <PrivateRoute path="/dashboard" component={DashboardPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;