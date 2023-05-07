import { Navbar } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
const MyNavbar = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/");
    swal({
      icon: "success",
      title: "Berhasil Logout",
    });
  };
  return (
    <>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand to='/navbars'>
          <img
            src='https://flowbite.com/docs/images/logo.svg'
            className='mr-3 h-6 sm:h-9'
            alt='Flowbite Logo'
          />
          <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
            Flowbite
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          {!localStorage.getItem("token") ? (
            <>
              <Navbar.Link className='text-center' active={true}>
                <Link to='/'>Login</Link>
              </Navbar.Link>
            </>
          ) : (
            <>
              <Navbar.Link>
                <Link to='/home'>Home</Link>
              </Navbar.Link>
            </>
          )}
          <Navbar.Link>About</Navbar.Link>
          <Navbar.Link href='/navbars'>Services</Navbar.Link>
          <Navbar.Link href='/navbars'>Pricing</Navbar.Link>
          <Navbar.Link href='/navbars'>Contact</Navbar.Link>
          {localStorage.getItem("token") && (
            <Navbar.Link>
              <h1 className='w-fit cursor-pointer' onClick={logoutHandler}>
                Logout
              </h1>
            </Navbar.Link>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MyNavbar;
