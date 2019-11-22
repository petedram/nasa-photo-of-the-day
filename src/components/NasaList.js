import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";
import Example from "./Carousel";


export default function NasaList() {
  const [photos, setPhotos] = useState([]);
  const [photoDate, setPhotoDate] = useState([]);
  const [photoTitle, setPhotoTitle] = useState([]);
  const [dayParam, setDayParam] = useState(19);

    const addOne = e => {
        setDayParam(dayParam + 1);
        console.log(dayParam);
    };

    const subtractOne = e => {
        setDayParam(dayParam - 1);
        console.log(dayParam);
    };


  const didUpdate = () => {
    // step 3 -> axios calls API
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=l1F5qnafndDU3dISShJvia5q0u7ZUc6GpcTnWFng&date=2019-11-"+dayParam)
      .then(response => {
        // step 4 --> response.data = [film, film]

        // step 5 --> set state of films = new data
        console.log(response);

        setPhotos(response.data.url);
        setPhotoDate(response.data.date);
        setPhotoTitle(response.data.title);
      })
      .catch(error => console.log(error));
  };
  useEffect(didUpdate, [dayParam]);

  return (
    <div className="photo">
    <Example src={photos} alt={photoTitle} />
    {<NasaCard src={photos} photoDate={photoDate} alt={photoTitle} addOne={addOne} subtractOne={subtractOne}/>
      
      /* {photos.map(item => {
        return <NasaCard photo={item} />;
      })} */}
    </div>
  );
  
}

