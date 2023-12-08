import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span>Loading....</span>
            </div>
        )
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/signin'}></Navigate>
};

export default Private;