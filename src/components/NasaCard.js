import React from "react";

const NasaCard = props => {
  return (
    <div className="photo-list">
      <div className="bottom">
        <img src={props.src} />
        {/* <p>{props.film.release_date}</p> */}
      </div>
    </div>
  );
};

export default NasaCard;


