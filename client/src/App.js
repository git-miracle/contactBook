import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import ContactState from './contaxt/contact/ContactState'
import './App.css'
import AuthState from './contaxt/auth/AuthState'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

function App() {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <>
            <Navbar title='Contact keeper' />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
              </Switch>
            </div>
          </>
        </Router>
      </ContactState>
    </AuthState>
  )
}

export default App
