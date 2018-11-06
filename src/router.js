import React from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import App from './App';
import Admin from './Admin';
import Home from './pages/Home';
import Login from './pages/Login';
import Buttons from './pages/ui/Buttons';
import Modals from './pages/ui/Modals';
import Loadings from './pages/ui/Loadings';
import Notifications from './pages/ui/Notifications';
import Messages from './pages/ui/Messages';
import Tabs from './pages/ui/Tabs';

import FormLogin from './pages/form/login';
import FormRegister from "./pages/form/register";

import Page404 from './pages/Page404';

export default class BaseRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login} />
                        { /* / 路由放到最下面是是了找不到上面那些的时候还能走 / 的逻辑*/ }
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
                                            <Route path="/ui/loadings" component={Loadings} />
                                            <Route path="/ui/notifications" component={Notifications} />
                                            <Route path="/ui/messages" component={Messages} />
                                            <Route path="/ui/tabs" component={Tabs} />
                                            <Route component= {Page404}/>
                                        </Switch>
                                    } />
                                    <Route path="/form" render={() =>
                                        <Switch>
                                            <Route exact path="/form" render={() =>
                                                <Redirect to="/form/login" />
                                            } />
                                            <Route path="/form/login" component={FormLogin} />
                                            <Route path="/form/register" component={FormRegister} />
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
