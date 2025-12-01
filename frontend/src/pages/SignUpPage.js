// // src/pages/SignUpPage.js
import React, { useState, useEffect } from 'react';
import '../styles/SignUpPage.css';

const SignUpPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    agreeToTerms: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [activeSocial, setActiveSocial] = useState(null);

  useEffect(() => {
    // Animation on page load
    const timer = setTimeout(() => {
      document.querySelector('.auth-container').classList.add('loaded');
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (!isLogin) {
      if (!formData.fullName) {
        newErrors.fullName = 'Full name is required';
      }
      
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
      
      if (!formData.phone) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
        newErrors.phone = 'Please enter a valid 10-digit phone number';
      }
      
      if (!formData.dateOfBirth) {
        newErrors.dateOfBirth = 'Date of birth is required';
      }
      
      if (!formData.gender) {
        newErrors.gender = 'Please select your gender';
      }
      
      if (!formData.agreeToTerms) {
        newErrors.agreeToTerms = 'You must agree to the terms and conditions';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        alert(isLogin ? 'Login successful!' : 'Sign up successful!');
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          password: '',
          confirmPassword: '',
          phone: '',
          dateOfBirth: '',
          gender: '',
          agreeToTerms: false
        });
      }, 2000);
    }
  };

  const handleSocialLogin = (provider) => {
    setActiveSocial(provider);
    setIsLoading(true);
    
    // Simulate social login
    setTimeout(() => {
      setIsLoading(false);
      setActiveSocial(null);
      alert('Logging in with ${provider}...');
    }, 1500);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setErrors({});
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-right">
          <div className="auth-form-container">
            <div className="form-header">
              <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
              <p>{isLogin ? 'Sign in to continue to your account' : 'Join us to start your journey'}</p>
            </div>
            
            <form onSubmit={handleSubmit} className="auth-form">
              {!isLogin && (
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={errors.fullName ? 'error' : ''}
                    placeholder="John Doe"
                  />
                  {errors.fullName && <div className="error-message">{errors.fullName}</div>}
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="your.email@example.com"
                />
                {errors.email && <div className="error-message">{errors.email}</div>}
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="password-input">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={errors.password ? 'error' : ''}
                    placeholder="••••••••"
                  />
                  <button 
                    type="button" 
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? '👁' : '👁‍🗨'}
                  </button>
                </div>
                {errors.password && <div className="error-message">{errors.password}</div>}
              </div>
              
              {!isLogin && (
                <>
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <div className="password-input">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className={errors.confirmPassword ? 'error' : ''}
                        placeholder="••••••••"
                      />
                      <button 
                        type="button" 
                        className="toggle-password"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? '👁' : '👁‍🗨'}
                      </button>
                    </div>
                    {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={errors.phone ? 'error' : ''}
                      placeholder="(123) 456-7890"
                    />
                    {errors.phone && <div className="error-message">{errors.phone}</div>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className={errors.dateOfBirth ? 'error' : ''}
                    />
                    {errors.dateOfBirth && <div className="error-message">{errors.dateOfBirth}</div>}
                  </div>
                  
                  <div className="form-group">
                    <label>Gender</label>
                    <div className="gender-options">
                      <div className="gender-option">
                        <input
                          type="radio"
                          id="male"
                          name="gender"
                          value="male"
                          checked={formData.gender === 'male'}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="male">Male</label>
                      </div>
                      
                      <div className="gender-option">
                        <input
                          type="radio"
                          id="female"
                          name="gender"
                          value="female"
                          checked={formData.gender === 'female'}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="female">Female</label>
                      </div>
                      
                      <div className="gender-option">
                        <input
                          type="radio"
                          id="other"
                          name="gender"
                          value="other"
                          checked={formData.gender === 'other'}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="other">Other</label>
                      </div>
                    </div>
                    {errors.gender && <div className="error-message">{errors.gender}</div>}
                  </div>
                  
                  <div className="terms">
                    <input
                      type="checkbox"
                      id="agreeToTerms"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className={errors.agreeToTerms ? 'error' : ''}
                    />
                    <label htmlFor="agreeToTerms">
                        I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
                    </label>
                    {errors.agreeToTerms && <div className="error-message">{errors.agreeToTerms}</div>}
                  </div>
                </>
              )}
              
              <div className="form-actions">
                {isLogin && (
                  <div className="forgot-password">
                    <a href="#">Forgot password?</a>
                  </div>
                )}
                
                <button 
                  type="submit" 
                  className={"auth-submit ${isLoading ? 'loading' : ''}"}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="spinner"></div>
                  ) : isLogin ? (
                    'Sign In'
                  ) : (
                    'Sign Up'
                  )}
                </button>
              </div>
            </form>
            
            <div className="form-toggle">
              <p>
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button type="button" onClick={toggleForm}>
                  {isLogin ? 'Sign Up' : 'Sign In'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="auth-footer">
        <p>&copy; {new Date().getFullYear()} AlzheimerCare Inc. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;