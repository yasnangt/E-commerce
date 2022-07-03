import './App.css';
import {register} from './firebase';
import { useState } from 'react';
import { async } from '@firebase/util';


function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const user = await register(email, password);
    console.log(user);
  }

  return (
    <div>
       <h1> </h1>
       <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
          <label>Password:</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <button type='submit'>Kayıt Ol</button>
       </form>
    </div>
  );
}

export default App;
