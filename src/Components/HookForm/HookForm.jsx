import React from "react";
import useInputField from "../hooks/useInputField";

const HookForm = () => {
  const [name, nameOnChange] = useInputField("");
  const [email, emailOnChange] = useInputField("");
  const [password, passwordOnChange] = useInputField("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("from input submit: ", name, email, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          defaultValue={name}
          placeholder="Name"
          onChange={nameOnChange}
          type="text"
          name="name"
          id="1"
        />
        <br />
        <input
          defaultValue={email}
          onChange={emailOnChange}
          type="email"
          name="email"
          placeholder="Email"
          id="2"
        />
        <br />
        <input
          type="password"
          name="password"
          id="3"
          placeholder="Password"
          defaultValue={password}
          onChange={passwordOnChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <br />
    </div>
  );
};

export default HookForm;
