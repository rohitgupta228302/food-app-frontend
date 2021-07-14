import React, { useState, useEffect } from "react";
import axios from "axios";

const UserComponent = (user) => {
  return (
    <div>
      <h3>{user.first_name + " " + user.last_name}</h3>
      <h5>email:{user.email}</h5>
      <img src={user.avatar} />
    </div>
  );
};

const ListUsers = (users) => {
  return (
    <div>
      <h1>Users</h1>
      {users.map(UserComponent)}
    </div>
  );
};

const App1 = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const getUsers = () => {
    return axios.get("https://reqres.in/api/users?per_page=20");
  };
  useEffect(() => {
    getUsers().then((result) => {
      console.log(result);
      if (result && result.data) {
        setUsers(result.data.data);
        setLoading(false);
      }
    });
  }, []);

  {
    return loading ? <h1>Loading</h1> : ListUsers(users);
  }
};
const App2 = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [registerRes, setRegisterRes] = useState({});

  const handleEmailOnChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordOnChange = (event) => {
    setPwd(event.target.value);
  };

  const handleOnSubmit = () => {
    axios
      .post("https://reqres.in/api/register", {
        email,
        password: pwd,
      })
      .then((res) => {
        console.log(res);
        res && res.data && setRegisterRes(res.data);
      })
      .catch((err) => {
        console.log(err.response);
        alert(err.response.data.error);
      });
  };

  return (
    <div>
      Email:
      <input type={"text"} onChange={handleEmailOnChange} />
      <br />
      Password: <input type={"password"} onChange={handlePasswordOnChange} />
      <br />
      <input type={"submit"} value={"Register"} onClick={handleOnSubmit} />
      <br />
      <div>
        ID:<h2>{registerRes.id || ""}</h2>
        TOKEN:<h2>{registerRes.token || ""}</h2>
      </div>
    </div>
  );
};
const App3 = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [login, setLogin] = useState({});

  const EmailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const PasswordChangeHandler = (event) => {
    setPwd(event.target.value);
  };
  const SubmitHandler = () => {
    axios
      .post("https://reqres.in/api/login", {
        email,
        password: pwd,
      })
      .then((res) => {
        console.log(res);
        res && res.data && setLogin(res.data);
      })
      .catch((err) => {
        console.log(err.response);
        alert(err.response.data.error);
      });
  };
  return (
    <div>
      Email:
      <input type={"text"} onChange={EmailChangeHandler} />
      <br />
      Password: <input type={"password"} onChange={PasswordChangeHandler} />
      <br />
      <input type={"submit"} value={"Login"} onClick={SubmitHandler} />
      <br />
      <div>
        TOKEN:<h2>{login.token || ""}</h2>
      </div>
    </div>
  );
};

export default App3;
