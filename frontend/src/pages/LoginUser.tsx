import { useState } from "react";
import { useAppDispatch } from "../app/hooks/redux-hooks";
import axios from "axios";
import { loginUser } from "../app/slices/AppSlice";
import { useNavigate } from "react-router-dom";
import "./loginuser.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5002/api/user/login", { email, password });
      
      // Dispatch login action to Redux store
      dispatch(loginUser({ user: response.data.user, token: response.data.token }));
      
      // Redirect to home page after login
      navigate("/");
    } catch (error: any) {
      console.error("Login error:", error?.response?.data?.message || error.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
