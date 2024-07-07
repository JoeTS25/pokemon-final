import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../auth/UserContext";

function Profile() {
    const { currentUser } = useContext(UserContext);
    console.debug("Profile", "currentUser=", currentUser);

    return (
        <div className="Profile">
            <h1>{currentUser.username}'s Team</h1>
            {currentUser
                ? <h2>Current Team</h2>
                : (
                    <p>
                        <Link to="/">Go back home</Link>
                    </p>
                )}

        </div>
    )
}

export default Profile;