import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";
export default function NasaList() {
  const [photos, setPhotos] = useState([]);

  const didUpdate = () => {
    // step 3 -> axios calls API
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-11-17")
      .then(response => {
        // step 4 --> response.data = [film, film]

        // step 5 --> set state of films = new data
        console.log(response);

        setPhotos(response.data.url);
      })
      .catch(error => console.log(error));
  };

  useEffect(didUpdate, []);
  return (
    <div className="photo">
      {<NasaCard src={photos} />
      
      /* {photos.map(item => {
        return <NasaCard photo={item} />;
      })} */}
    </div>
  );
}

