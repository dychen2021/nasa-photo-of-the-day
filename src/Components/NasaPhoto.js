import React from 'react'
import styled from 'styled-components';

const HeadThreeTitle = styled.h3`
  font-style: bold;
  color: purple;
  font-size: 2rem;
  margin-bottom: 2%;
`;

const NasaPhoto = (props) =>{
    return (
    <div className="nasa-photo-wrapper">
        <HeadThreeTitle>{props.photo.title}</HeadThreeTitle>
        <p>{props.photo.date}</p>
        <img src={props.photo.hdurl} alt="nasa img"/>
        <p className='explanation'>{props.photo.explanation}</p>
    </div>
    )
}

export default NasaPhoto;