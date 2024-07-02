import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { BACKEND_URI } from '../config'

export const Users = () => {
    const [users, setUsers] = useState([])
    const [filter, setFilter] = useState('')

    useEffect(() => {
        axios
            .get(`${BACKEND_URI}/api/v1/user/bulk?filter=${filter}`)
            .then((response) => {
                setUsers(response.data.user) 
            })
    }, [filter])

    return (
        <>
            <div className="font-bold mt-6 text-lg text-white">
                Web2Wallet Users
            </div>
            <div className="my-2">
                <input
                    onChange={(e) => setFilter(e.target.value)}
                    type="text"
                    placeholder="Search users..."
                    className="w-full px-2 py-1 border rounded border-slate-200 text-black bg-white"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {users.map((user) => (
                    <UserCard user={user} key={user._id} />
                ))}
            </div>
        </>
    )
}

function UserCard({ user }) {
    const navigate = useNavigate()

    return (
        <div className="bg-white text-black rounded-lg p-4 shadow-lg flex items-center justify-between">
            <div className="flex items-center space-x-4 flex-grow">
                <div className="rounded-full h-12 w-12 bg-purple-500 flex items-center justify-center text-xl text-white font-bold">
                    {user.firstName[0]}
                </div>
                <div className="flex flex-col">
                    <span className="font-bold">
                        {user.firstName} {user.lastName}
                    </span>
                </div>
            </div>
            <div className="flex-shrink-0 ml-4">
                {' '}
                {/* Added margin-left for spacing */}
                <button
                    onClick={() =>
                        navigate(`/send?id=${user._id}&name=${user.firstName}`)
                    }
                    className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    style={{
                        background:
                            'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(67,67,67,1) 100%)',
                        whiteSpace: 'nowrap',
                        maxWidth: '150px', // Set a max-width to control button size
                    }}
                >
                    Send Money
                </button>
            </div>
        </div>
    )
}
