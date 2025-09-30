import React, {  useState } from 'react';

const ControlledField = () => {
    const [name , setName] = useState('MD. ABDUL AZIZ');
    const [email , setEmail] = useState('mdabdulaziz6236@gamil.com')
    const [password ,setPassword] = useState('12012010')
    const [error, setError] = useState('')
    const handleNameChange = e => {
        setName(e.target.value)
    }
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    
    const handlePasswordOnChange = e => {
        // console.log(e.target.value)
        setPassword(e.target.value)
        // const newPassword = e.target.value
        // if(newPassword.length < 6 ){
        //     setError('password must be 6 characters or longer.')
        // }else{
        //     setError('')
        // }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log( name, email, password)

        if(password.length < 6 ){
            setError('Password must be 6 characters or longer.')
        }else{
            setError('')
        }
    }
    return (
        <div>
                <form onSubmit={handleSubmit}>
                    <input defaultValue={name} type="text" name="name" placeholder='name' onChange={handleNameChange} id="" /><br />
                    <input type="email" defaultValue={email} onChange={handleEmailChange} name="email" id="1"  placeholder='Email' required /><br />
                    <input type="password" onChange={handlePasswordOnChange} defaultValue={password} name="password" id="2" placeholder='Password' required /><br />
                    <input type="submit" value="Submit" />
                </form>
                <p style={{color: 'red'}}><small>{error}</small></p>
        </div>
    );
};

export default ControlledField;