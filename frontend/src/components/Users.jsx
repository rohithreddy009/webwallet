import { useEffect, useState } from "react"
import { Button } from "./Button"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios.get("https://wallet-archived-backend.vercel.app/api/v1/user/bulk?filter=" + filter)
            .then(response => {
                setUsers(response.data.user)
            })
    }, [filter])

    return <>
        <div className="font-bold mt-6 text-lg text-white">
            Web2Wallet Users
        </div>
        <div className="my-2">
            <input onChange={(e) => {
                setFilter(e.target.value)
            }} type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200 text-black bg-white"></input>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Adjust columns as needed */}
            {users.map(user => <UserCard user={user} key={user._id} />)}
        </div>
    </>
}

function UserCard({user}) {
    const navigate = useNavigate();

    return (
        <div className="bg-white text-black rounded-lg p-4 shadow-lg">
            <div className="flex items-center space-x-4">
                <div className="rounded-full h-12 w-12 bg-purple-500 flex items-center justify-center text-xl text-white font-bold">
                    {user.firstName[0]}
                </div>
                <div className="flex flex-col">
                    <span className="font-bold">{user.firstName} {user.lastName}</span>
                    <Button onClick={() => {
                        navigate("/send?id=" + user._id + "&name=" + user.firstName);
                    }} label={"Send Money"} className="mt-2"/>
                </div>
            </div>
        </div>
    );
}
