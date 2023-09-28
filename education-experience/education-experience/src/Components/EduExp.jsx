import React, { useEffect } from 'react'

const {education,setEducation}= useEffect
const EduExp = ({degree,date,place}) => {
  return (
    <div>
      <div class="wrapper" id="educationSection">
        <div class="center-line">
          <a href="#" class="scroll-icon"><i class="fas fa-caret-up"></i></a>
        </div>
        <div class="row row-1">
      <section>
            <img src="./asset/education-svgrepo-com.svg"  class="icon"/>
            <div class="details">
              <span class="title_education">{degree}</span>
              <span class="date_education">{date}</span>
              <span class="place_education">{place}</span>
            </div>
          </section>
          </div>
          <div class="row row-2">
          <section>
            <i class="icon"></i>
            <div class="details">
              <span class="title_master">{degree}</span>
              <span class="master-date-place_education">{date} </span>
              <span class="master-date-place_education">{place}</span>
            </div>
          </section>
        </div>
        <div class="row row-1">
          <section>
            <i class="icon"></i>
            <div class="details">
              <span class="title_education">Bachelor of Science in Mechanical Engineering</span>
              <span class="date_education">June 2017</span>
              <span class="place_education">Lebanese International University</span>
            </div>
          </section>
        </div>
          </div>
    </div>
  );

}

export default EduExp
