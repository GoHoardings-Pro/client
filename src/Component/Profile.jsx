import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  // getting data from server
  const getDATA = async () => {
    const { data } = await axios.get("http://localhost:8080/users/profile");
    window.localStorage.setItem("data", JSON.stringify(data[0]));
    setUser(...data);
  };
  console.log(user);
console.log(user);
  useEffect(() => {
    getDATA();
  }, []);
  //   changing value of inputs
  const changehandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const navi = () => {
    navigate("./media");
  };

  // update A user
  async function updateuser(e, id) {
    e.preventDefault();
    const { data } = await axios.post(
      "http://localhost:8080/users/updateProfile",
      {
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        phonenumber: user.phonenumber,
      }
    );
    setUser(data);
  }

  return (
    <div>
      {/* Edit profile Model */}
      <div className="container">
        <div className="row">
          {/* {user.map((user) => ( */}
            <>
          <h1>Good Afternoon {user.firstname}</h1>
          <div className="col-4">
            {/* by form we try to get old values nad update them */}
            <form onSubmit={updateuser}>
              <div className="field m-2 p-2">
                <img src={user.profile_image} />
                <div>
                  <label>First Name</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="firstname"
                    name="firstname"
                    value={user.firstname}
                    onChange={changehandler}
                    required
                  />
                </div>
                <div className="field m-2 p-2">
                  <label>Last Name</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="lastname"
                    name="lastname"
                    value={user.lastname || ""}
                    onChange={changehandler}
                    required
                  />
                </div>
                <div className="field m-2 p-2">
                  <label>Email</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="email"
                    name="email"
                    value={user.email || ""}
                    onChange={changehandler}
                    required
                  />
                </div>
                <div className="field m-2 p-2">
                  <label>PhoenNumber</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="phonenumber"
                    name="phonenumber"
                    value={user.phonenumber || ""}
                    onChange={changehandler}
                    required
                  />
                </div>
                <input type="submit" value="Update"></input>
              </div>
            </form>
          </div>
          </>
              {/* ))} */}
        </div>

        <button onClick={navi}>Media Plan</button>
      </div>
    </div>
  );
};

export default Profile;
