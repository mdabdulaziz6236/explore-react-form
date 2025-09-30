import React from "react";

const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value)
  };

  return (
    <div>
      <h3>This is SimpleForm.</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="your Name" />
          <br />
          <input type="email" name="email" id="" placeholder="Input your email" /><br />
          <input type="submit" value="Submit" />
        </form>
        <br />
      </div>
    </div>
  );
};

export default SimpleForm;
