import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import ContactState from './contaxt/contact/ContactState';
import './App.css';
function App() {
  return (
    <ContactState>
      <Router>
        <>
          <Navbar title='Contact keeper' />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </>
      </Router>
    </ContactState>
  );
}

export default App;
