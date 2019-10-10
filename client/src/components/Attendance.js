import React from 'react';
import jwt_decode from 'jwt-decode'

import { attendance, attendanceUpdate, role } from './UserFunctions'

import logo from '../logo.svg';
import '../App.css';
import Dropdown from './Dropdown3'
import Navigator from './Navigator'
import { BrowserRouter} from 'react-router-dom';

class Attendance extends React.Component {
  constructor() {
    super()
    this.state = {
        name: 'decoded.class',
        attendance: 'ecoded.attendance_C1',
        id:'',
        class:'',
        role:'',
      tableRows:[],
      errors: {}
      
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const userUpdate = {
      id: this.state.id,
      name:this.state.name,
      attendance: this.state.attendance,
    }

    console.log(userUpdate)

    attendanceUpdate(userUpdate).then(res => {
      if (res) {
       
        console.log(res)
      }
    
    })
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      name: decoded.first_name,
      attendance: decoded.value,
      class: decoded.class,
    })

    const user = {
      id: decoded.userId,
    }


  attendance(user).then(res => {
    if (res) {
      this.setState({
        tableRows: res
      })

      console.log(res)
    }
  })

  role(user).then(res => {
    if (res) {
      this.setState({
        role: res.role
      })

      console.log(res)
    }
  })

  }
    
      render() {
        return (
            <div>
              {this.state.role !== 'F'?(
                    <div>
                    <Dropdown tableRows ={this.state.tableRows}/>
                    <h3>OR</h3>
                    <h3>Update Attendance</h3>
            <form noValidate onSubmit={this.onSubmit}>
                    <div className="form-group">
                <label htmlFor="id">ID</label>
                <input
                  type="id"
                  className="form-control"
                  name="id"
                  placeholder="Enter Id"
                  value={this.state.id}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">New Attendance</label>
                <input
                  type="attendance"
                  className="form-control"
                  name="attendance"
                  placeholder="Enter your lastname name"
                  value={this.state.attendance}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
                onChange={this.onSubmit}
              >
                Update
              </button>
              </form>

                    </div>
            ) :
            (
              <div className="jumbotron mt-5">
              <div className="col-sm-8 mx-auto">
                <h1 className="text-center">Check</h1>
              </div>
              <table className="table col-md-6 mx-auto">
              <tbody>
                <tr>
                  <td>Faculty ID</td>
                  <td>Course ID</td>
                  <td>Attendance</td>
                  <td>Max Attendance</td>

                </tr>
                  {this.state.tableRows.map(item => {
                    return (
                      <tr>
                      
                      <td>{item.faculty_id}</td>
                      <td>{item.course_id}</td>
                      {item.value == null ?(
                        <td>0</td>
                      ):(
                        <td>{item.value}</td>
                      )}


                      <td>{item.max_value}</td>
                    </tr>
                    );
                    })}

              </tbody>
              </table>
            </div>
            
            )}
        

              
              
            </div>
        );
      }
      
}

export default Attendance;