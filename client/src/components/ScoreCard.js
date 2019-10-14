
import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { login, attendancegetfaculty, internalScore } from './UserFunctions'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      middle_name:'',
      last_name: '',
      gender:'',
      nationality:'',
      errors: {},
      tableRows: [],
      role: '',
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

    // attendanceUpdate(userUpdate).then(res => {
    //   if (res) {
       
    //     console.log(res)
    //   }
    
    // })
  }
  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)

    const user={
      id: decoded.userId
    }

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

  attendancegetfaculty(user).then(res => {
    if(res){
      console.log(res);
      const role = (res.some(item => item.people_id == user.id))
      this.setState({role: role})
    }
  })

  internalScore(user).then(res => {
    if(res){
      console.log(res);
      this.setState({tableRows: res})
    }
  })


  }

  render() {
    return (<div>
      {this.state.role?(
            <div>
            <h3>Update Score</h3>
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
        <h1 className="text-center">Score</h1>
      </div>
      <table className="table col-md-6 mx-auto">
      <tbody>
        <tr>

          <td>Exam Name</td>
          <td>Course ID</td>
          <td>Score</td>
          <td>Max Score</td>

        </tr>
          {this.state.tableRows.map(item => {
            {/* const facultyName = this.getFaculty(item.faculty_id); */}
            return (
              <tr>
              
              <td>{item.type}</td>
              <td>{item.course_id}</td>
              {item.marks_obtained == null ?(
                <td>0</td>
              ):(
                <td>{item.marks_obtained}</td>
              )}
              <td>{item.maximum_marks}</td>
            </tr>
            );
            })}

      </tbody>
      </table>
    </div>
    
    )}


      
      
    </div>
    )
  }
}

export default Profile