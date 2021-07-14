import React, { useState } from "react";

const SignUp = () => {
  const [userSignup, setUserSignup] = useState({
    // username: "",
    // email: "",
    // phone: "",
    // password: "",
  });
  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUserSignup({ ...userSignup, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...userSignup, id: new Date().getTime().toString() }; //...spread operator
    console.log(records);
    setRecords([...records, newRecord]);
    console.log(records);
    setUserSignup({ username: "", email: "", phone: "", password: "" });
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">FullName</label>
          <input
            type="text"
            autoComplete="off"
            value={userSignup.username}
            onChange={handleInput}
            name="username"
            id="username"
          />
        </div>

        <div>
          <label htmlFor="email">email</label>
          <input
            type="text"
            autoComplete="off"
            value={userSignup.email}
            onChange={handleInput}
            name="email"
            id="email"
          />
        </div>

        <div>
          <label htmlFor="Phone">Phone</label>
          <input
            type="text"
            autoComplete="off"
            value={userSignup.phone}
            onChange={handleInput}
            name="phone"
            id="Phone"
          />
        </div>

        <div>
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            autoComplete="off"
            value={userSignup.password}
            onChange={handleInput}
            name="password"
            id="Password"
          />
        </div>
        <button type="submit">SignUp</button>
      </form>

      <div>
        {records.map((curElement) => {
          const { id, username, email, phone, password } = curElement;
          return (
            <div className="showDataStyle" key={id}>
              <p>{username}</p>
              <p>{email}</p>
              <p>{phone}</p>
              <p>{password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SignUp;
