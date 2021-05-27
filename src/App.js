import React, {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import firebase from 'firebase/app'
import 'firebase/auth'
import Home from './Pages/Home'
import Signup from './Pages/SignUp'
import Login from './Pages/LogIn'
import NotFound from './Pages/NotFound'
import Footer from './Layout/Footer'
import NavbarTop from './Layout/NavbarTop'
import {UserContext} from './Context/UserContext'
import FireBaseConfig from './Config/FirebaseConfig'

firebase.initializeApp(FireBaseConfig)

const App = () => {

  const [user, setUser] = useState(null);
  console.log(user);
  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{user, setUser}} >
      <NavbarTop />
        <Switch>
          <Route exact path="/github-finder" component={Home} />
          <Route exact path="/github-finder/login" component={Login} />
          <Route exact path="/github-finder/signup" component={Signup} />
          <Route exact path="*" component={NotFound} />
        </Switch>
        <Footer/>
      </UserContext.Provider>
    </Router>
  )
}

export default App
