import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const intialvalue = {name:"",email:"",gender:"",phoneNumber:"",password:"",submit:""};
  const[formvalue,setformvalue] = useState(intialvalue);
  const [show, setShow]  = useState(false);

  const handle = (e) =>{
    setformvalue({...formvalue,[e.target.id]: e.target.value});
    
    const print = (e) => {
      setShow(true);
  }
}
  return (
    <div id="main">
      <form>
        <label>Name</label>
         <input type="text" data-testid ='name' value={formvalue.name} onChange={handle}/>
         <label>Email address</label>
         <input type="email" data-testid = 'email' value={formvalue.email} onChange={handle}/>
         <label>Gender</label>
         <select  data-testid = 'gender' value={formvalue.gender} onChange={handle}>
         <option>Male</option>
         <option>Female</option>
          </select>
          <label>Phone Number</label>
         <input  data-testid = 'phoneNumber' value={formvalue.phoneNumber} onChange={handle}/>
         <label>Password</label>
         <input  data-testid = 'password' type='password' value={formvalue.password} onChange={handle}/>
         <label>Submit</label>
         <input type='submit' data-testid = 'submit' value={formvalue.submit} onClick={print}/>
         
      </form>
    </div>
  )
}


export default App;
