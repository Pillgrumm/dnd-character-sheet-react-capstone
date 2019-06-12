import React from 'react';
//
function SignUpForm() {
    return (
           <section role="region" id="sign-up-form" className="hidden">
                    <div id="absoluteCenteredDiv">
                        <form className="sign-up-form">
                            <div className="authentication-box">
                                <h1>Sign Up</h1>
                                <input className="registerUsername greyText" name="username" type="text" placeholder="User Name" required />
                                <input className="registerPassword greyText" name="password" type="password" placeholder="Password" required />
                                <input className="registerEmail greyText" name="email" type="email" placeholder="Email" required />
                                <button className="button" id="register">
                                    <i className="fas fa-user-circle"></i> Register
                                </button>
                            </div>
                        </form>
                        <div className="loginRegister">
                            <p>Already have an account? <a id="sign-in-link" href="#">Click here.</a></p>
                        </div>
                    </div>
                </section>
    );
}

export default SignUpForm;
