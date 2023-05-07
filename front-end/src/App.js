import "./App.css";
import Register from "./Pages/Register";
import { Route, Routes } from "react-router-dom";
import Authenticaton from "./Pages/Auth";
import Login from "./Pages/Login";
import MyNavbar from "./Components/Navbar";
import Home from "./Pages/Home";
import AccessRoute from "./Routes/AccessRoute";
import LoginRoute from "./Routes/LoginRoute";
import { GlobalProvider } from "./Context/GlobalContext";
import CategoryForm from "./Pages/CategoryForm";

function App() {
  return (
    <>
      <GlobalProvider>
        <MyNavbar />
        <Routes>
          <Route
            path='/register'
            element={
              <LoginRoute>
                <Register />
              </LoginRoute>
            }
          />
          <Route path='/authentication/:token' element={<Authenticaton />} />
          <Route
            path='/'
            element={
              <LoginRoute>
                <Login />
              </LoginRoute>
            }
          />
          <Route
            path='/home'
            element={
              <AccessRoute>
                <Home />
              </AccessRoute>
            }
          />
          <Route
            path='/add-category'
            element={
              <AccessRoute>
                <CategoryForm />
              </AccessRoute>
            }
          />
        </Routes>
      </GlobalProvider>
    </>
  );
}

export default App;
