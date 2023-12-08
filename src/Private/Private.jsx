import { ImSpinner6 } from "react-icons/im";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <ImSpinner6 size={50}/>
            </div>
        )
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/signin'}></Navigate>
};

export default Private;