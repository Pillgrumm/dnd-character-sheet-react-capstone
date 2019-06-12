import React from 'react';
//
function LoginFormSection() {
    return (
            <section role="region" id="login-form-section">
                    <div id="absoluteCenteredDiv">
                        <form className="login-form">
                            <div className="authentication-box">
                                <h1 className="title">Login</h1>
                                <input className="loginUsername greyText" name="username" type="text" placeholder="User Name"  required />
                                <input className="loginPassword greyText" name="password" type="password" placeholder="Password"  required />
                                <p>Username: test</p>
                                <p>Password: 123</p>
                                <button className="button" id="login">
                                    <i className="fas fa-lock-open"></i> Login
                                </button>
                            </div>
                        </form>
                        <div className="loginRegister">
                            <p>Don't have an account? <a id="sign-up-link" href="#">Register here.</a></p>
                        </div>
                    </div>
                </section>
    );
}

export default LoginFormSection;
