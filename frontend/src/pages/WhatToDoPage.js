// WhatToDoPage.jsx
import React, { useState, useRef, useEffect } from 'react';
import '../styles/WhatToDoPage.css';

const WhatToDoPage = () => {
  const [activeSection, setActiveSection] = useState('section1');
  const [isAnimating, setIsAnimating] = useState(false);
  const contentRef = useRef(null);
  
  // Sample sections data - you can replace with your actual content
  const sections = [
    { id: 'section1', title: 'Understanding Alzheimer\'s', content: 'Alzheimer\'s disease is a progressive neurological disorder that causes brain cells to degenerate and die. It\'s the most common cause of dementia — a continuous decline in thinking, behavioral and social skills that affects a person\'s ability to function independently.' },
    { id: 'section2', title: 'Early Signs & Symptoms', content: 'Memory loss that disrupts daily life, challenges in planning or solving problems, difficulty completing familiar tasks, confusion with time or place, trouble understanding visual images, new problems with words in speaking or writing, misplacing things and losing the ability to retrace steps, decreased or poor judgment, withdrawal from work or social activities, and changes in mood and personality.' },
    { id: 'section3', title: 'Risk Factors', content: 'Age is the greatest risk factor for Alzheimer\'s. Family history and genetics play a role, as do lifestyle factors like cardiovascular health, education level, social engagement, and traumatic brain injury. Women are more likely to develop Alzheimer\'s than men, partly because they live longer.' },
    { id: 'section4', title: 'Diagnosis Process', content: 'Diagnosing Alzheimer\'s involves a thorough medical assessment including medical history, mental status testing, physical and neurological exams, blood tests, and brain imaging. Doctors may also perform memory and thinking tests to evaluate cognitive function.' },
    { id: 'section5', title: 'Treatment Options', content: 'While there\'s no cure for Alzheimer\'s, medications can temporarily slow the worsening of symptoms. Cholinesterase inhibitors and memantine are commonly prescribed. Non-drug approaches like cognitive stimulation therapy, occupational therapy, and environmental modifications can also help manage symptoms.' },
    { id: 'section6', title: 'Lifestyle Modifications', content: 'Regular physical activity, a balanced diet rich in fruits and vegetables, mental stimulation, quality sleep, stress management, and social engagement may help reduce the risk of cognitive decline. The Mediterranean diet and MIND diet have shown particular promise in supporting brain health.' },
    { id: 'section7', title: 'Caregiver Support', content: 'Caregiving for someone with Alzheimer\'s can be physically and emotionally demanding. It\'s important for caregivers to seek support through respite care, support groups, education, and counseling. Taking care of one\'s own health is essential to providing good care.' },
    { id: 'section8', title: 'Communication Strategies', content: 'Effective communication with Alzheimer\'s patients involves speaking slowly in simple sentences, maintaining eye contact, minimizing distractions, using nonverbal cues, being patient, and avoiding criticism or arguing. Validation therapy can help reduce anxiety by acknowledging the person\'s feelings.' },
    { id: 'section9', title: 'Safety Considerations', content: 'Creating a safe environment involves removing tripping hazards, installing grab bars, securing dangerous items, using locks and alarms, ensuring good lighting, and maintaining a consistent routine. GPS tracking devices can help prevent wandering.' },
    { id: 'section10', title: 'Financial Planning', content: 'Early financial planning is crucial as Alzheimer\'s progresses. This includes reviewing insurance coverage, exploring long-term care options, setting up power of attorney, organizing important documents, and understanding government benefits like Medicare and Medicaid.' },
    { id: 'section11', title: 'Legal Preparation', content: 'Legal documents like advance directives, living wills, and durable power of attorney for health care and finances should be prepared early in the disease process. Consulting with an elder law attorney can help ensure all necessary legal protections are in place.' },
    { id: 'section12', title: 'Clinical Trials', content: 'Participating in clinical trials can provide access to new treatments and contribute to Alzheimer\'s research. Trials are investigating new drugs, lifestyle interventions, diagnostic tools, and prevention strategies. Resources like ClinicalTrials.gov can help find relevant studies.' },
    { id: 'section13', title: 'Alternative Therapies', content: 'Complementary approaches like music therapy, art therapy, aromatherapy, massage, and pet therapy may help improve mood, reduce agitation, and enhance quality of life for Alzheimer\'s patients. Always discuss alternative treatments with healthcare providers.' },
    { id: 'section14', title: 'End-of-Life Care', content: 'As Alzheimer\'s progresses to advanced stages, care focuses on comfort, dignity, and quality of life. Hospice care provides specialized support for patients and families during this time. Advance care planning ensures the person\'s wishes are respected.' },
    { id: 'section15', title: 'Research & Future Directions', content: 'Current Alzheimer\'s research focuses on early detection methods, understanding disease mechanisms, developing new treatments, and prevention strategies. Advances in biomarkers, imaging techniques, and genetics are opening new possibilities for earlier intervention and personalized medicine approaches.' }
  ];

  const handleNavClick = (sectionId) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveSection(sectionId);
    
    // Scroll to section with animation
    const element = document.getElementById(sectionId);
    if (element && contentRef.current) {
      contentRef.current.scrollTo({
        top: element.offsetTop - 20,
        behavior: 'smooth'
      });
    }
    
    // Reset animation state after delay
    setTimeout(() => setIsAnimating(false), 600);
  };

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      if (isAnimating || !contentRef.current) return;
      
      const contentElement = contentRef.current;
      const scrollPosition = contentElement.scrollTop + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    
    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      if (contentElement) {
        contentElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isAnimating, sections]);

  return (
    <div className="what-to-do-page">
      <div className="page-header">
        <h1>Alzheimer's Disease: What You Need to Know</h1>
        <p>Comprehensive information about Alzheimer's disease, from early symptoms to advanced care</p>
      </div>
      
      <div className="content-container">
        {/* Left Navigation Panel */}
        <div className="nav-panel">
          <div className="nav-header">
            <h2>Information Sections</h2>
            <div className="nav-indicator"></div>
          </div>
          
          <nav className="nav-menu">
            {sections.map((section) => (
              <div
                key={section.id}
                className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => handleNavClick(section.id)}
              >
                <span className="nav-icon"></span>
                <span className="nav-text">{section.title}</span>
              </div>
            ))}
          </nav>
          
          <div className="nav-footer">
            <div className="progress-indicator">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${(sections.findIndex(s => s.id === activeSection) + 1) * (100 / sections.length)}%` }}
                ></div>
              </div>
              <span>{sections.findIndex(s => s.id === activeSection) + 1} of {sections.length}</span>
            </div>
          </div>
        </div>
        
        {/* Content Area */}
        <div className="content-area" ref={contentRef}>
          {sections.map((section, index) => (
            <div 
              key={section.id}
              id={section.id}
              className={`content-section ${activeSection === section.id ? 'active' : ''}`}
              style={{ 
                animationDelay: `${index * 0.05}s`,
                opacity: activeSection === section.id ? 1 : 0.7
              }}
            >
              <div className="section-header">
                <div className="section-number">{index + 1}</div>
                <h2>{section.title}</h2>
              </div>
              
              <div className="section-content">
                <p>{section.content}</p>
                
                {/* Visual element */}
                <div className="section-visual">
                  <div className="brain-icon"></div>
                  <div className="pulse-animation"></div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="content-footer">
            <div className="navigation-arrows">
              <button 
                className="nav-arrow prev"
                disabled={activeSection === 'section1'}
                onClick={() => {
                  const currentIndex = sections.findIndex(s => s.id === activeSection);
                  if (currentIndex > 0) {
                    handleNavClick(sections[currentIndex - 1].id);
                  }
                }}
              >
                <span>←</span> Previous
              </button>
              
              <button 
                className="nav-arrow next"
                disabled={activeSection === sections[sections.length - 1].id}
                onClick={() => {
                  const currentIndex = sections.findIndex(s => s.id === activeSection);
                  if (currentIndex < sections.length - 1) {
                    handleNavClick(sections[currentIndex + 1].id);
                  }
                }}
              >
                Next <span>→</span>
              </button>
            </div>
            
            <div className="completion-indicator">
              <div className="completion-track">
                <div 
                  className="completion-progress"
                  style={{ width: `${(sections.findIndex(s => s.id === activeSection) + 1) * (100 / sections.length)}%` }}
                ></div>
              </div>
              <span>
                {sections.findIndex(s => s.id === activeSection) + 1} of {sections.length} sections completed
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatToDoPage;