import React, { useState } from "react";
import SliderCarousel from "./SliderCarousel";
import Pagination from "react-bootstrap/Pagination";

const makePagination = (num, active, handleOnClick) => {
  let items = [];
  for (let number = 1; number <= num; number++) {
    items.push(
      <Pagination.Item
        onClick={() => handleOnClick(number)}
        key={number}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }
  return items;
};
const Albums = ({ albums }) => {
  const [activePage, setActivePage] = useState(1);
  const handleOnClick = (num) => {
    setActivePage(num);
  };
  const pages = Math.ceil(albums.length / 10);
  const pageNumbers = makePagination(pages, activePage, handleOnClick);
  return (
    <div>
      <Pagination>{pageNumbers}</Pagination>
      {albums
        .slice((activePage - 1) * 10, activePage * 10)
        .map(({ id, title }) => (
          <SliderCarousel
            id={id}
            key={id}
            label={title}
            className="col_album"
          />
        ))}
    </div>
  );
};

export default Albums;
