import React from 'react';
import Footer from './Footer.tsx';

const Resume: React.FC = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <div className="container mt-5 flex-grow-1">
        <h1 className="text-center mb-4">Resume</h1>
        <hr className="my-4"/>

        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Education</h3>
                <p className="card-text">First Bachelor's degree in Law. Kyrgyz State Law Academy. Pursued in 2021.</p>
                <p className="card-text">Second Bachelor's degree in Computer Science. National Louis University.
                  Expected in 2025.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Experience</h3>
                <p className="card-text">Demir Kyrgyz International Bank: June, 2023 - July, 2023</p>
                <p className="card-text">Bank of Asia: September, 2022 - June, 2023</p>
                <p className="card-text">Central Commission of Election: June, 2022 - September, 2022</p>
                <p className="card-text">Orion Hotel: September, 2019 - May, 2022</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Languages</h3>
                <p className="card-text">Russian</p>
                <p className="card-text">Turkish</p>
                <p className="card-text">Kyrgyz</p>
                <p className="card-text">English</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Skills</h3>
                <p className="card-text">JavaScript</p>
                <p className="card-text">HTML</p>
                <p className="card-text">CSS</p>
                <p className="card-text">React</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;