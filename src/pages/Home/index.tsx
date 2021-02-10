import React, { useState, useRef } from 'react'
import { Redirect } from 'react-router-dom'


const HomePage = () => {
  const [correctUsername] = useState('batata')
  const [correctPassword] = useState('batata')
  const [logged, setlogged] = useState(false)

  let inputUsernameRef = useRef<HTMLInputElement>(null)
  let inputPasswordRef = useRef<HTMLInputElement>(null)

  const checkLoginCredential = () => {
    const username = inputUsernameRef.current?.value
    const password = inputPasswordRef.current?.value

    correctUsername === username && correctPassword === password ? setlogged(true)
    : alert('You do not have access')
  }

  return (
    <>
      {
      logged ? <Redirect to="/private" />
      :
      <>
        <label>Username: </label><input type="text" ref={inputUsernameRef} placeholder="type your username.."/> <br />
        <label>Password: </label><input type="password" ref={inputPasswordRef} placeholder="type your password.."/><br />
        <br />
        <button onClick={checkLoginCredential}>Login</button>
      </>
      }
    </>
  )
}

export default HomePage