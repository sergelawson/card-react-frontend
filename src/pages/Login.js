import React from 'react';
import { Link } from "react-router-dom";
const Login = () => {

    return (
        <section className="hero is-success is-fullheight">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="column is-4 is-offset-4">
                        <h3 className="title has-text-black">Login</h3>
                        <hr className="login-hr" />
                        <p className="subtitle has-text-black">Please login to proceed.</p>
                        <div className="box">
                            <form>
                                <div className="field">
                                    <div className="control">
                                        <input className="input is-large" type="email" placeholder="Your Email" />
                                    </div>
                                </div>

                                <div className="field">
                                    <div className="control">
                                        <input className="input is-large" type="password" placeholder="Your Password" />
                                    </div>
                                </div>

                                <button className="button is-block is-primary is-large is-fullwidth">Login <i className="fa fa-sign-in" aria-hidden="true"></i></button>
                            </form>
                        </div>
                        <p className="has-text-grey">
                            <Link to="/signup">Sign Up</Link> &nbsp;·&nbsp;
                            <Link to="/">Forgot Password</Link> &nbsp;·&nbsp;
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login