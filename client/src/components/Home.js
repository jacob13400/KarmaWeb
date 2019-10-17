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
        		<div className="jumbotron mt-5 bg-light sizeAdjuster" >
          			<div className="col-sm-5 mx-auto">
            			<h1 className="text-center text-dark">Welcome {this.state.first_name}</h1>
          			</div>
        		</div>
      		</div>
			  <div className="container" >
        		<div className="jumbotron mt-5 bg-light sizeAdjuster">
				<div class="col-sm-12" style={{marginRight: 'auto', marginLeft: 'auto'}}>
            			<h1 className="text-center text-dark">Today's timetable</h1><br></br>
						<div class="row" className="text-center">
						<button type="button" class="btn btn-secondary m-1 col-sm-3">Physics<br></br><br></br>9:00PM to 10:00PM</button>
						<button type="button" class="btn btn-secondary m-1 col-sm-3">Data Structures<br></br><br></br>10:00PM to 11:00PM</button>
						<button type="button" class="btn btn-secondary m-1 col-sm-3">Engineering Mathematics<br></br><br></br>11:00PM to 12:00PM</button>
						</div>
						{/* <button type="button" class="btn btn-primary m-4">Lsmc2 break<br></br><br></br>12:00PM to 1:00PM</button><br></br> */}
						<div class="row" className="text-center">
						<button type="button" class="btn btn-secondary m-1 col-sm-3">Life Skills<br></br><br></br>1:00PM to 2:00PM</button>
						<button type="button" class="btn btn-secondary m-1 col-sm-3">Business Econimics<br></br><br></br>2:00PM to 3:00PM</button>
						<button type="button" class="btn btn-secondary m-1 col-sm-3">Chemistry<br></br><br></br>3:00PM to 4:00PM</button>
						</div>
          			</div>
        		</div>
      		</div>
			  <div className="container" >
        		<div className="jumbotron mt-5 bg-light sizeAdjuster">
				<div className="col-sm-12">
            			<h1 className="text-center text-dark">Assignments</h1>
						<button type="button" class="btn btn-secondary m-3 ">Database Management<br></br><br></br>Due Today</button>
						<button type="button" class="btn btn-secondary m-3">Data Structures<br></br><br></br>Due tomorrow</button>
						<button type="button" class="btn btn-secondary m-3">Engineering Mathematics<br></br><br></br>Due in 2 days</button>
          			</div>
        		</div>
      		</div>
	 	</div>
    )
  }
}

export default Home