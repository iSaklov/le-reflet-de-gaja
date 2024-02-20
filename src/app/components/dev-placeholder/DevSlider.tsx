import Image from 'next/image'
import Carousel from '@/components/UI/SlickCarousel'
import Img00 from '@/assets/images/gallery/IMAGE-17-23.jpg'
import Img01 from '@/assets/images/gallery/katherine-hanlon-83RTpUBjyYY-unsplash.jpg'
import Img02 from '@/assets/images/gallery/ale-romo-CLiwQXx7kT8-unsplash.jpg'
import Img03 from '@/assets/images/gallery/toa-heftiba-hBLf2nvp-Yc-unsplash.jpg'
import Img04 from '@/assets/images/gallery/flavia-gava-ArbfcmyhtP8-unsplash.jpg'
import Img05 from '@/assets/images/gallery/christin-hume-0MoF-Fe0w0A-unsplash.jpg'

export default function DevSlider() {
  return (
    <Carousel>
      <Image
        src={Img00}
        alt=''
        placeholder='blur'
        className='h-auto w-full rounded-bl-[400px] rounded-tr-[400px] object-cover'
        sizes='50vw'
      />
      <Image
        src={Img01}
        alt=''
        placeholder='blur'
        className='h-auto w-full rounded-bl-[400px] rounded-tr-[400px] object-cover'
        sizes='50vw'
      />
      <Image
        src={Img02}
        alt=''
        placeholder='blur'
        className='h-auto w-full rounded-bl-[400px] rounded-tr-[400px] object-cover'
        sizes='50vw'
      />
      <Image
        src={Img03}
        alt=''
        placeholder='blur'
        className='h-auto w-full rounded-bl-[400px] rounded-tr-[400px] object-cover'
        sizes='50vw'
      />
      <Image
        src={Img04}
        alt=''
        placeholder='blur'
        className='h-auto w-full rounded-bl-[400px] rounded-tr-[400px] object-cover'
        sizes='50vw'
      />
      <Image
        src={Img05}
        alt=''
        placeholder='blur'
        className='h-auto w-full rounded-bl-[400px] rounded-tr-[400px] object-cover'
        sizes='50vw'
      />
    </Carousel>
  )
}
