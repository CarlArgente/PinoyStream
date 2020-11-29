import React,{useEffect} from 'react'
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar';
import {Route, Switch} from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import { auth } from './firebase';
import {useStateValue } from './StateProvider'
import Body from './Body';
import Bodymain from './Bodymain';
function App() {

  const [{}, dispatch] = useStateValue()
  useEffect(() => { 

    auth.onAuthStateChanged(authUser => { 
      console.log('The user >>>>>', authUser)

      if(authUser) { 
        //the user just logged in/ the user just logged out
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  },[])

   
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/signUp' component={Register}/>
        <Route path='/home'>
          <div className="app">
            <Header/>
            <div className="app_main"> 
              <Sidebar/>
              <Bodymain/>
            </div>
          </div>
         
         
        </Route>
        <Route path='/'>
          <Header/>
          <Sidebar/>
        </Route>
       
      </Switch>
    </div>
  );
}

export default App;
