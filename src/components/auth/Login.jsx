import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../context/AuthContext'
import { auth } from '../../firebase'
import { Link, useHistory } from 'react-router-dom'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState("");
    const [loading, setLoading ] = useState(false);
    const { login } = useAuth();
    const history = useHistory();
    
    async function handleSubmit(e) {
        e.preventDefault()


        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value);
            history.push('/')
        } catch {
            setError('failed to sign in')
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
                    <h2 className="text-center mb-4">Log in</h2>
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
                        <Button disabled={loading} type="Submit">Log in</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div>
                need an account? <Link to="/signup"> Sign up </Link>
            </div>
        </>
    )
}