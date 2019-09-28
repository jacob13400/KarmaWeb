import React from 'react';
import '../App.css';
import ReactDOM from 'react-dom';
import jwt_decode from 'jwt-decode'


import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import S1 from './Classcomponents/S1';
import S3 from './Classcomponents/S3';
import S5 from './Classcomponents/S5';
import S7 from './Classcomponents/S7';

import {attendance, attendancefaculty} from './UserFunctions'

export default class Dropdown extends React.Component {
constructor(props){
 super(props);

 this.state = {
       displayMenu: false,
       redirectS1:false,
       redirectS3:false,
       redirectS5:false,
       redirectS7:false,
       posts : [],
       name:'LOL',
       val:0,
     };



  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  this.handleChange = this.handleChange.bind(this);
  
  

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }


  handleChange(e) {

    const token = localStorage.usertoken
    const decoded = jwt_decode(token)

    let user={
      id: decoded.id,
    };


    attendancefaculty(user).then(res => {
      if (res) {
        this.setState({
          posts: res
        })

      console.log(res)
      }
    })

    
    this.setState({
      val: e.target.value
    });
  }

  render() {
   
    return (

<Router>
<div  className="dropdown"  >
 


<select id = "semesterSelector" onChange ={this.handleChange} >
<option selected disabled hidden value="0">select a class</option>
   <option value="1"> S1 </option>
   <option value="3" > S3 </option>
   <option value="5" > S5 </option>
   <option value="7"> S7 </option>
</select> 
{this.state.val >0 ?(

  <div className="container">
  <div className="jumbotron mt-5">
    <div className="col-sm-8 mx-auto">
      <h1 className="text-center">Check</h1>
    </div>
    <table className="table col-md-6 mx-auto">
      <tbody>
        <tr>
          <td>Student ID</td>
          <td>Course ID</td>
          <td>Attendance</td>

        </tr>

      </tbody>
           {this.state.posts.map(item => {
            return (
             
              <tbody>
                 {item.student_id>=(180000 + ((this.state.val-1)*10000)) && item.student_id <=(189999+((this.state.val-1)*10000))?(
              <tr>
                <td>{item.student_id}</td>
                

  
                <td>{item.course_id}</td>
                {item.value == null ?(
                  0
                ):(
                  <td>{item.value}</td>
                )}
              </tr>
                ):(<tr></tr>)}
              
              </tbody>
    
            );
            })}

    </table>
  </div>
</div>
): (
          <div className="jumbotron mt-5">
            <div className="col-sm-8 mx-auto">
              <h1 className="text-center">Select a class</h1>
            </div>
            </div>
)}

</div>
</Router>

    );
  }
}


