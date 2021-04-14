import React, { useRef } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
// import { useAuth } from '../context/AuthContext'
import { useAuth } from '../../context/AuthContext'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordconfirmRef = useRef()
    // const { signup } = useAuth()
    console.log(useAuth)
    function handleSubmit(e) {
        e.preventDefault()

        // signup(emailRef.current.value, passwordRef.current.value)
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
                    <Form>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>password</Form.Label>
                            <Form.Control type="email" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>password confirmation</Form.Label>
                            <Form.Control type="email" ref={passwordconfirmRef} required />
                        </Form.Group>
                        <Button type="Submit">Sign up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div>
                Already have an account? Log In
            </div>
        </>
    )
}