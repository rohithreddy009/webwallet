// components/PublicOnlyRoute.js
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export const PublicOnlyRoute = ({ children }) => {
    const { isLoggedIn } = useAuth()
    if (isLoggedIn) {
        // User is logged in, redirect to /dashboard
        return <Navigate to="/dashboard" />
    }
    return children
}
