import { Dollar } from "../assets/Dollar"

export const Balance = ({ value }) => {
    return (
        <div className="flex justify-center items-center text-white w-full">
            <div className="text-center">
                <div className="font-bold text-lg">
                    Your balance
                </div>
                <div className="flex justify-center items-center font-semibold text-lg">
                    <Dollar className="w-6 h-6 mr-2" /> <span>{value}</span>
                </div>
            </div>
        </div>
    );
}


