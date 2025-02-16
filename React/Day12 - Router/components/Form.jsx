import React from 'react'
import { Outlet } from 'react-router'

const Form = () => {
  return (
    <>
      <h1>Contact Form</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <br></br>
        <br></br>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <br></br>
        <br></br>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <br></br>
        <br></br>
        <input type="submit" value="Send" />
      </form>
      <Outlet></Outlet>
    </>
  )
}

export default Form