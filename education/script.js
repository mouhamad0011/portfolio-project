
//read more button
function myFunction() {
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
  }
  function myFunction1() {
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
    }
  
  //toggle education-experience
  function showSection(section) {
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
    }