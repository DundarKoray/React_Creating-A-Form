import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'
import SignUpForm from './pages/SignUpForm'
import SignInForm from './pages/SignInForm'

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">

            {/* Page Switcher */}
            <div className="PageSwitcher">
              <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
              <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
            </div>

            {/* Form Title Switcher */}
            <div className="FormTitle">
              <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active "className="FormTitle__Link">Sign Up</NavLink>
            </div>

            <Route exact path="/" component={SignUpForm}>
            
            </Route>

            <Route path="/sign-in" component={SignInForm}>
              
            </Route>

          </div>
        </div>
      </Router>
    )
  }
}

export default App;
