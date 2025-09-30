/***
 * 1. e.target.[name of the input field].value
 * 2. use form action and formData in the action        handler. formData.get('name of the input field')
 * 3. controlled component. one per each field.  useState on change the field . useful to dynamically handle error.
 * 3.5.  handle all controlled field on one state object
 * const [formData, setFormData] = ({
 * name: '',
 * password: '',
 * phone: ''})
 * 4. uncontrolled using useRef 
 * 5. HookForm using useInputField.jsx created hook 
 * 
 * 
*/