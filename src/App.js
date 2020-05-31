import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';




const App = (props) => {
  debugger
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage} dispatch={props.dispatch} />}/>
          <Route path='/profile' render={ () => <Profile store={props.store} />}/> 
          <Route path='/news' render={ () => <News/>}/> 
          <Route path='/music' render={ () => <Music/>}/>
          <Route path='/settings' render={ () => <Settings/>}/>  
          <Route path='/friends' render={ () => <Friends state={props.state.friendsPage}/>}/>  
        </div>
      </div>
    )
  
}
// profilePage={props.state.profilePage} dispatch={props.dispatch}
export default App;
