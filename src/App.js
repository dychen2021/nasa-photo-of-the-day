import React, {useState,useEffect} from 'react';
import axios from 'axios';
import NasaPhoto from './Components/NasaPhoto';
import "./App.css";

const dummyData = {
  date: 'x',
  explanation: 'y',
  hdurl: 'z',
  title: 'k'
}

function App() {
  const [data, setData] = useState();
  useEffect(() =>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res =>{
      setData(res);
    })
    .catch(err => console.log(err))
  })
  return (
    <div className="App">
      <NasaPhoto photo={data} />
    </div>
  );
}

export default App;
