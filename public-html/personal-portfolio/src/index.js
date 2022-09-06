import ReactDOM from 'react-dom'
import {App} from "./App";
import "bootstrap/dist/css/bootstrap.css"

// Use the store so that we can use it to pass information.
ReactDOM.render(App(), document.querySelector('#root'));
