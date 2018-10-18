import React from 'react';
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import App from './App';
import Admin from './Admin';
import Home from './pages/Home';
import Buttons from './pages/ui/Buttons';
import Page404 from './pages/Page404';

export default class BaseRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/" render={() =>
                            <Admin>
                                <Switch>
                                    <Route exact path="/" render={() =>
                                        <Redirect to="/home" />
                                    } />
                                    <Route exact path="/ui" render={() =>
                                        <Redirect to="/ui/buttons" />
                                    } />
                                    <Route path="/ui/buttons" component={Buttons} />
                                    <Route component= {Page404}/>
                                </Switch>
                            </Admin>
                        }>
                        </Route>
                    </Switch>
                </App>
            </HashRouter>
        );
    }
}
