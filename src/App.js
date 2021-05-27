import React, {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
// import "App.css"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import firebase from 'firebase/app'
import 'firebase/auth'
import Home from './Pages/Home'
import Signup from './Pages/SignUp'
import Login from './Pages/LogIn'
import NotFound from './Pages/NotFound'
import {UserContext} from './Context/UserContext'


const App = () => {

  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{user, setUser}} >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </UserContext.Provider>
    </Router>
  )
}

export default App
