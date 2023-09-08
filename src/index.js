import { createRoot } from 'react-dom/client';
// import {App} from "./App";
import "bootstrap/dist/css/bootstrap.css"
import { Home } from './ui/Home';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<Home tab="home" />);