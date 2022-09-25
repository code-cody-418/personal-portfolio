import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {Home} from "./Home";
import {Provider} from "react-redux";
import { PrivacyPolicy } from "./privacy-policy-terms-of-use/PrivacyPolicy";
import { TermsOfService } from "./privacy-policy-terms-of-use/TermsOfService";


export const App = (store) => (
    <>
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/privacyPolicy' component={PrivacyPolicy} />
                    <Route exact path='/termsOfService' component={TermsOfService} />
                </Switch>
            </BrowserRouter>
        </Provider>
    </>
)
