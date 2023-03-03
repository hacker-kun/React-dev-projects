import React, { useRef, useState } from 'react' 
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css'

const AddUser = (props) =>{

    // const [enteredName,setEnteredName] = useState('')
    // const [enteredAge,setEnteredAge] = useState('')
    const[error,setError] = useState('')

    const nameInputRef = useRef('')
    const ageInputRef = useRef('')

    // const userNameHandler = (event) =>{
    //     setEnteredName(event.target.value)
    // }
    // const userAgeHandler = (event) =>{
    //     setEnteredAge(event.target.value)
    // }

    const errorHandler = () => {
        setError(null)
    }
    

    const addUserHandler = (event) => {
        event.preventDefault()

        const userName = nameInputRef.current.value; 
        const userAge = ageInputRef.current.value; 

    if (userName.trim().length === 0 || userAge.trim().length === 0){
        setError({
           title : 'Invalid Input',
           message : 'Username or age can not be blank'
    })
        return ;
    }
    if( +userAge<1 ){
        setError({
            title : 'Invalid Input',
            message : 'Please write the correct age'
     })
        return ; 
    }
        console.log(userName,userAge)
        
        props.onAddUser(userName,userAge)
        nameInputRef.current.value = ''
        ageInputRef.current.value        = ''
        // setEnteredName('')
        // setEnteredAge('')
    };
    


    return(
        <>

            {error && <ErrorModal title = {error.title} message = {error.message} onConfirm = {errorHandler}/>}
     
        <Card ownClass = {classes.input}> 
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input id='username' type='text' ref={nameInputRef} />
            <label htmlFor='age'>Age (in years)</label>
            <input id='age' type='text' ref={ageInputRef} />
            <Button type='submit'>Add User</Button>
        </form>
        </Card>
        </>
    
    );
}

export default AddUser;
