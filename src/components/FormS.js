import React from 'react'
import '../Style/formStyle.css'

const FormS = () => {
  return (
    <div className='form'>
      <form>
        <label>Nombre:</label>
        <input type='text'></input>

        <label>Apellido:</label>
        <input type='text'></input>

        <label>E-mail:</label>
        <input type='email'></input>

        <label>Password:</label>
        <input type='text'></input>

        <textarea rows='6' placeholder='hola que tal' />
        <button className='btn'>submit</button>
      </form>
    </div>
  )
}

export default FormS
