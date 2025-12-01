// src/pages/AboutPage.js
// import React from 'react';
// import Header from './Header';

// const AboutPage = () => {
//   return (
//     // <div className="page-content about-page">
//     //   <h1>About Our AI System</h1>
//     //   <p>We leverage state-of-the-art deep learning models trained on vast datasets of anonymized brain MRI scans to achieve industry-leading precision in Alzheimer's early detection.</p>
//     //   <h2>Our Mission</h2>
//     //   <p>To provide accessible, high-speed, and accurate preliminary screening tools to assist in global Alzheimer's care.</p>
//     // </div>
//     <div className="container">
      
//       <div className="row p-3 mt-5 border-top">
//         <h1 className="text-center ">People</h1>
//       </div>

//       <div
//         className="row p-3 text-muted"
//         style={{ lineHeight: "1.8", fontSize: "1.2em" }}
//       >
//         <div className="col-6 p-3 text-center">
//           <img
//             src="/images/nihal.jpg"
//             style={{ borderRadius: "100%", width: "10%" }}
//           />
//           <h4 className="mt-5">Nihal Tosavda</h4>
//           <h6>Founder, CEO</h6>
//         </div>
//         <div className="col-6 p-3">
//           <p>
//             Nithin bootstrapped and founded Zerodha in 2010 to overcome the
//             hurdles he faced during his decade long stint as a trader. Today,
//             Zerodha has changed the landscape of the Indian broking industry.
//           </p>
//           <p>
//             He is a member of the SEBI Secondary Market Advisory Committee
//             (SMAC) and the Market Data Advisory Committee (MDAC).
//           </p>
//           <p>Playing basketball is his zen.</p>
//           <p>
//             Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
//             <a href="">Twitter</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;





// AboutPage.jsx
import React, { useState, useEffect } from 'react';
import '../styles/AboutPage.css';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('team');
  const [isVisible, setIsVisible] = useState(false);
  
  // Team member data
  const teamMembers = [
    {
      id: 1,
      name: "Mohit Derek",
      role: "AI/ML Developer",
      bio: "Neurologist with 15+ years of experience in Alzheimer's research and treatment.",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      id: 2,
      name: "Nihal Tosavda",
      role: "Lead Developer",
      bio: "Machine learning expert specializing in medical imaging and diagnostic algorithms.",
      image: "/images/nihal.jpg"
    },
    {
      id: 3,
      name: "Kushagra Agrawal",
      role: "Assistant Developer",
      bio: "Geriatric psychiatrist focused on dementia care and patient support programs.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 4,
      name: "Mohit Yogi",
      role: "Security Analysis",
      bio: "Software engineer with expertise in healthcare applications and data security.",
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    }
  ];

  // Company values
  // const values = [
  //   { id: 1, title: "Innovation", description: "Pioneering AI solutions for early detection", icon: "💡" },
  //   { id: 2, title: "Compassion", description: "Patient-centered approach to care", icon: "❤️" },
  //   { id: 3, title: "Accuracy", description: "97% precision in our diagnostic results", icon: "🎯" },
  //   { id: 4, title: "Accessibility", description: "Making technology available to all", icon: "🌍" }
  // ];

  // Company milestones
  // const milestones = [
  //   { year: "2018", title: "Company Founded", description: "Started with a vision to revolutionize Alzheimer's care" },
  //   { year: "2019", title: "First Prototype", description: "Developed initial AI detection algorithm" },
  //   { year: "2020", title: "Clinical Trials", description: "Partnered with 50+ hospitals for validation" },
  //   { year: "2021", title: "Platform Launch", description: "Released our first public detection tool" },
  //   { year: "2022", title: "Global Expansion", description: "Reached 150+ hospital partners worldwide" },
  //   { year: "2023", title: "Advanced AI", description: "Achieved 97% accuracy rate in detection" }
  // ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`about-page ${isVisible ? 'visible' : ''}`}>
      <div className="page-header">
        <h1>About Us!</h1>
        <p>Pioneering AI-driven solutions for Alzheimer's detection and care</p>
      </div>

      {/* Team Section */}
      {activeTab === 'team' && (
        <div className="section team-section">
          <div className="section-header">
            <h2>Meet Our Team</h2>
          </div>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id} 
                className="team-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-inner">
                  <div className="card-front">
                    <div className="profile-image">
                      <img src={member.image} alt={member.name} />
                      <div className="image-overlay"></div>
                    </div>
                    <div className="member-info">
                      <h3>{member.name}</h3>
                      <p className="member-role">{member.role}</p>
                    </div>
                  </div>
                  <div className="card-back">
                    <h3>{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    <p className="member-bio">{member.bio}</p>
                    {/* <div className="social-links">
                      <a href="#" className="social-link">🔗</a>
                      <a href="#" className="social-link">💼</a>
                      <a href="#" className="social-link">📧</a>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mission & Values Section */}
      {activeTab === 'mission' && (
        <div className="section mission-section">
          <div className="section-header">
            <h2>Our Mission & Values</h2>
            <p>What drives us every day</p>
          </div>
          
          <div className="mission-content">
            <div className="mission-text">
              <h3>Our Mission</h3>
              <p>To revolutionize Alzheimer's care through advanced AI technology, providing early detection and personalized treatment recommendations that improve patients' quality of life and support caregivers worldwide.</p>
              
              <h3>Our Vision</h3>
              <p>A world where Alzheimer's disease is detected early, treated effectively, and ultimately prevented through technological innovation and compassionate care.</p>
            </div>
            
            <div className="mission-visual">
              <div className="brain-animation">
                <div className="brain-icon">🧠</div>
                <div className="pulse-ring"></div>
                <div className="pulse-ring"></div>
              </div>
            </div>
          </div>
          
          {/* <div className="values-grid">
            {values.map((value, index) => (
              <div 
                key={value.id} 
                className="value-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div> */}
        </div>
      )}

      {/* History Section */}
      {activeTab === 'history' && (
        <div className="section history-section">
          <div className="section-header">
            <h2>Our Journey</h2>
            <p>Milestones in AlzheimerCare's history</p>
          </div>
          
          {/* <div className="timeline">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className="timeline-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-content">
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      )}

      {/* Partners Section */}
      {activeTab === 'partners' && (
        <div className="section partners-section">
          <div className="section-header">
            <h2>Our Partners</h2>
            <p>Collaborating for a better future</p>
          </div>
          
          <div className="partners-grid">
            <div className="partner-category">
              <h3>Healthcare Institutions</h3>
              <div className="partner-list">
                {['NeuroCare Hospital', 'AIIMS Neurology Wing', 'Mayo Clinic', 'Johns Hopkins Hospital', 'Cleveland Clinic'].map((hospital, index) => (
                  <div key={index} className="partner-item">
                    <div className="partner-icon">🏥</div>
                    <span>{hospital}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="partner-category">
              <h3>Research Organizations</h3>
              <div className="partner-list">
                {['Alzheimer\'s Association', 'National Institute on Aging', 'Brain & Behavior Research Foundation', 'Global Brain Health Institute'].map((org, index) => (
                  <div key={index} className="partner-item">
                    <div className="partner-icon">🔬</div>
                    <span>{org}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="partner-category">
              <h3>Technology Partners</h3>
              <div className="partner-list">
                {['NVIDIA Healthcare', 'IBM Watson Health', 'Google Health', 'Microsoft Healthcare'].map((tech, index) => (
                  <div key={index} className="partner-item">
                    <div className="partner-icon">💻</div>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stat-item">
          <div className="stat-number">150+</div>
          <div className="stat-label">Hospital Partners</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">97%</div>
          <div className="stat-label">Detection Accuracy</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">50K+</div>
          <div className="stat-label">Patients Helped</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">24/7</div>
          <div className="stat-label">Support Availability</div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h2>Join Us in the Fight Against Alzheimer's</h2>
        <p>Together, we can make a difference in the lives of millions affected by this disease</p>
        <div className="cta-buttons">
          <button className="btn-primary">Partner With Us</button>
          <button className="btn-secondary">Support Our Cause</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>AlzheimerCare</h3>
            <p>Pioneering AI solutions for Alzheimer's detection and care</p>
            <div className="social-icons">
              <a href="#" className="social-icon">📱</a>
              <a href="#" className="social-icon">🐦</a>
              <a href="#" className="social-icon">📸</a>
              <a href="#" className="social-icon">📺</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Detection Tool</a></li>
              <li><a href="#">Resources</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Research Papers</a></li>
              <li><a href="#">Clinical Trials</a></li>
              <li><a href="#">Patient Stories</a></li>
              <li><a href="#">Caregiver Support</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>123 Medical Center Drive</p>
            <p>Boston, MA 02115</p>
            <p>Email: info@alzheimercare.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} AlzheimerCare Inc. All rights reserved.</p>
          </div>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;