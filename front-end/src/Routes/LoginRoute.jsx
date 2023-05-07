import { Navigate } from "react-router-dom";

const LoginRoute = (props) => {
  if (localStorage.getItem("token") !== null) {
    return <Navigate to='/home' />;
  } else if (localStorage.getItem("token") === null) {
    return props.children;
  }
};
export default LoginRoute;
