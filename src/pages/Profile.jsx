import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Profile = () => {
    const {user}= useContext(AuthContext);
    console.log(user?.email);
    
    return (
        <div>
            
        </div>
    );
};

export default Profile;