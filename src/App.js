import React, {useState,useEffect} from 'react';
import axios from 'axios';
import NasaPhoto from './Components/NasaPhoto';
import styled from 'styled-components';
import "./App.css";

// const dummyData = {
//   date: 'x',
//   explanation: 'y',
//   hdurl: 'z',
//   title: 'k'
// }

const NasaSection = styled.div`
  background-color: magenta;
  width: 60%;
  height: 70%;
`;


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
    <NasaSection>
      <NasaPhoto photo={data} />
    </NasaSection>
  );
}

export default App;
