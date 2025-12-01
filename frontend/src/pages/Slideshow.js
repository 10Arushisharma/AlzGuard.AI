

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the default styles

// List of images for the slideshow
const images = [
  { 
    src: 'https://case.edu/med/neurology/NR/flairdwicom.jpg', 
    alt: 'Brain MRI Scan 1' 
  },
  { 
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Neuronal_activity_DARPA.jpg/330px-Neuronal_activity_DARPA.jpg', 
    alt: 'AI Diagnostics Interface' 
  },
  { 
    src: 'https://web-admin.kimshealth.org/uploads/memory_loss_causes_f4bb85357a.jpg', 
    alt: "Brain Neurology" 
  },
];

function Slideshow() {
  return (
    <Carousel
      autoPlay={true}       // Slides change automatically
      interval={2000}       // Change every 4 seconds
      infiniteLoop={true}   // Loop back to the start
      showStatus={false}    // Don't show "Slide X of Y"
      showThumbs={false}    // Don't show thumbnail previews
      showArrows={true}     // Show left/right navigation arrows
      stopOnHover={true}    // Stop auto-play when the user hovers
      // The overall style of the carousel will be constrained by the parent <div>
    >
      {images.map((image, index) => (
        <div key={index}>
          <img 
            src={image.src} 
            alt={image.alt} 
            // Ensures the image fills the carousel area
            style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} 
          />
          {/* Optional: Add a caption/legend */}
          <p className="legend">{image.alt}</p>
        </div>
      ))}
    </Carousel>
  );
}

export default Slideshow;