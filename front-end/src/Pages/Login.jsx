import { Card, Label, TextInput, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import swal from "sweetalert";
import Axios from "axios";
import { API_URL } from "../constants/api";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
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
    Axios.post(`${API_URL}/auth/login`, {
      email: input.email,
      password: input.password,
    })
      .then((res) => {
        let { token, message } = res.data;
        localStorage.setItem("token", token);
        swal({
          title: "Success",
          text: `${message}`,
          icon: "success",
        });
        setInput({ email: "", password: "", fullname: "", username: "" });
        navigate("/home");
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
      <div className='h-screen flex flex-col justify-between m-20'>
        <div className='flex flex-row justify-center w-9/12 ml-10 mb-12 lg:ml-28'>
          <img
            src='https://d1ah56qj523gwb.cloudfront.net/uploads/organizations/logos/1538557444-kcgv11HXelvcOnlyrGcEpfwAf6hbPMhC.png'
            alt='purwadhika'
            className='w-screen'></img>
        </div>
        <div className='flex flex-row justify-start mx-10 lg:mx-24 mb-4'>
          <h1 className='font-serif font-extrabold text-xl'>
            Login Your Account
          </h1>
        </div>
        <div className='flex flex-row justify-center'>
          <Card className='w-10/12 bg-sky-400'>
            <form onSubmit={onSubmit} className='flex flex-col gap-4'>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='email' value='Email' />
                </div>
                <TextInput
                  id='email'
                  name='email'
                  type='email'
                  placeholder='name@gmail.com'
                  value={input.email}
                  required={true}
                  onChange={inputHandler}
                />
              </div>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='password' value='Password' />
                </div>
                <TextInput
                  id='password'
                  onChange={inputHandler}
                  name='password'
                  type='password'
                  value={input.password}
                  required={true}
                />
              </div>
              <div className='flex flex-row justify-between'>
                <div>
                  <Button className='w-24' type='submit'>
                    Login
                  </Button>
                </div>
                <div className='ml-8 lg:mx-0'></div>
                <h1 className='text-slate-800'>
                  Don't have account? Register{" "}
                  <Link className='text-yellow-500 underline' to='/register'>
                    here
                  </Link>
                </h1>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Login;
