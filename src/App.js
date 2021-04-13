import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage'
import Nav from './components/Nav/Navigation'
import Referens from './components/Referenser/Referens';
import Serivece from './components/Tjänster/Service'
import About from './components/om-oss/About'
import Footer from './components/Footer/Footer'

function App(props) {
  return (
    <Router>
    <div className="App">
    <Nav />
    <Switch>
    <Route path="/"  render={props=><LandingPage {...props}/>}exact/>
    <Route path="/Referenser"  render={props=><Referens {...props}/>}/>
    <Route path="/Tjänster"  render={props=><Serivece {...props}/>}/>
    <Route path="/Om-oss"  render={props=><About {...props}/>}/>
    </Switch>
    <Footer/>
  </div>
  </Router>
  );
}

export default App;
