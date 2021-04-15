import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import { Form, Button, Card, Alert } from 'react-bootstrap'

export default function LogOut() {
    const [error, setError] = useState();
    const {currentUser, logout }  = useAuth();
    const history = useHistory();

    async function handleLogout() {
        setError('')
        try {
            await logout();
            history.push('/login')
        } catch{
            setError('failed to log out')
        }
    }
    return (
        <Button variant="link" onClick={handleLogout}>LogOut</Button>        
    )
}