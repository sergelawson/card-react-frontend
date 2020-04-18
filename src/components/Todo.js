import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Todo = (props) => {
    const deleteTodo = async () => {
        try {
                const response = await fetch(`http://localhost:4000/api/todos/${props.data._id}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json',
                    },
                    });
                    console.log(await(response.json())); 
                    props.deleteTodo(props.indexKey);
            } catch (error) {
                console.log(error);
            }
      }
    
    return (
        <Fragment>
            { props.data != null ?
                <div key={ props.data.id } className="column is-12">
                    <div className="card">
                        <div className="card-content">
                            <p className="title"> { props.data.title } </p>
                            <p className="subtitle"> { props.data.content } </p>
                        </div>
                        <footer className="card-footer">
                            <p className="card-footer-item">
                            <span>
                                 <Link to={`/edit/${props.data._id}`}>Edit</Link>
                            </span>
                            </p>
                            <p className="card-footer-item">
                            <span>
                                <a onClick={ () => deleteTodo()  }>Delete</a>
                            </span>
                            </p>
                        </footer>
                    </div>                
                </div>
            : null
            }
        </Fragment>
    )                          
}

export default Todo