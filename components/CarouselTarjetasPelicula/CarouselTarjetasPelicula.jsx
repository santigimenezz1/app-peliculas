"use client"
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TarjetaPelicula from "../TarjetaPelicula/TarjetaPelicula";
import './carouselTarjetaPelicula.css';
import Link from 'next/link';

export default function CarouselTarjetasPelicula({ data, text }) {
  if (!data) {
    // Verifica si los datos aún no se han cargado
    return null;
  }

  const CustomPrevArrow = (props) => (
    <button className="slick-arrow slick-prev" onClick={props.onClick}>
      Anterior
    </button>
  );

  const CustomNextArrow = (props) => (
    <button className="slick-arrow slick-next" onClick={props.onClick}>
      Siguiente
    </button>
  );

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div style={{ paddingLeft: "35px", paddingRight: "35px" }}>
      <Slider {...settings}>
        {data.results.map((movie) => (
         <Link href={`/detalle/${movie.id}`}>
         <TarjetaPelicula movie={movie} />
         </Link>
        ))}
      </Slider>
    </div>
  );
}
