import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ListPage, 
        NotFoundPage,
        AuthPage } from 'pages';
const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={ListPage}/>
                <Route path="/login" component={AuthPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    );
};

export default App;