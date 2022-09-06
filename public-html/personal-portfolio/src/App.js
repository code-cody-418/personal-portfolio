import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from 'react-router'
import {Home} from "./ui/Home";
import {Contact} from "./ui/Contact";


export const App = () => (
        <>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/contact-form' component={Contact}/>
                    </Switch>
                </BrowserRouter>
        </>
    )
;
