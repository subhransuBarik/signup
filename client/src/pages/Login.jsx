import {useState} from 'react'
import Form from 'react-bootstrap/Form';
import axios from 'axios';

import {Link} from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
   
  // const navigate = useNavigate();
  const handleSubmit =async (e)=>{
    e.preventDefault();
    try{
      const data = await axios.post("http://localhost:3001/user/login",{email,password});
      localStorage.setItem("token",data.data.token);
      window.location = "/";
      console.log(data)

      console.log(data.data.token);
    }catch(error){
      setErr(error.response.data.error);

       console.error(error.response.status);
       if(error.response.status===404) setErr("you need to register first");
    }
  }
  return (
    <div className="container-sm">
    <h3>LOGIN</h3>
    
    <Form onSubmit={handleSubmit} className="container-sm" >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" onChange={e=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>password </Form.Label>
        <Form.Control type="password" placeholder="enter password" onChange={e=>setPassword(e.target.value)} />
      </Form.Group>
      <p className='error'>{err}</p>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="submit"/>
      </Form.Group>
    </Form>
    <Link to="/register" className='link'>Dont have an account?</Link>
    </div>
  )
}

export default Login