import React from 'react';
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import App from './App';
import Admin from './Admin';
import Home from './pages/Home';
import Buttons from './pages/ui/Buttons';
import Modals from './pages/ui/Modals';
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
                                    <Route path="/home" component={Home} />
                                    <Route path="/ui" render={() =>
                                        <Switch>
                                            <Route exact path="/ui" render={() =>
                                                <Redirect to="/ui/buttons" />
                                            } />
                                            <Route path="/ui/buttons" component={Buttons} />
                                            <Route path="/ui/modals" component={Modals} />
                                            <Route component= {Page404}/>
                                        </Switch>
                                    } />
                                    
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
