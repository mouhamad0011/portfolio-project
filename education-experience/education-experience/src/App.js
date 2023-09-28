import logo from './logo.svg';
import './App.css';
import EduExp from './Components/EduExp';
import { useEffect, useState } from 'react';

function App() {

const[data,setData] = useState([])

const fetchData = () => {
  fetch('http://localhost:5000/education/getAll')
  .then ((response)=> response.json())
  .then((data)=>setData(data.data))
  .catch((error)=>console.log(error));
};

useEffect(()=>{
  fetchData()
},[])
  return (
    <div className="App">
    {data.map((EduExp)=>{
      <EduExp
      degree={EduExp.degree}
      date={EduExp.date}
      place={EduExp.place}
      />
    })}
    </div>
  );
}

export default App;
