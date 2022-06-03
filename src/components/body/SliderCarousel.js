import { Carousel } from "react-bootstrap";

import React, { useEffect, useState } from "react";
import { getFoto } from "../../api/UserService";

const SliderCarousel = ({ id, label }) => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    getFoto(id)
      .then((resp) => {
        setPhotos(resp.data);
      })
      .catch((err) => {
        console.log("hata olustu");
      });
  }, []);
  return (
    <div>
      {label}
      <Carousel>
        {photos.map(({ title, url }) => (
          <Carousel.Item>
            <img className="d-block w-100" src={url} alt="second" />
            <Carousel.Caption>
              <h3>{title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default SliderCarousel;
