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
  name: "Anjali Sahni",
  role: "AI/ML Developer",
  bio: "AI/ML developer focused on building intelligent solutions using machine learning, deep learning, and data-driven systems. Experienced in developing practical AI features for web platforms and experimental applications.",
  image: "/images/anjali.jpg"
},
{
  id: 2,
  name: "Arushi Sharma",
  role: "Lead Developer",
  bio: "Lead developer experienced in designing scalable software systems, guiding technical architecture, and coordinating development workflows. Focused on delivering reliable, efficient, and maintainable solutions.",
  image: "/images/arushi.jpeg"
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
    </div>
  );
};

export default AboutPage;