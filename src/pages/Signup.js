import React, {Component, Fragment} from 'react'
import { Link } from 'react-router-dom'

class Signup extends Component{
    constructor(props){
        super(props);
        this.changeData = this.changeData.bind(this)
        this.state = {name: 'serge'}
    }
     changeData = (event) =>{
        this.setState({name: event.target.value})
    }
    render(){
        return (
            <Fragment>
                <section className="hero is-success is-fullheight">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <div className="column is-4 is-offset-4">
                                <h3 className="title has-text-black">Signup</h3>
                                <hr className="login-hr" />
                                <p className="subtitle has-text-black">Create an account now.</p>
                                <div className="box">
                                    { this.state.name }
                                    <form>
                                    <div className="field">
                                            <div className="control">
                                                <input className="input is-large" onChange={this.changeData} value={this.state.name} type="text" placeholder="Your Username" />
                                            </div>
                                        </div>
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
        
                                        <button className="button is-block is-primary is-large is-fullwidth">Sign up</button>
                                    </form>
                                </div>
                                <p className="has-text-grey">
                                    <Link to="/login">Log In</Link> &nbsp;·&nbsp;
                                    <Link to="/">Forgot Password</Link> &nbsp;·&nbsp;
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default Signup