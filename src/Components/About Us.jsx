import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-[#f6d4be] p-8 rounded-lg shadow-lg max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4 text-[#37271d]">About Us</h2>
      <p className="text-lg text-[#37271d] text-center mb-6 font-mono">
        We are dedicated to creating engaging and fun learning experiences for children.
        Our mission is to combine education with entertainment to provide valuable skills in a
        way that feels like play. Whether you're exploring new topics or playing games, we're here
        to support your journey of discovery.
      </p>
      <div className="text-center">
        <p className="text-xl text-[#37271d] font-semibold">Our Values:</p>
        <ul className="list-disc list-inside mt-4 text-[#37271d] font-mono">
          <li>Empower children through learning</li>
          <li>Encourage creativity and curiosity</li>
          <li>Provide a safe and fun environment</li>
          <li>Foster collaboration and teamwork</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;