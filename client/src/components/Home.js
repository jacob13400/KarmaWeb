import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import './Navigator.css';
import '../App.css'
import { login } from './UserFunctions'

class Home extends Component {
	 
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
		<div className="body">
      		<div className="container" >
        		<div className="jumbotron mt-5 bg-dark">
          			<div className="col-sm-5 mx-auto">
            			<h1 className="text-center bg-dark text-light">Welcome {this.state.first_name} Abhishek</h1>
          			</div>
        		</div>
      		</div>
			  <div className="container" >
        		<div className="jumbotron mt-5 bg-dark">
				<div className="col-sm-12">
            			<h1 className="text-center bg-dark text-light">Today</h1>
						<button type="button" class="btn btn-primary m-4">Physics</button>
						<button type="button" class="btn btn-secondary m-4">Data Structures</button>
						<button type="button" class="btn btn-success m-4">Engineering Mathematics</button>
						<button type="button" class="btn btn-info m-4">Life Skills</button>
          			</div>
        		</div>
      		</div>\<div className="container" >
        		<div className="jumbotron mt-5 bg-dark">
				<div className="col-sm-12">
            			<h1 className="text-center bg-dark text-light">Assignments</h1>
						<button type="button" class="btn btn-primary m-4">Physics</button>
						<button type="button" class="btn btn-secondary m-4">Data Structures</button>
						<button type="button" class="btn btn-success m-4">Engineering Mathematics</button>
						<button type="button" class="btn btn-info m-4">Life Skills</button>
          			</div>
        		</div>
      		</div>
	 	</div>
    )
  }
}

export default Home