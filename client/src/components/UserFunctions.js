import axios from 'axios'

export const register = user => {
  return axios
    .post('authentication/login', {
      email: user.id,
      password: user.password,
      firstname: user.firstname,
      middlename: user.middlename,
      lastname: user.lastname,
      gender: user.gender,
      nationality: user.nationality,
      password: '123456789abc',
    },{
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  return axios
    .post('users/login', {
      id: user.id,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.token)
      return response.token
    })
    .catch(err => {
      console.log(err)
    })
}

export const auth = user => {
  return axios
    .post('authentication/login/karma', {
      email: user.id,
      password: user.password,
    },{
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      localStorage.setItem('usertoken', response.data.token)
      console.log(response)
      return response.data.token
    })
    .catch(err => {
      console.log(err)
    })
}


export const attendance = user => {
  return axios
    .post('users/attendancestudent', {
        id : user.id,
    })
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const attendancefaculty = user => {
  return axios
    .post('users/attendancefaculty', {
        id : user.id,
    })
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}



export const attendancegetfaculty = user => {
  return axios
    .post('users/attendancegetfaculty', {
        id : user.id,
    })
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const attendanceinput = user => {
  return axios
    .put('users/attendanceinput', {
        name : user.name,
        value:user.attendance,
        id: user.id
    })
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const role = user => {
  return axios
    .post('users/role', {
        id: user.id
    })
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

