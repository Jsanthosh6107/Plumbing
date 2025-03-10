import React, { useEffect, useRef, useState } from 'react';

function FadeInText({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 } // Adjust the threshold as needed
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`fade-in-text ${isVisible ? 'visible' : ''}`}
      ref={textRef}
    >
      <div className="fade-in-text-content">{children}</div>
    </div>
  );
}

export default FadeInText;
