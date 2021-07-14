import React, { useState } from "react";

const Login = () => {
  const [userLogin, setuserLogin] = useState({
    // email: "",
    // password: "",
  });
  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setuserLogin({ ...userLogin, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...userLogin, id: new Date().getTime().toString() }; //...spread operator
    console.log(records);
    setRecords([...records, newRecord]);
    console.log(records);
    setuserLogin({ username: "", email: "", phone: "", password: "" });
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="text"
            autoComplete="off"
            value={userLogin.email}
            onChange={handleInput}
            name="email"
            id="email"
          />
        </div>

        <div>
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            autoComplete="off"
            value={userLogin.password}
            onChange={handleInput}
            name="password"
            id="Password"
          />
        </div>

        <button type="submit">Login</button>
      </form>
      <div>
        {records.map((curElement) => {
          const { id, email, password } = curElement;
          return (
            <div className="showDataStyle" key={id}>
              <p>{email}</p>
              <p>{password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Login;
