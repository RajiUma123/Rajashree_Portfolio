import React from 'react';
import { motion } from 'framer-motion';
import Education1 from "../assets/colg.jpg"
import Education2 from "../assets/colg2.jpg"

function Education() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        id="Education"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Education
      </motion.h1>
      <div>
        {/* University of Utah */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="mb-8 flex flex-wrap lg:justify-center"
        >
          <div className="w-full lg:w-1/4">
            <img
              src={Education1} // Replace with the actual image path
              width={150}
              height={150}
              alt="University of Utah"
              className="mb-6 rounded"
            />
          </div>
          <div className="w-full max-w-xl lg:w-3/4">
          <p className="mb-1 font-semibold  text-1xl">
          Master of Science in Information Systems (08/2023 – 12/2024)</p>
            <h6 className="mb-2 font-semibold text-1xl">University of Utah</h6>
           
            <p className="text-neutral-400">Completed a Master of Science in Information Systems, focusing on software development, system design, and integrating technology with business solutions. Gained practical experience in software development, cloud-based solutions, and data-driven applications.</p>
           
          </div>
        </motion.div>

        {/* Savitribai Phule Pune University - MCA */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="mb-8 flex flex-wrap lg:justify-center"
        >
          <div className="w-full lg:w-1/4">
            <img
              src={Education2}// Replace with the actual image path
              width={150}
              height={150}
              alt="Savitribai Phule Pune University"
              className="mb-6 rounded"
            />
          </div>
          <div className="w-full max-w-xl lg:w-3/4">
          <p className="mb-1 font-semibold  text-1xl">
              Master of Computer Application (05/2019 – 06/2022)
            </p>
            <h6 className="mb-2 font-semibold text-1xl">Savitribai Phule Pune University</h6>
         <p className="mb-2 text-neutral-400">Studied Master of Computer Application, focusing on advanced software development, system analysis, and design. Worked on practical projects to enhance skills in software engineering, algorithms, and application programming.</p>
            
          </div>
        </motion.div>

        {/* Savitribai Phule Pune University - BCA */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="mb-8 flex flex-wrap lg:justify-center"
        >
          <div className="w-full lg:w-1/4">
            <img
              src={Education2} 
              width={150}
              height={150}
              alt="Savitribai Phule Pune University"
              className="mb-6 rounded"
            />
          </div>
          <div className="w-full max-w-xl lg:w-3/4">
          <h6 className="mb-1 font-semibold text-1xl">
              Bachelor of Computer Application (05/2015 – 06/2018)
            </h6>
            <h6 className="mb-2 font-semibold text-1x">Savitribai Phule Pune University</h6>
            
            <p className="mb-2 text-neutral-400">Studied Bachelor of Computer Application, where I developed a strong foundation in computer science, web development, and database management. Engaged in hands-on projects to refine programming and system architecture skills.</p>
            
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Education;
