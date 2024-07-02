import { useState } from 'react'
import { BottomWarning } from '../components/BottomWarning'
import { Button } from '../components/Button'
import { Heading } from '../components/Heading'
import { InputBox } from '../components/InputBox'
import { SubHeading } from '../components/SubHeading'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { BACKEND_URI } from '../config'

export const Signup = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSignup = async () => {
        setLoading(true)
        try {
            const response = await axios.post(
                `${BACKEND_URI}/api/v1/user/signup`,
                {
                    username,
                    firstName,
                    lastName,
                    password,
                },
            )
            localStorage.setItem('token', response.data.token)
            navigate('/dashboard')
        } catch (error) {
            alert('Signup failed. Please try again.')
            console.error('Signup error:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black">
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 h-auto bg-white rounded-lg shadow-xl p-8">
                <div className="flex flex-col items-center">
                    <Heading
                        label={'Sign up'}
                        className="mb-4 text-2xl font-bold"
                    />
                    <SubHeading
                        label={'Enter your details to create an account'}
                        className="mb-6 text-gray-600"
                    />
                    <div className="w-full space-y-4">
                        <InputBox
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="John"
                            label={'First Name'}
                            className="w-full"
                        />
                        <InputBox
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Doe"
                            label={'Last Name'}
                            className="w-full"
                        />
                        <InputBox
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="johndoe@gmail.com"
                            label={'Email'}
                            className="w-full"
                        />
                        <InputBox
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="*********"
                            label={'Password'}
                            type="password"
                            className="w-full"
                        />
                        <Button
                            onClick={handleSignup}
                            label={loading ? 'Signing up...' : 'Sign up'}
                            disabled={loading}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg mt-4"
                        />
                    </div>
                    <BottomWarning
                        label={'Already have an account?'}
                        buttonText={'Sign in'}
                        to={'/signin'}
                        className="mt-6"
                    />
                </div>
            </div>
        </div>
    )
}
