import React from 'react';


function EducationExperience() {
    const showSection = (section) => {
        if (section === 'education') {
            document.getElementById('educationSection').style.display = 'block';
            document.getElementById('experienceSection').style.display = 'none';
            document.querySelector('.btn_education').classList.add('active');
            document.querySelector('.btn_experience').classList.remove('active');
          } else if (section === 'experience') {
            document.getElementById('educationSection').style.display = 'none';
            document.getElementById('experienceSection').style.display = 'block';
            document.querySelector('.btn_education').classList.remove('active');
            document.querySelector('.btn_experience').classList.add('active');
          }
    };
  
    const myFunction = () => {
        let dots = document.getElementById("dots");
        let moreText = document.getElementById("more");
        let btnText = document.getElementById("myBtn");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more"; 
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less"; 
          moreText.style.display = "inline";
        }
    };
  
    const myFunction1 = () => {
        let dots1 = document.getElementById("dots1");
        let moreText1 = document.getElementById("more1");
        let btnText1 = document.getElementById("myBtn1");
      
        if (dots1.style.display === "none") {
          dots1.style.display = "inline";
          btnText1.innerHTML = "Read more"; 
          moreText1.style.display = "none";
        } else {
          dots1.style.display = "none";
          btnText1.innerHTML = "Read less"; 
          moreText1.style.display = "inline";
        }
    };
    return (
        <div>
          <div className="buttons__education-experience">
            <button className="btn_education active" onClick={() => showSection('education')}>Education</button>
            <button className="btn_experience" onClick={() => showSection('experience')}>Experience</button>
          </div>
    
          <div className="wrapper" id="educationSection">
          <div class="wrapper" id="educationSection">
        <div class="center-line">
          <a href="#" class="scroll-icon"><i class="fas fa-caret-up"></i></a>
        </div>
        <div class="row row-1">
          <section>
            <img src="./asset/education-svgrepo-com.svg"  class="icon"/>
            <div class="details">
              <span class="title_education">Full-Stack Web Developer</span>
              <span class="date_education">June 2023</span>
              <span class="place_education">Codi</span>
            </div>
          </section>
        </div>
        
        <div class="row row-2">
          <section>
            <i class="icon"></i>
            <div class="details">
              <span class="title_master">Master of Science in Mechanical Engineering</span>
              <span class="master-date-place_education">June 2019 </span>
              <span class="master-date-place_education">Lebanese International University</span>
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

          {/* experience section */}
          <div className="wrapper" id="experienceSection" style={{ display: 'none' }}>
          <div class="center-line">
          <a href="#" class="scroll-icon"><i class="fas fa-caret-up"></i></a>
        </div>
        <div class="row row-1">
          <section>
            <img src="./asset/work-case-svgrepo-com.svg"  class="icon"/>
            <div class="details">
              <span class="title_education">Full-Stack Web Developer</span>
              <span class="date_education">Nov. 2022 - June 2023</span>
              <span class="place_education">Codi / Beirut, Lebanon</span>
              <p class="description_experience">-UI: Design and build with React and Bootstrap.<br/>
                -Backend: Develop using Node.js, Laravel, and Express.js.<br/>
                -Data: Utilize MongoDB, MySQL, and PhpMyAdmin.
                <span id="dots">...</span><span id="more">
                    -Testing: Ensure bug-free performance through thorough testing.<br/>
                    -Documentation: Create development docs and user manuals.<br/>
                    -Presentation: Demo projects to committee.<br/>
                    -Collaboration: Use Scrum framework for team roles.<br/>
                    -Client Engagement: Schedule meetings and follow-ups to meet client needs.</span>
                </p>
                 <button onclick="myFunction()" id="myBtn">Read more</button>
            </div>
          </section>
        </div>
        
        <div class="row row-2">
          <section>
            <i class="icon"></i>
            <div class="details">
              <span class="title_master">Site Engineer | Project Manager</span>
              <span class="master-date-place_education">Sep. 2017 - Jan. 2019</span>
              <span class="master-date-place_education">Premium Construction and Engineering / Beirut, Lebanon</span>
              <p class="description_experience">
                -Supervision on all workers and orders on site.<br/>
                      -Resolve any unexpected technical difficulties and other problems that may arise. <br/>
                      <span id="dots1">...</span><span id="more1"/>
                        -Communicate with clients and their representatives (architects, engineers, and surveyors), including attending regular meetings to keep them informed of progress.<br/> 
                      -Resolve any unexpected technical difficulties and other problems that may arise.
              </p>
              <button onclick="myFunction1()" id="myBtn1">Read more</button>
            </div>
          </section>
        </div>

          </div>
        </div>
      );
    }
    
    export default EducationExperience;