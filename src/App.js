import Home from './pages/Home'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Services from './components/navbar/Services'
import AboutUs from './components/navbar/AboutUs'

import '../src/App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />{' '}
        <Route path='/aboutus' exact component={AboutUs} />{' '}
        <Route path='/services' exact component={Services} />{' '}
      </Switch>
    </Router>
  )
}

export default App
