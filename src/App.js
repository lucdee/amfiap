
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Dev from "./components/Dev";
import Desenvolvimento from "./components/Dev";
import Back from "./components/back";

function App() {
  return (
    <div style={{ width: "100%" }}>
   
    
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
               <Route
                path="/desenvolvimento"
                element={
                  <ProtectedRoute>
                    <Desenvolvimento />
                  </ProtectedRoute>
                }
              />
                   <Route
                path="/back"
                element={
                  <ProtectedRoute>
                    <Back />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>

    </div>
  );
}

export default App;
