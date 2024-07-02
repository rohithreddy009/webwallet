export const useAuth = () => {
    const userToken = localStorage.getItem('token')
    return {
        isLoggedIn: !!userToken, // Convert to boolean: true if token exists, false otherwise
    }
}
