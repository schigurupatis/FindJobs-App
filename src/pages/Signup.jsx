import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  // 1. Unified Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    mobileNumber: '',
    workStatus: 'fresher', // 'fresher' or 'experienced'
  });

  // 2. Real-time Validation Errors State
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 3. Robust Regex Form Validation Logic
  const validateForm = () => {
    let tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; // Min 8 chars, 1 uppercase, 1 lowercase, 1 number
    const mobileRegex = /^[6-9]\d{9}$/; // Valid Indian mobile numbers

    if (!formData.fullName.trim()) tempErrors.fullName = "Full name is required";
    if (!emailRegex.test(formData.email)) tempErrors.email = "Enter a valid email address";
    if (!passwordRegex.test(formData.password)) {
      tempErrors.password = "Password must be at least 8 characters, include 1 uppercase letter, 1 lowercase letter, and 1 number";
    }
    if (!mobileRegex.test(formData.mobileNumber)) tempErrors.mobileNumber = "Enter a valid 10-digit mobile number";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear individual error as the user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // API endpoints are typically pointed to your server environment
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Registration Successful! Redirecting to signin...");
        navigate('/signin');
      } else {
        setErrors({ apiError: data.message || "Registration failed. Try again." });
      }
    } catch (err) {
      setErrors({ apiError: "Server unreachable. Ensure your backend is running." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#F8F9FF] min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-xl border border-gray-100 flex overflow-hidden">
        
        {/* Left Column: The Registration Form */}
        <div className="flex-1 p-8 sm:p-12 lg:p-16">
          <h2 className="text-2xl font-black text-slate-900 mb-2">Create your Job Profile</h2>
          <p className="text-sm text-gray-500 mb-8">Search & apply to jobs from India's top employers</p>

          {errors.apiError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl text-sm text-red-600 font-medium">
              {errors.apiError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full name</label>
              <input
                type="text"
                name="fullName"
                placeholder="What is your name?"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border ${errors.fullName ? 'border-red-400 focus:ring-red-100' : 'border-gray-200 focus:ring-blue-100'} text-sm focus:outline-none focus:ring-4 transition-all`}
              />
              {errors.fullName && <p className="text-xs text-red-500 mt-1 font-medium">{errors.fullName}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email ID</label>
              <input
                type="email"
                name="email"
                placeholder="Tell us your email ID"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-400 focus:ring-red-100' : 'border-gray-200 focus:ring-blue-100'} text-sm focus:outline-none focus:ring-4 transition-all`}
              />
              {errors.email && <p className="text-xs text-red-500 mt-1 font-medium">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Create a password for your account"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border ${errors.password ? 'border-red-400 focus:ring-red-100' : 'border-gray-200 focus:ring-blue-100'} text-sm focus:outline-none focus:ring-4 transition-all`}
              />
              {errors.password && <p className="text-xs text-red-500 mt-1 font-medium leading-relaxed">{errors.password}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Mobile number</label>
              <input
                type="text"
                name="mobileNumber"
                placeholder="10 digit mobile number"
                value={formData.mobileNumber}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border ${errors.mobileNumber ? 'border-red-400 focus:ring-red-100' : 'border-gray-200 focus:ring-blue-100'} text-sm focus:outline-none focus:ring-4 transition-all`}
              />
              {errors.mobileNumber && <p className="text-xs text-red-500 mt-1 font-medium">{errors.mobileNumber}</p>}
            </div>

            {/* Work Status Toggle (Pill Shape layout) */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Work status</label>
              <div className="grid grid-cols-2 gap-4">
                <div 
                  onClick={() => setFormData(prev => ({...prev, workStatus: 'fresher'}))}
                  className={`border p-4 rounded-xl cursor-pointer text-center transition-all ${formData.workStatus === 'fresher' ? 'border-blue-600 bg-blue-50/50 shadow-sm' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  <p className="text-sm font-bold text-slate-900">I'm a fresher</p>
                  <p className="text-xs text-gray-500 mt-0.5">Student / Never worked</p>
                </div>
                <div 
                  onClick={() => setFormData(prev => ({...prev, workStatus: 'experienced'}))}
                  className={`border p-4 rounded-xl cursor-pointer text-center transition-all ${formData.workStatus === 'experienced' ? 'border-blue-600 bg-blue-50/50 shadow-sm' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  <p className="text-sm font-bold text-slate-900">I'm experienced</p>
                  <p className="text-xs text-gray-500 mt-0.5">Have work experience</p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#457EFF] hover:bg-blue-600 text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-md text-base mt-2 disabled:opacity-50"
            >
              {isSubmitting ? 'Registering...' : 'Register now'}
            </button>

            <p className="text-sm text-gray-600 text-center mt-4">
              Already registered? <Link to="/signin" className="text-blue-600 font-bold hover:underline">Signin here</Link>
            </p>
          </form>
        </div>

        {/* Right Column: Naukri Style Features Information Panel */}
        <div className="hidden lg:flex flex-col justify-center bg-slate-50 w-96 p-12 border-l border-gray-100">
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 font-bold">✓</div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Built for visibility</h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">Get noticed by top recruiters searching our database daily.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 font-bold">✓</div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Job Alerts</h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">Receive instant notifications tailored to your specific field parameters.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Signup;
