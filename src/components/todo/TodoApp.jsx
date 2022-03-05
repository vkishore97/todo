import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import withNavigation from './WithNavigation.jsx'
import withParams from './withParams.jsx';
// import AuthenticationService from './AuthenticationService.js';
import AuthenticatedRoute from './AuthenticatedRoute.jsx';
import LoginComponent from './LoginComponent.jsx';
import ListTodosComponent from './ListTodosComponent.jsx';
import ErrorComponent from './ErrorComponent.jsx';
import WelcomeComponent from './WelcomeComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx';
import LogoutComponent from './LogoutComponent.jsx';
import FooterComponent from './FooterComponent.jsx';


class TodoApp extends Component {
    render() {
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
        // const ListTodosComponentWithNavigation = withNavigation(ListTodosComponent) 
        return (
            <div className='TodoApp'>
            <Router>
                <HeaderComponentWithNavigation/>
                <Routes>
                        <Route path="/" exact element={<LoginComponentWithNavigation  />} />
                        <Route path="/login" element={<LoginComponentWithNavigation  />} />
                        <Route path="/welcome/:name/*" element={
                            <AuthenticatedRoute>
                                <WelcomeComponentWithParams />
                            </AuthenticatedRoute>} />
                        <Route path="/todos" element={
                            <AuthenticatedRoute>
                                <ListTodosComponent />
                            </AuthenticatedRoute>} />
                        <Route path="/logout" element={
                            <AuthenticatedRoute>
                                <LogoutComponent />
                            </AuthenticatedRoute>} />
                        <Route path="*" element={<ErrorComponent />}/>
                </Routes>
                <FooterComponent/>
            </Router>
            </div>
        )
    }
}

export default TodoApp