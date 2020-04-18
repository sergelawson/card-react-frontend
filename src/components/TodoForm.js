import React, {useEffect} from 'react'
import { useForm } from 'react-hook-form'

const TodoForm = (props) => {
    const { register, handleSubmit, reset, errors } = useForm();

    useEffect(() =>{
        if(props.data !== undefined) {
            reset(props.data);
        }
    }, []);
    const onSubmit = async data => { 
        try {
           const endpoint = () => props.method === 'PUT' && props.data !== undefined ? `http://localhost:4000/api/todos/${props.data._id}`: 'http://localhost:4000/api/todos/'
            console.log(endpoint() + 'dee');
            const response = await fetch(endpoint(), {
                method: props.method,
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(data),
                });
                console.log(await(response.json()));
                if (props.method === 'POST') {
                    reset();
                    props.getData();
                } 
            
        } catch (error) {
            console.log(error);
        }
     }
    return(
        <form className='todo-form' onSubmit={handleSubmit(onSubmit)}>
            <div className='field'>
                <div className="control">
                    <input name="title" ref={register} className="input flat-form" type="text"  placeholder="Title" />
                </div>
            </div>
            <div className='field'>
                <div className="control">
                    <textarea name="content" ref={register} className="textarea flat-form" type="text" placeholder="Content"></textarea>
                </div>
            </div>
            {errors.exampleRequired && <span>This field is required</span>}
            <div className='field'>
                <button className="is-primary button" type="submit">Add Todo</button>
            </div>
        </form>
    )
    
}

export default TodoForm;