
import React, { useEffect, useState } from 'react';
import EduExp from './Components/EduExp';
import LoginPage from './Components/LoginPage';
import './App.css';

function App() {
  const [educationData, setEducationData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);
  const [showExperience, setShowExperience] = useState(false);
  

  const toggleExperience = () => {
    setShowExperience(!showExperience);
  };

  useEffect(() => {
    fetchData();
    fetchExperienceData()
  }, []);

  const fetchData = () => {
    fetch('http://localhost:5000/education/getAll') 
      .then((response) => response.json())
      .then((data) => setEducationData(data.data))
      .catch((error) => console.log(error));
  };

  const fetchExperienceData = () => {
    fetch('http://localhost:5000/experience/getAll') 
      .then((response) => response.json())
      .then((data) => setExperienceData(data.data))
      .catch((error) => console.log(error));
  };

  // const fetchLoginPageData = () => {
  //   fetch('http://localhost:5000/admin/get')
  //   .then((response) => response.json())
  //   .then((data) => setLoginPage(data.data))
  //   .catch((error) => console.log(error));
  // };


  return (
    <div className="App">
      <div className="buttons__education-experience">
        <button
          className={`btn_education ${!showExperience ? 'active' : ''}`}
          onClick={() => toggleExperience()}
        >
          Education
        </button>
        <button
          className={`btn_experience ${showExperience ? 'active' : ''}`}
          onClick={() => toggleExperience()}
        >
          Experience
        </button>
      </div>
      {(showExperience ? experienceData : educationData).map((item, index) => (
        <EduExp
          key={index}
          degree={showExperience ? item.position : item.degree}
          date={item.date}
          place={item.place}
          section={showExperience ? 'experience' : 'education'}
          description={item.description}
          row1={index%2===0 ? true : false}
        />
      ))}
      <LoginPage/>
    </div>
  );
}

export default App;
