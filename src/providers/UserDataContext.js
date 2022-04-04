import React from 'react'

let loginData = JSON.parse(localStorage.getItem('login'));

const userContext = {
  image: '',
  name: '',
}
const setUserContext = () => { }
const defaultUserDataContext = { userContext, setUserContext }

const UserDataContext = React.createContext(loginData)

export default UserDataContext;