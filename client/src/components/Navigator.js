import './Navigator.css';
import '../App.css'
import logo from './assets/logo.png'

import jwt_decode from 'jwt-decode'
import React, { Component } from 'react'

import Home from './Home'
import Login from './Login'
import Register from './Register'
import Profile from './Profile'
// import Attendance from './Attendance'
//import Admission from './Admission'
import { Redirect } from 'react-router'
import { attendancegetfaculty } from './UserFunctions'
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';

class Navigator extends React.Component {
    constructor(){
        super();
    }
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
      }

    componentDidMount(){

      // const token = localStorage.usertoken
      // const decoded = jwt_decode(token)
  
      // const user={
      //   id: decoded.userId
      // }
      // attendancegetfaculty(user).then(res => {
      //   if(res){
      //     console.log(res);
      //     const role = (res.some(item => item.people_id == user.id))
      //     this.setState({role: role})
      //   }
      // })

    }

    render(){
        const loginRegLink = (

            <nav>
                <Link to="/login" className="nav-link">
                  Login
                </Link>

                <Link to="/register" className="nav-link">
                  Admission
                </Link>
            </nav>
             
		  )

          const userLink = (
            <nav>
				<img src={logo} alt="Logo" width="200px" height="200px" class="rounded-circle"/>
				<br></br><br></br><br></br>
				<h1 className="roll">TVECS0029</h1>
				<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <Link to="/attendance" className="nav-link">Attendance</Link>
				
                <Link to="/scorecard" className="nav-link">Score Card</Link>
                
                <Link to="/courselist">Courses</Link>
                
                <Link to="/profile" className="nav-link">
                  User
                </Link>
				
                <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                  Logout</a>
            </nav>

          )

        return(
        <div class ="Nav">
        
        <div class="sidenav">
                <nav>
                    <Link to="/">Dashboard</Link>
                 
                    {localStorage.usertoken ? userLink : loginRegLink}

                </nav>
        </div>
{/* 
        <div class ="baseInNav">        
            <Switch>
                <Route path='/' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/profile' component={Profile} />
            </Switch>
        </div> */}
        
        </div>
    
        );
    }
}


export default withRouter(Navigator)