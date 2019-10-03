import React, { Component } from 'react'
import { register } from './UserFunctions'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      id:'',
      first_name: '',
      middle_name:'',
      last_name: '',
      gender:'',
      nationality:'',
      dob:'',
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

    const newUser = {
      id: this.state.id,
      firstname: this.state.first_name,
      middlename: this.state.middle_name,
      lastname: this.state.last_name,
      gender: this.state.gender,
      nationality: this.state.nationality,
      dob: this.state.dob,
      password: '123456789abc'
    }

    register(newUser).then(res => {
      this.props.history.push(`/login`)
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-group">
                <label htmlFor="name">ID</label>
                <input
                  type="text"
                  className="form-control"
                  name="id"
                  placeholder="Enter your ID"
                  value={this.state.id}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="Enter your first name"
                  value={this.state.first_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Middle name</label>
                <input
                  type="text"
                  className="form-control"
                  name="middle_name"
                  placeholder="Enter your middlename name"
                  value={this.state.middle_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="Enter your lastname name"
                  value={this.state.last_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Gender</label>
                <input
                  type="text"
                  className="form-control"
                  name="gender"
                  placeholder="Enter your gender"
                  value={this.state.gender}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Date of Birth</label>
                <input
                  type="text"
                  className="form-control"
                  name="dob"
                  placeholder="YYYY-MM-DD"
                  value={this.state.dob}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Nationality</label>
                <input
                  type="text"
                  className="form-control"
                  name="nationality"
                  placeholder="Enter your nationality"
                  value={this.state.nationality}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Register