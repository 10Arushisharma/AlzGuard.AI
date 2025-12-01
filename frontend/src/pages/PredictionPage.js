import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from './Header';

const PredictionPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    image: null
  });
  
  const [prediction, setPrediction] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData(prev => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setPrediction({
        result: Math.random() > 0.5 ? 'Low Risk' : 'High Risk',
        confidence: `${Math.floor(Math.random() * 30) + 70}%`
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <motion.div 
      className="prediction-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      
      <div className="content-container">
        <motion.div 
          className="prediction-form"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2>Alzheimer's Prediction</h2>
          
          {prediction ? (
            <motion.div 
              className="prediction-result"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <h3>Prediction Result</h3>
              <p className="result-text">{prediction.result}</p>
              <p className="confidence-text">Confidence: {prediction.confidence}</p>
              <Link to="/">
                <button className="back-btn">Back to Home</button>
              </Link>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Age</label>
                <input 
                  type="number" 
                  name="age" 
                  value={formData.age} 
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Gender</label>
                <select 
                  name="gender" 
                  value={formData.gender} 
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Upload MRI Image</label>
                <input 
                  type="file" 
                  onChange={handleImageChange}
                  accept="image/*"
                  required
                />
              </div>
              
              <motion.button 
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processing...' : 'Predict'}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PredictionPage;