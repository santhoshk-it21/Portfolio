import React from 'react';
import resume from '../assets/resume.png';
import pdfFile from '../assets/Resume.pdf'; // Assuming you have the correct path to your PDF file

const Resume = () => {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = pdfFile;
    link.target = '_blank'; // Open the link in a new tab/window
    link.download = 'Resume.pdf'; // Set the default download filename

    // Append the link to the document and trigger a click
    document.body.appendChild(link);
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col md:flex-row backfirst px-5" id="resume">
      <div className="md:w-1/2 flex justify-center py-20">
        <img className="h-[500px] py-3" src={resume} alt="Resume" />
      </div>
      <div className="md:w-1/2 flex justify-center font-hero">
        <div className="w-1/2 flex flex-col justify-center text">
          <h1 className="text-5xl py-5">Resume</h1>
          <p className="text-white">
            Experienced Full Stack Developer with proficiency in front-end
            technologies like React, PWA and also back-end technologies. Basic in
            database management with MongoDB.
            <br />
          </p>
          <button className="btn flex py-6" onClick={handleDownload}>
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
