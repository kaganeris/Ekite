import React from 'react';

import LoginHeader from '../../Components/LoginHeader'
import LoginForm from '../../Components/LoginForm'


const LoginPage = () => {
    return (
        <div className="bg-default" style={{ minHeight:"100vh" }}>

            <LoginHeader />
            <LoginForm />


        </div>
    )
}

export default LoginPage