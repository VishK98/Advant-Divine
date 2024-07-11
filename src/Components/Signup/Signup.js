import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/footer";
import Navbar from "../NavBar/NavBar";
import "./Signup.css";

function Signup() {
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
            <h3 className="title1 text-start">Create Account</h3>
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
                  First Name
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
                  Last Name
                </label>
              </div>
              <div className="form-item mb-3">
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  autoComplete="off"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="email" className="form-label">
                  Email
                </label>
              </div>
              <div className="form-item mb-3">
                <input
                  type="tel"
                  id="phone"
                  className="form-control"
                  autoComplete="off"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
              </div>
              <div className="form-item mb-3">
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  autoComplete="off"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
                <label htmlFor="password" className="form-label">
                  Password
                </label>
              </div>
              <button type="submit" className="signup-btn">
                Sign up
                <div className="arrow-wrapper">
                  <div className="arrow"></div>
                </div>
              </button>
              <p className="signin">
                Already have an account ? <Link to="/login">Sign in</Link>
              </p>
            </form>
          </div>
          <div className="col-12 col-md-2 "></div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Signup;
