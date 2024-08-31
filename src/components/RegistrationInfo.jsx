import React from 'react';

import { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div>
      <form>
        <fieldset>
          <legend>Your Details</legend>
          <label>Please enter your name:
            <input type="text" value={name}
              onChange={e => setName(e.target.value)} />
          </label>
          <br/>
          <label>Enter your email      :
          <input type="text" value={email}
              onChange={e => setEmail(e.target.value)} />
          </label>
        </fieldset>
        <button onClick={e => {
            alert(`Your name is ${name}. Your email is  ${email}`);
            e.preventDefault();
        }}>Submit</button>
      </form>
  </div>
);
}
export default Register;