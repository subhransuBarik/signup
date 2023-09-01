import { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import {Link, useNavigate } from "react-router-dom";
import Login from "./Login";

const Register = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body =  {
        name,
        dob,
        email,
        password,
      } 
      const data = await axios.post("http://localhost:3001/user/signup",body);
      console.log(data);
      console.log("hello")
      navigate("/login");
    } catch (error) {

        console.log(error);
    }
  };
  return (
    <div>
      <h3>REGISTER</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Enter your name</Form.Label>
          <Form.Control
            type="text"
            placeholder="subhrasnu barik"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>EnterDOB</Form.Label>
          <Form.Control type="date" onChange={(e) => setDob(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>password </Form.Label>
          <Form.Control
            type="password"
            placeholder="enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="submit" />
        </Form.Group>
      </Form>
      <Link to="/Login" className='link'>already registered ?</Link>
    </div>
  );
};

export default Register;
