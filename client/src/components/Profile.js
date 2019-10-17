
import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { login } from './UserFunctions'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      middle_name:'',
      last_name: '',
      gender:'',
      nationality:'',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)

    login(decoded).then(res => {
      console.log(res);

    this.setState({
      first_name: res.first_name,
      middle_name: res.middle_name,
      last_name: res.last_name,
      gender: res.gender,
      nationality: res.nationality,
    })
    })
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Profile</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>First Name</td>
                <td>{this.state.first_name}</td>
              </tr>

              {this.state.middle_name ?
              <tr>
                <td>Middle Name</td>
                <td>{this.state.middle_name}</td>
              </tr>: null}

              <tr> 
                <td>Last Name</td>
                <td>{this.state.last_name}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{this.state.gender}</td>
              </tr>
              <tr>
                <td>Nationality</td>
                <td>{this.state.nationality}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Profile