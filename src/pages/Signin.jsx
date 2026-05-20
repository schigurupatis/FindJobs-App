import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();

  // 1. Local States
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 2. Client-Side Input Validations
  const validateForm = () => {
    let tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      tempErrors.email = "Email ID is required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      tempErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // 3. Form Submission & JWT Token Handling
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Industry Standard: Store the JWT token securely
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        
        alert("Login successful!");
        navigate('/'); // Redirect to the Home page
      } else {
        setErrors({ apiError: data.message || "Invalid Email ID or Password" });
      }
    } catch (err) {
      setErrors({ apiError: "Unable to connect to the server. Please check your backend connection." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#F8F9FF] min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-xl border border-gray-100 flex overflow-hidden">
        
        {/* Left Section: Value Proposition Slider/Panel */}
        <div className="hidden lg:flex flex-col justify-between bg-slate-50 w-96 p-12 border-r border-gray-100">
          <div>
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-8">
              n
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 mb-4">Why log in?</h3>
            
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-0.5">✓</span>
                <p className="text-xs text-gray-600 leading-relaxed"><span className="font-bold text-slate-800">1-Click Apply:</span> No need to re-upload details.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-0.5">✓</span>
                <p className="text-xs text-gray-600 leading-relaxed"><span className="font-bold text-slate-800">Track Applications:</span> See when recruiters view your profile.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-0.5">✓</span>
                <p className="text-xs text-gray-600 leading-relaxed"><span className="font-bold text-slate-800">Personalised Feed:</span> Get recommendations built specifically for you.</p>
              </li>
            </ul>
          </div>

          <div className="text-[11px] text-gray-400">
            Over 5,000+ new jobs listed every hour.
          </div>
        </div>

        {/* Right Section: The Login Form */}
        <div className="flex-1 p-8 sm:p-12 lg:p-16">
          <h2 className="text-2xl font-black text-slate-900 mb-2">Login</h2>
          <p className="text-sm text-gray-500 mb-8">Welcome back! Please enter your details.</p>

          {/* API Error Notification */}
          {errors.apiError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl text-sm text-red-600 font-medium">
              {errors.apiError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email ID</label>
              <input
                type="text"
                name="email"
                placeholder="Enter your registered Email ID"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-400 focus:ring-red-100' : 'border-gray-200 focus:ring-blue-100'} text-sm focus:outline-none focus:ring-4 transition-all`}
              />
              {errors.email && <p className="text-xs text-red-500 mt-1 font-medium">{errors.email}</p>}
            </div>

            {/* Password Input */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-sm font-semibold text-slate-700">Password</label>
                <a href="#" className="text-xs font-bold text-blue-600 hover:underline">Forgot Password?</a>
              </div>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border ${errors.password ? 'border-red-400 focus:ring-red-100' : 'border-gray-200 focus:ring-blue-100'} text-sm focus:outline-none focus:ring-4 transition-all`}
              />
              {errors.password && <p className="text-xs text-red-500 mt-1 font-medium">{errors.password}</p>}
            </div>

            {/* Remember Me Toggle */}
            <div className="flex items-center">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="rememberMe" className="ml-2 block text-xs text-gray-600 font-medium cursor-pointer select-none">
                Keep me logged in
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#457EFF] hover:bg-blue-600 text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-md text-base mt-2 disabled:opacity-50"
            >
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>

            {/* Link to Register */}
            <p className="text-sm text-gray-600 text-center mt-6">
              New to Jobs-App? <Link to="/signup" className="text-blue-600 font-bold hover:underline">Signup for free</Link>
            </p>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Signin;
