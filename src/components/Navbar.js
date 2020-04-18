import React from 'react';
import { Link } from "react-router-dom";


class Navbar extends React.Component{

	constructor(){
		super()
		this.state = {
			menuIsActive: '',
		}

	}

	toggleMenu = () =>{
	if(this.state.menuIsActive === ''){
		 this.setState({menuIsActive: ' is-active' }) 
		} 

	else if(this.state.menuIsActive === ' is-active'){
	     this.setState({menuIsActive: '' }) 
	}
	}
	render(){
		return(
    <nav className="navbar has-shadow is-spaced" role="navigation" aria-label="main navigation">
		<div className='container'>
			      <div className="navbar-brand">
        <Link to='/' className="navbar-item">
          <strong>TodoApp</strong>
        </Link>

        <a role="button" onClick={ this.toggleMenu.bind(this) } className={ 'navbar-burger burger' + this.state.menuIsActive } aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" onClick={ this.toggleMenu.bind(this) } className={'navbar-menu' +  this.state.menuIsActive }>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link className="button is-light" to="/login">
                Log in
              </Link>
              <Link className="button is-primary" to="/signup">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>			
		</div>
    </nav>
			)
	}
}

export default Navbar