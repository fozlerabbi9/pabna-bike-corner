import { useAuthState } from "react-firebase-hooks/auth"
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init"

function Requireauth({ children }) {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    console.log(location)
    if(loading){
        return <p>Loading...</p>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }

    return children
}
export default Requireauth;