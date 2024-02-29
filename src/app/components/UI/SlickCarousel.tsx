'use client'

import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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
    dotsClass: 'slick-dots __my-dots',
  }

  return <Slider {...settings}>{children}</Slider>
}
