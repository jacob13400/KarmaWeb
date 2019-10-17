
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
      {this.state.role? null :
    (
      <div className="jumbotron mt-5">
      <div className="col-sm-8 mx-auto">
        <h1 className="text-center">Courses</h1>
      </div>
      <table className="table col-md-6 mx-auto">
      <tbody>
        <tr>

          <td>Course ID</td>
          <td>Syllabus</td>

        </tr>
          {this.state.tableRows.map(item => {
            {/* const facultyName = this.getFaculty(item.faculty_id); */}
            return (
              <tr>
              
              <td>{item.course_id}</td>
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