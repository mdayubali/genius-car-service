import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const handleRegister = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name,email,password);

    }
    const nevigateLogin = () =>{
        navigate('/login');
    }
    return (
    <div  className="w-50 my-5 mx-auto">
        <h4 className='text-center text-primary'>Please Register Here</h4>
        <Container>
        <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" name="name" required />
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" required />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
        <p>Already have an Acount? <Link to='/login' className='text-danger text-decoration-none'onClick={nevigateLogin} >Please Login</Link></p>
        </Container>
    </div>
    );
};

export default Register;