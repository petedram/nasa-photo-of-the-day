import React from "react";
import Button from 'react-bootstrap/Button';


const NasaCard = props => {
  return (
    <div className="photo-list">
      <div className="bottom">
      <p><Button variant='outline-primary' onClick={props.subtractOne}>{'< BACK'}</Button>
      <strong> {props.photoDate} </strong>
      <Button variant='outline-primary' onClick={props.addOne}>{'FORWARD >'}</Button></p>
      <img src={props.src} alt={props.alt} />
      </div>
    </div>
  );
};

export default NasaCard;


