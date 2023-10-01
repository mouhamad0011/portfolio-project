// EduExp.js
import React from 'react';

const EduExp = ({ key,degree,date,description,place, section, row1 }) => {
  console.log(degree)
  
  
  const imageSrc = section === 'education' ? './asset/education-svgrepo-com.svg' : './asset/work-case-svgrepo-com.svg';

  return (
    <div>
        <div
          className={`wrapper ${section === 'experience' ? 'hidden' : ''}`}
          id="educationSection"
        >
          <div className="center-line">
            <a href="#" className="scroll-icon">
              <i className="fas fa-caret-up"></i>
            </a>
          </div>
          <div className={`row ${row1 ? "row-1" : "row-2"}`}>
            <section>
              <img
                src={imageSrc}
                alt="Education Icon"
                className="icon"
              />
              <div className="details">
                <span className="title_education">{degree}</span>
                <span className="date_education">{date}</span>
                <span className="place_education">{place}</span>
                <p className="description_experience">{description}</p>
              </div>
            </section>
          </div>
        </div>
    </div>
  );
};

export default EduExp;
