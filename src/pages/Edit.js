import React, {Component, Fragment} from 'react';
import Navbar from '../components/Navbar';
import TodoForm from '../components/TodoForm';
import {withRouter} from 'react-router-dom';

class Edit extends Component {
    
    constructor(props){
		super(props);
        this.state = { 
                       data: [],
                       loaded: false
                     }
    }

    componentDidMount(){
        this.getTodo();
    }

    async getTodo(){
        const { id } = this.props.match.params;
        try {
            const response = await (await fetch(`http://localhost:4000/api/todos/${id}`)).json();
            this.setState({data: response, loaded: true});

        } catch (error) {
            console.log(error);
        } 
    }

    render(){
        return(
            <Fragment>
                <Navbar />
                <div className="container">
                    <div className="columns  has-padding-300 has-padding-sm-150">
                        <div className="column is-12">
                        { this.state.loaded ? <TodoForm data={this.state.data} method='PUT' /> : null }
                        </div>
                    </div> 
                </div>
            </Fragment>     
        )
    }
}

export default withRouter(Edit);