/*import logo from './logo.svg';
import './App.css';*/
import { Route, Link, BrowserRouter } from 'react-router-dom'
import Home from "./components/Home";
import Tutorial from "./components/Tutorial";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/Tutorial" component={ Tutorial } />
      </div>
    </BrowserRouter>
  );
}

export default App;
