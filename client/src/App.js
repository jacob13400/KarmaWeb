import './App.css';
import './components/Navigator.css'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/Home'
import Profile from './components/Profile'
import Login from './components/Login'
import Register from './components/Register'
import Navigator from './components/Navigator'
import Admission from './components/Admission'
import Attendance from './components/Attendance'
import ScoreCard from './components/ScoreCard'
import CourseList from './components/CourseList'
import Dropdown from './components/Dropdown3'

function App() {
  return (
    <Router>
        <Navigator />
        <div className="App">
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/attendance" component={Attendance} />
            <Route exact path="/scorecard" component={ScoreCard} />
            <Route exact path="/courselist" component={CourseList} />
            <Route exact path="/admission" component={Admission} />
          </div>
        </div>
      </Router>
  );
}

export default App;
