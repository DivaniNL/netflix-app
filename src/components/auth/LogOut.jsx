import React from 'react'
import { useAuth } from '../../context/AuthContext'
import {  useHistory } from 'react-router-dom'
import {  Button } from 'react-bootstrap'

export default function LogOut() {
    const { logout }  = useAuth();
    const history = useHistory();

    async function handleLogout() {
        try {
            await logout();
            history.push('/login')
        } catch{
            
        }
    }
    return (
        <Button variant="link" onClick={handleLogout}>LogOut</Button>        
    )
}