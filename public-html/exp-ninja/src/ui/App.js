import {BrowserRouter} from 'react-router-dom'
import {Route, Switch} from 'react-router'
import {Home} from './pages/home/Home'
import React from 'react'
import {Profile} from "./pages/Profile";
import {Shop} from "./pages/shop/Shop";
import {Credit} from "./pages/credit/Credit";
import {Provider} from "react-redux";


export const App = (store) => (
    <>
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/profile' component={Profile}/>
                    <Route exact path='/shop' component={Shop}/>
                    <Route exact path='/credit' component={Credit}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    </>
)
