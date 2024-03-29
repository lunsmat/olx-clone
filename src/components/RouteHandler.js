import React from 'react';
import { Route } from 'react-router-dom';
import { isLogged } from '../helpers/AuthHandler';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function components({ component: Component, ...rest }) {
    const logged = isLogged();
    const authorized = rest.private && !logged ? false : true;

    return (
        <Route
            {...rest}
            render={() =>
                authorized ? <Component /> : <Redirect to='/signin' />
            }
        />
    );
}

export default components;
