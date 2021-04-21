import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function PrivateRoute({component: Component, ...rest }) {
    const { currentUser } = useAuth()
    const { loggedinUser } = localStorage.getItem("loggedinUser");
    return (
        <Route
            {...rest}
            render={props => {
                return currentUser === true || loggedinUser === true ? <Component {...props} />  : <Component {...props} />
            }}
        >
        </Route>
    )
}
//<Redirect to="/Login" />