import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/footer";
import Navbar from "../NavBar/NavBar";
import "../Signup/Signup.css";

function Login() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the form data to the console
    console.log(formData);
  };
  return (
    <>
      <Navbar />
      <div className="container-fluid signup-container d-flex align-items-center justify-content-center">
        <div className="row w-100">
          <div className="col-12 col-md-2 "></div>
          <div className="col-12 col-md-8 ">
            <h3 className="title1 text-start">Login</h3>
            <p className="login">
              Don't have an account yet ?{" "}
              <Link to="/signup">Create account</Link>
            </p>
            <form onSubmit={handleSubmit} className="form">
              <div className="form-item mb-3">
                <input
                  type="text"
                  id="firstName"
                  className="form-control"
                  autoComplete="off"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <label htmlFor="firstName" className="form-label">
                  Email
                </label>
              </div>
              <div className="form-item mb-3">
                <input
                  type="text"
                  id="lastName"
                  className="form-control"
                  autoComplete="off"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <label htmlFor="lastName" className="form-label">
                  Password
                </label>
              </div>

              <Link className="login-btn" to="#">
                Forgot your password ?
              </Link>

              <button type="submit" className="signup-btn">
                Login
                <div className="arrow-wrapper">
                  <div className="arrow"></div>
                </div>
              </button>
            </form>
          </div>
          <div className="col-12 col-md-2 "></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
