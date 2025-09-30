import React, { useState } from 'react';

const ControlledField = () => {

    const [password ,setPassword] = useState('Secret')
    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('submitted: ')
    }
    const handlePasswordOnChange = e => {
        console.log(e.target.value)
    }
    return (
        <div>
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" id="1"  placeholder='Email' required /><br />
                    <input type="password" onChange={handlePasswordOnChange} defaultValue={password} name="password" id="2" placeholder='Password' required /><br />
                    <input type="submit" value="Submit" />
                </form>
        </div>
    );
};

export default ControlledField;