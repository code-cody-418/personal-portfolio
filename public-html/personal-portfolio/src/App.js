import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from 'react-router'
import {Home} from "./ui/Home";

export const App = () => (
        <>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                    </Switch>
                </BrowserRouter>
        </>
    )
;
