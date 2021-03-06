import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../context/AuthContext'
import { auth } from '../../firebase'
import { Link, useHistory } from 'react-router-dom'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordconfirmRef = useRef();
    const [error, setError] = useState("");
    const [loading, setLoading ] = useState(false);
    const { signup } = useAuth();
    const history = useHistory()
    
    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordconfirmRef.current.value) {
            return setError("passwords do not match");
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push('/')
            
        } catch {
            setError('failed to create an account')
        }

        setLoading(false)
    }
    return (
        <>
            <br/>
            <br/>
            <br />
            <br/>
            <br/><br/>

            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign up</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>password confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordconfirmRef} required />
                        </Form.Group>
                        <Button disabled={loading} type="Submit">Sign up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div>
                Already have an account? <Link to="/Login"> Log in </Link>
            </div>
        </>
    )
}