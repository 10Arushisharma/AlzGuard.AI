// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import Header from '../components/Header';
// import Slideshow from '../components/Slideshow';

// const HomePage = () => {
//   return (
//     <motion.div 
//       className="home-page"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Header />
      
//       <div className="content-container">
//         <Slideshow />
        
//         <div className="predict-section">
//           <motion.div 
//             className="predict-image"
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             style={{ 
//               // backgroundImage: `url(https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3)`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center'
//             }}
//           />
          
//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.7 }}
//           >
//             <Link to="/predict">
//               <motion.button 
//                 className="predict-btn"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Start Prediction
//               </motion.button>
//             </Link>
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default HomePage;




// src/pages/HomePage.js
// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import Header from '../components/Header';

// const HomePage = () => {
//   return (
       
//     <motion.div 
//       className="home-page"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Header />
      
//       <div className="content-container">
//        {/* <img>"https://www.imperial.ac.uk/news/image/mainnews2012/35255.jpg"</img> */}
//         <div className="hero-section">
//           <div className="left-content">
//             <div className="stethoscope-icon">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a.3.3 0 1 0 .2.3"></path>
//                 <path d="M19 9a7 7 0 0 0-7-7 7 7 0 0 0-7 7v5a7 7 0 0 0 7 7 7 7 0 0 0 7-7v-2"></path>
//                 <path d="M12 19v3"></path>
//                 <path d="M8 22h8"></path>
//               </svg>
//             </div>
//             <h1>Disease Prediction System</h1>
//             <p>Our system helps you predict potential diseases based on your symptoms, find nearby hospitals, and share your experiences with others.</p>
//           </div>
          
//           <div className="right-content">
//             <div className="feature-cards">
//               <Link to="/predict" className="feature-card">
//                 <div className="card-icon">
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <line x1="12" y1="5" x2="12" y2="19"></line>
//                     <line x1="5" y1="12" x2="19" y2="12"></line>
//                   </svg>
//                 </div>
//                 <h3>Select Symptoms</h3>
//                 <p>Choose your symptoms to get a preliminary diagnosis</p>
//               </Link>
              
//               <Link to="/diagnoses" className="feature-card">
//                 <div className="card-icon">
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <circle cx="12" cy="12" r="10"></circle>
//                     <line x1="2" y1="12" x2="22" y2="12"></line>
//                     <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
//                   </svg>
//                 </div>
//                 <h3>Diagnoses & Treatment</h3>
//                 <p>View possible conditions and treatment options</p>
//               </Link>
              
//               <Link to="/hospitals" className="feature-card">
//                 <div className="card-icon red-cross">
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <line x1="12" y1="5" x2="12" y2="19"></line>
//                     <line x1="5" y1="12" x2="19" y2="12"></line>
//                   </svg>
//                 </div>
//                 <h3>Hospitals</h3>
//                 <p>Find nearby hospitals and medical facilities</p>
//               </Link>
              
//               <Link to="/comments" className="feature-card">
//                 <div className="card-icon yellow-comment">
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
//                   </svg>
//                 </div>
//                 <h3>Comments</h3>
//                 <p>Share your experience and read others' stories</p>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default HomePage;


// import React from 'react';

// /**
//  * HomePage.jsx
//  * Single-file React component (Tailwind CSS required in the project)
//  * Default export: HomePage
//  *
//  * Notes:
//  * - This component is intentionally self-contained and uses Tailwind utility classes.
//  * - Replace image paths (or swap in <img> tags) with your real assets.
//  * - The Detection link points to `/detection` — adjust to match your router.
//  */

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-900 to-black text-gray-100">
//       {/* Header */}
//       <header className="sticky top-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/5">
//         <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
//           <div className="text-2xl font-extrabold text-purple-300">AlzheimerCare</div>
//           <nav className="flex items-center gap-6">
//             <a href="#" className="text-sm font-medium text-gray-300 hover:text-white">Home</a>
//             <a href="#" className="text-sm font-medium text-gray-300 hover:text-white">Blogs</a>
//             <a href="#" className="text-sm font-medium text-gray-300 hover:text-white">Hospitals</a>
//             <a href="/detection" className="text-sm font-medium text-gray-300 hover:text-white">Detection</a>
//           </nav>
//         </div>
//       </header>

//       <main className="max-w-6xl mx-auto px-6 py-12">
//         {/* HERO */}
//         <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//           <div>
//             <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
//               <span className="block">Early Detection <span className="text-purple-300">Is</span></span>
//               <span className="block">Key To Alzheimer's Care</span>
//             </h1>
//             <p className="mt-6 text-gray-400 max-w-xl">
//               Our advanced AI system analyzes brain MRI scans to detect early signs of Alzheimer's disease
//               with high accuracy, helping patients get timely treatment.
//             </p>

//             <div className="mt-8 flex flex-wrap gap-4">
//               <a href="/detection" className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-purple-500 to-purple-400 text-black rounded-lg font-semibold shadow-lg">Start Diagnosis</a>
//               <a href="#how-it-works" className="inline-flex items-center px-5 py-3 border border-white/10 rounded-lg text-gray-200">Learn How It Works</a>
//             </div>

//             <div className="mt-8 grid grid-cols-2 gap-6 max-w-md">
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-purple-300">97%</div>
//                 <div className="text-sm text-gray-400">Accuracy Rate</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-purple-300">24/7</div>
//                 <div className="text-sm text-gray-400">Availability</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-purple-300">3-5s</div>
//                 <div className="text-sm text-gray-400">Processing Time</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-purple-300">150+</div>
//                 <div className="text-sm text-gray-400">Hospital Partners</div>
//               </div>
//             </div>
//           </div>

//           <div>
//             <div className="rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-gradient-to-b from-neutral-800 to-neutral-900 p-6">
//               {/* Placeholder brain MRI image. Replace with real image */}
//               <img src="/images/brain-hero.jpg" alt="Brain MRI" className="w-full h-auto rounded-lg object-cover" />
//             </div>
//           </div>
//         </section>

//         {/* ABOUT / HOW IT WORKS */}
//         <section id="how-it-works" className="mt-20">
//           <h2 className="text-center text-3xl font-bold text-purple-300">About Our Technology</h2>
//           <p className="mt-3 text-center text-gray-400 max-w-2xl mx-auto">We combine advanced deep learning with medical expertise to provide accurate Alzheimer's detection and personalized care recommendations.</p>

//           <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
//             <div className="space-y-6">
//               <div className="flex gap-4">
//                 <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-300 flex items-center justify-center font-bold text-black">1</div>
//                 <div>
//                   <h3 className="text-white font-semibold">Advanced Image Processing</h3>
//                   <p className="text-gray-400">Our AI uses specialized image-processing algorithms designed for medical scans.</p>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-300 flex items-center justify-center font-bold text-black">2</div>
//                 <div>
//                   <h3 className="text-white font-semibold">Deep Learning Classification</h3>
//                   <p className="text-gray-400">Multiple neural networks work together to identify patterns in brain structure.</p>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-300 flex items-center justify-center font-bold text-black">3</div>
//                 <div>
//                   <h3 className="text-white font-semibold">Medical Expert Verification</h3>
//                   <p className="text-gray-400">Our system is trained and verified by neurologists with decades of experience.</p>
//                 </div>
//               </div>
//             </div>

//             <div className="space-y-4">
//               <img src="/images/tech-1.jpg" alt="scan examples" className="rounded-lg border border-white/5" />
//               <img src="/images/tech-2.jpg" alt="brain overlay" className="rounded-lg border border-white/5" />
//             </div>
//           </div>
//         </section>

//         {/* Features */}
//         <section className="mt-20">
//           <h2 className="text-center text-3xl font-bold text-purple-300">Our Features</h2>
//           <p className="mt-3 text-center text-gray-400 max-w-2xl mx-auto">Comprehensive tools for Alzheimer's detection, monitoring, and care recommendations.</p>

//           <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="p-6 rounded-xl bg-neutral-800 border border-white/5">
//               <div className="w-12 h-12 rounded-full bg-purple-300/30 flex items-center justify-center text-purple-300 font-bold">•</div>
//               <h3 className="mt-4 font-semibold text-white">AI-Based Diagnosis</h3>
//               <p className="mt-2 text-gray-400">Advanced detection system identifies early signs of Alzheimer's with high accuracy.</p>
//             </div>

//             <div className="p-6 rounded-xl bg-neutral-800 border border-white/5">
//               <div className="w-12 h-12 rounded-full bg-purple-300/30 flex items-center justify-center text-purple-300 font-bold">•</div>
//               <h3 className="mt-4 font-semibold text-white">Hospital Finder</h3>
//               <p className="mt-2 text-gray-400">Instantly find specialized hospitals and treatment centers near you for Alzheimer's care.</p>
//             </div>

//             <div className="p-6 rounded-xl bg-neutral-800 border border-white/5">
//               <div className="w-12 h-12 rounded-full bg-purple-300/30 flex items-center justify-center text-purple-300 font-bold">•</div>
//               <h3 className="mt-4 font-semibold text-white">Detailed Reports</h3>
//               <p className="mt-2 text-gray-400">Receive comprehensive analysis of brain scans with personalized treatment suggestions.</p>
//             </div>
//           </div>
//         </section>

//         {/* Team + CTA */}
//         <section className="mt-20">
//           <h2 className="text-center text-3xl font-bold text-purple-300">Meet Our Team</h2>
//           <p className="mt-3 text-center text-gray-400 max-w-2xl mx-auto">Experts combining medical knowledge with cutting-edge AI technology</p>

//           <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-800 border border-white/5">
//               <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-purple-300 flex items-center justify-center text-black font-bold">PC</div>
//               <div>
//                 <h4 className="font-semibold">Purva Chavan</h4>
//                 <div className="text-sm text-gray-400">AI & Machine Learning Lead</div>
//                 <p className="mt-2 text-gray-400 text-sm">Expert in developing and training neural networks for medical image analysis. Created the core model behind our Alzheimer's detection system.</p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-800 border border-white/5">
//               <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-purple-300 flex items-center justify-center text-black font-bold">SS</div>
//               <div>
//                 <h4 className="font-semibold">Sanika Salvi</h4>
//                 <div className="text-sm text-gray-400">UI/UX Designer & Frontend Developer</div>
//                 <p className="mt-2 text-gray-400 text-sm">Skilled designer focused on creating intuitive and accessible user interfaces. Responsible for the platform's user experience and visual design.</p>
//               </div>
//             </div>
//           </div>

//           <div className="mt-12 bg-gradient-to-r from-purple-600/10 to-purple-300/8 p-10 rounded-2xl border border-purple-400/6 text-center">
//             <h3 className="text-2xl font-semibold">Ready to detect Alzheimer's early?</h3>
//             <p className="mt-3 text-gray-400">Start using our AI-powered tool to analyze brain MRI scans and get instant results with hospital recommendations.</p>
//             <div className="mt-6">
//               <a href="/detection" className="inline-block px-6 py-3 bg-purple-300 text-black rounded-lg font-semibold shadow">Start Free Analysis</a>
//             </div>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="mt-20 border-t border-white/5 pt-8 pb-12">
//           <div className="flex flex-col md:flex-row md:justify-between gap-8">
//             <div>
//               <div className="text-purple-300 font-bold">BrainScan</div>
//               <p className="text-gray-400 mt-3 max-w-md">Advanced AI-powered Alzheimer's detection and hospital recommendation system.</p>
//             </div>

//             <div className="grid grid-cols-2 gap-8 md:gap-16">
//               <div>
//                 <h4 className="text-white font-semibold">Quick Links</h4>
//                 <ul className="mt-3 text-gray-400 text-sm space-y-2">
//                   <li><a href="#">About</a></li>
//                   <li><a href="#">Features</a></li>
//                   <li><a href="#">How It Works</a></li>
//                 </ul>
//               </div>

//               <div>
//                 <h4 className="text-white font-semibold">Contact</h4>
//                 <div className="mt-3 text-gray-400 text-sm">
//                   <div>contact@brainscan.ai</div>
//                   <div className="mt-1">+1 (888) 123-4567</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="mt-10 text-center text-sm text-gray-500">© 2025 BrainScan AI. All rights reserved.</div>
//         </footer>
//       </main>
//     </div>
//   );
// }




// src/pages/HomePage.js
import React from 'react';

const HomePage = () => {
  return (
    <div className="page-content home-page">
      {/* This is where you'll put the HTML/JSX from your screenshot:
        - "Early Detection Is Key To Alzheimer's Care" text
        - Start Diagnosis / Learn How It Works buttons
        - The two MRI images
        - The four statistic boxes (97%, 24/7, 3-5s, 150+)
      */}
      <header>
        <h1>Welcome to Alzheimer Prediction AI</h1>
      </header>
      <section className="hero-section">
        <h2>Early Detection Is Key To Alzheimer's Care</h2>
        <p>Our AI system analyzes brain MRI scans to detect Alzheimer's disease with high precision.</p>
        {/* Placeholder for images and buttons */}
      </section>
      <p style={{padding: '50px', textAlign: 'center'}}>This is the responsive homepage content.</p>
    </div>
  );
};

export default HomePage;