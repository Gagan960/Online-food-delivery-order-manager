import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      onLogin(username);
      setSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-4">
      {/* Authentication Note */}
      <div className="mb-8 max-w-md bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <p className="text-sm text-blue-800 font-medium">
          📌 <strong>Demo Login Notice:</strong> This is a dummy login for UI demonstration only. 
          <br />
          <strong>Authentication is not required</strong> for the assignment. 
          <br />
          You can access the order manager directly from the home page without logging in.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-2xl w-80 space-y-4"
      >
        <h2 className="text-3xl font-extrabold text-center text-purple-700">Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition duration-300"
        >
          Login
        </button>

        {success && (
          <p className="text-green-600 text-center font-medium">Login successful!</p>
        )}

        <div className="text-sm text-center">
          Don’t have an account?{" "}
          <Link to="/register" className="text-purple-600 font-semibold underline">
            Register here
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
