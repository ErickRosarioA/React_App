import React from 'react';
import Exercies from '../pages/ExerciesPage';
import ExerciesNew from '../pages/ExerciesNew';
import NotFound from '../pages/NotFound';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
// array fuction new code in java script
//version vieja fuction nombre de la fuction return codigo html 
const App =(props) =>(
    <BrowserRouter>
    <Switch>
        <Route exact path="/exercise" component={Exercies}/>
        <Route exact path="/exercise/New" component={ExerciesNew}/>
        <Route component={NotFound}/>
    </Switch>
</BrowserRouter>
);
export default App;