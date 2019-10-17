import axios from 'axios'

// const api_root = process.env.REACT_APP_API_ROOT;
const api_root = "http://localhost:3000/"

console.log("api root: " + api_root)

export const register = user => {
  return axios
    .post(api_root + 'authentication/register', {
      email: user.id,
      password: user.password,
      firstname: user.firstname,
      middlename: user.middlename,
      lastname: user.lastname,
      gender: user.gender,
      nationality: user.nationality,
      password: '123456789abc',
      dob: user.dob
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
    .post(api_root + 'private/people/people/details', {
      id: user.userId
    })
    .then(response => {
      // localStorage.setItem('usertoken', response.token)
      console.log(response.data)
      return response.data.classes
    })
    .catch(err => {
      console.log(err)
    })
}

export const auth = user => {
  return axios
    .post(api_root + 'authentication/login/karma', {
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
  let url = api_root + 'private/student/student_attendance_data'
  url = url + '/' + user.id
  return axios
    .get(url, {
        id : user.id,
    })
    .then(response => {
      console.log(response.data)
      return response.data.classes
    })
    .catch(err => {
      console.log(err)
    })
}

export const attendancefaculty = user => {
  let url = api_root + 'private/student/student_attendance_data'
  url = url + '/' + user.id + '/1'
  return axios
    .get(url, {
        id : user.id,
    })
    .then(response => {
      console.log(response.data)
      return response.data.classes
    })
    .catch(err => {
      console.log(err)
    })
}

export const attendancefacultyname = user => {
  let url = api_root + 'private/people/people/details'
  return axios
    .post(url, {
        id : user.id,
    })
    .then(response => {
      console.log(response.data.classes)
      return response.data.classes
    })
    .catch(err => {
      console.log(err)
    })
}


export const attendancecoursename = user => {
  let url = api_root + 'private/courses/'
  url = url + '/' + user.id
  return axios
    .get(url, {
        id : user.id,
    })
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const attendancegetfaculty = user => {
  return axios
    .get(api_root + 'private/faculty/faculty_academic_enrolment_activity/', {
        id : user.id,
    })
    .then(response => {
      console.log(response.data.classes)
      return response.data.classes
    })
    .catch(err => {
      console.log(err)
    })
}

export const attendanceUpdate = user => {
  let url = api_root + 'private/student/student_attendance_data'
  url = url + '/' + user.id + '/1'
  return axios
    .put(url, {
        value:user.attendance,
        people_id: user.id,
        course_id: 1
    },{
      headers: {
        'Content-Type': 'application/json'
      }
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
    .post(api_root + 'users/role', {
        id: user.id
    })
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const internalScore = user => {
  let url = api_root + 'private/student/student_course_internal_assessment'
  url = url + '/' + user.id 
  return axios
    .get(url , {
        id : user.id,
    })
    .then(response => {
      console.log(response.data.data)
      return response.data.data
    })
    .catch(err => {
      console.log(err)
    })
}