import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import Cookies from 'js-cookie'

const PrivateRoute = ({component: Component, ...rest}) => {
    const isAuthenticated = Cookies.get('token');
    return (
        <Route {...rest} render={props =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: {from: props.location}
                        }}
                    />
                )
            }
        />
    )
};

export default PrivateRoute;