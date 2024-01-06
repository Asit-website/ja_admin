import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();
    let user = JSON.parse(localStorage.getItem('ja_user'));
    return (
        <>
            <div className="welcome_main">
                <div className="welcome_page">
                    <div className="welcome_sect">
                        <h3>Welcome <span>{user.email}</span> to JA Discovery</h3>
                        <div className="log_btn">
                            <NavLink to="/login"><button>Login</button></NavLink>
                            <button onClick={() => {
                                localStorage.removeItem('ja_user');
                                localStorage.removeItem('ja_token');
                                alert("logout success")
                                navigate('/login');
                            }}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome
