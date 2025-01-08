import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Signup.css"; // Import the signup page styles

// Define the shape of the form data
interface FormData {
  firstName: string;
  secondName: string;
  username: string;
  nationalId: string;
  email: string;
  password: string;
}

const SignupPage = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    secondName: "",
    username: "",
    nationalId: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5002/api/user/register", formData); // Update with the correct URL
      navigate("/login"); // Redirect to the login page after successful signup
    } catch (err: any) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="signup-container">
      <h1>Create an Account</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSignup}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="secondName"
          placeholder="Second Name"
          value={formData.secondName}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="nationalId"
          placeholder="National ID"
          value={formData.nationalId}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Signup</button>
      </form>

      {/* Link to the Login page */}
      <p>
        Already have an account?{" "}
        <Link to="/login" className="login-link">
          Login here
        </Link>
      </p>
    </div>
  );
};

export default SignupPage;
