import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Profile = () => {
    const {user}= useContext(AuthContext);
    console.log(user);
    console.log(user?.photoURL);
    
    return (
        <div className="mt-12 flex flex-col justify-center items-center">
            <img className="w-44 rounded-full " src={user?.photoURL} alt="" />
            <h3 className="text-2xl font-semibold mt-2">{user?.displayName}</h3>
            <h4 className="text-xl font-semibold mt-2">{user?.email}</h4>
            <h4 className="text-xl font-semibold mt-2">Role:</h4>
        </div>
    );
};

export default Profile;