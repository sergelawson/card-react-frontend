import React, {Component, Fragment} from 'react'
import Navbar from '../components/Navbar'
import Todo from '../components/Todo'
import TodoForm from '../components/TodoForm'

class Main extends Component {
    constructor(props){
		super(props)
        this.state = { data: [],
                       loaded: false
                     }
        this.removeTodo = this.removeTodo.bind(this);
        this.getTodos = this.getTodos.bind(this);
    }
    componentDidMount(){
        this.getTodos();
    }
    async getTodos(){
        try {
            const response = await (await fetch('http://localhost:4000/api/todos')).json();
            this.setState({data: response, loaded: true});

        } catch (error) {
            console.log(error);
        } 
    }

    removeTodo(index){
        const todo = [...this.state.data];
        todo.splice(parseInt(index));
        this.setState({data: todo});
        console.log(this.state)
    }

    render(){
        return(
            <Fragment>
                <Navbar />
                <div className="container">
                    <div className="columns  has-padding-300 has-padding-sm-150">
                        <div className="column is-12">
                        <TodoForm getData={ this.getTodos } method='POST'/>
                        </div>
                    </div>
                    <div className="columns is-multiline is-mobile has-padding-300 has-padding-sm-150">
                    { this.state.loaded ?
                         this.state.data.map((data,index) => 
                            <Todo key={data._id} indexKey={index} deleteTodo={this.removeTodo} data={data} />
                         )
                         : <p>Not loaded!</p>
                    }
                    </div>   
                </div>
            </Fragment>
            
        )
    }
}

export default Main;