import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export const ProtectedRoute = ({ children }) => {
    const { isLoggedIn } = useAuth()
    if (!isLoggedIn) {
        // User is not logged in, redirect to /signin
        return <Navigate to="/signin" />
    }
    return children
}
