import React from 'react';
import { motion } from 'framer-motion';
import AwsLogo from "../assets/image.png";

const Certification = () => {
  return (
    <div className="border-b border-neutral-900 pb-20" id="Certification">
      {/* Gradient Header */}
      <motion.h1 whileInView={{opacity: 1, y: 0}}
      initial={{opacity: 0,y:-100 }}
      transition={{duration:0.5}}className="text-4xl text-center my-10">Certifications</motion.h1>

      {/* AWS Certification */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="text-center bg-neutral-900 p-6 rounded-lg shadow-lg max-w-lg mx-auto"
      >
        <div className="flex justify-center">
          <img
            src={AwsLogo}
            alt="AWS Logo"
            className="h-24 w-24"
          />
        </div>
        <h2 className="mt-4 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
                       bg-clip-text text-2xl font-semibold text-transparent">
          AWS Certified Solutions Architect – Associate
        </h2>
        <a
          href="/Rajashree_Portfolio/public/assets/projects/AWS Certified Solutions Architect - Associate certificate.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-2 bg-purple-600 text-black text-sm font-medium rounded-lg 
                     hover:bg-purple-700 transition-all"
        >
          View Certificate
        </a>
      </motion.div>
    </div>
  );
};

export default Certification;
