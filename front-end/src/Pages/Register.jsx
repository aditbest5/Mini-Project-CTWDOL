import React from "react";
import { Card, Label, TextInput, Button } from "flowbite-react";
import { useState } from "react";
import { API_URL } from "../constants/api";
import Axios from "axios";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const Register = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    fullname: "",
    username: "",
  });
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    Axios.post(`${API_URL}/auth/register`, {
      email: input.email,
      username: input.username,
      password: input.password,
      isAdmin: false,
      name: input.fullname,
      status: "unverified",
    })
      .then((res) => {
        swal({
          title: "Success",
          text: `${res.data.message}`,
          icon: "success",
        });
        setInput({ email: "", password: "", fullname: "", username: "" });
      })
      .catch((err) => {
        if (err.response) {
          swal({
            text: `${err.response.data.message}`,
            icon: "warning",
          });
        }
      });
  };
  return (
    <>
      <div className="h-screen flex flex-col justify-between m-20">
        <div className="flex flex-row justify-center mb-12">
          <img
            src="https://d1ah56qj523gwb.cloudfront.net/uploads/organizations/logos/1538557444-kcgv11HXelvcOnlyrGcEpfwAf6hbPMhC.png"
            alt="purwadhika"
            className="max-w-xl "
          ></img>
        </div>
        <div className="flex flex-row justify-start mx-24 mb-4">
          <h1 className="font-serif font-extrabold text-xl">
            Register Your Account!
          </h1>
        </div>
        <div className="flex flex-row justify-center">
          <Card className="w-10/12 bg-zinc-300">
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your Email" />
                </div>
                <TextInput
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@gmail.com"
                  value={input.email}
                  required={true}
                  onChange={inputHandler}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="username" value="Your Username" />
                </div>
                <TextInput
                  id="username"
                  onChange={inputHandler}
                  name="username"
                  value={input.username}
                  type="text"
                  required={true}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="fullname" value="Your Fullname" />
                </div>
                <TextInput
                  id="fullname"
                  onChange={inputHandler}
                  name="fullname"
                  type="text"
                  value={input.fullname}
                  required={true}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Your Password" />
                </div>
                <TextInput
                  id="password"
                  onChange={inputHandler}
                  name="password"
                  type="password"
                  value={input.password}
                  required={true}
                />
              </div>
              <div className="flex flex-row justify-between">
                <Button className="w-24" type="submit">
                  Submit
                </Button>
                <Link to="/">
                  <h1 className="text-sky-500	">
                    Already Have Account? Sign in!
                  </h1>
                </Link>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Register;
