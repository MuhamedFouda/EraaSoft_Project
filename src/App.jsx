import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Page404 from "./pages/Page404"
import JoinPage from "./pages/JoinPage";
import Login from "./components/LoginForm";
import Register from "./components/RegisterForm";


export default function App() {
  return (
    <div className="col-12 App">

      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Homepage />} />
            <Route path="join" element={<JoinPage />} />
            <Route path="join/:join_type" element={<JoinPage />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register/>} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
