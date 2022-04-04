import React from 'react'

const userContext = {
  image: '',
  name: '',
}
const setUserContext = () => { }
const defaultUserDataContext = { userContext, setUserContext }

const UserDataContext = React.createContext(defaultUserDataContext)

export default UserDataContext;