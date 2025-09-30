import React, {  useState } from 'react';

const ControlledField = () => {

    const [password ,setPassword] = useState('')
    const [error, setError] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('submitted: ')

        if(password.length < 6 ){
            setError('Password must be 6 characters or longer.')
        }else{
            setError('')
        }
    }
    const handlePasswordOnChange = e => {
        console.log(e.target.value)
        setPassword(e.target.value)
        // const newPassword = e.target.value
        // if(newPassword.length < 6 ){
        //     setError('password must be 6 characters or longer.')
        // }else{
        //     setError('')
        // }
    }
    return (
        <div>
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" id="1"  placeholder='Email' required /><br />
                    <input type="password" onChange={handlePasswordOnChange} defaultValue={password} name="password" id="2" placeholder='Password' required /><br />
                    <input type="submit" value="Submit" />
                </form>
                <p style={{color: 'red'}}><small>{error}</small></p>
        </div>
    );
};

export default ControlledField;