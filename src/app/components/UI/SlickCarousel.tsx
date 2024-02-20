'use client'

import React from 'react'
import Slider from 'react-slick'

interface CarouselProps {
  children: React.ReactNode
}

export default function Carousel({ children }: CarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnFocus: true,
    useCSS: true,
  }

  return <Slider {...settings}>{children}</Slider>
}
