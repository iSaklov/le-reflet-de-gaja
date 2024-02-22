import Image from 'next/image'
import Carousel from '@/components/UI/SlickCarousel'
import Img01 from '@/assets/images/gallery/01.jpg'
import Img02 from '@/assets/images/gallery/02.jpg'
import Img03 from '@/assets/images/gallery/03.jpg'
import Img04 from '@/assets/images/gallery/04.jpg'
import Img05 from '@/assets/images/gallery/05.jpg'
import Img06 from '@/assets/images/gallery/06.jpg'
// import Img07 from '@/assets/images/gallery/07.jpg'
// import Img08 from '@/assets/images/gallery/08.jpg'
import Img09 from '@/assets/images/gallery/09.jpg'
import Img10 from '@/assets/images/gallery/10.jpg'
import Img11 from '@/assets/images/gallery/11.jpg'
import Img12 from '@/assets/images/gallery/12.jpg'

export default function DevSlider() {
  return (
    <Carousel>
      <Image
        src={Img01}
        alt=''
        placeholder='blur'
        className='aspect-[4/3] h-auto w-full rounded-bl-[400px] rounded-tr-[400px] object-cover'
        sizes='50vw'
      />
      <Image
        src={Img02}
        alt=''
        placeholder='blur'
        className='aspect-[4/3] h-auto w-full rounded-bl-[400px] rounded-tr-[400px] object-cover'
        sizes='50vw'
      />
      <Image
        src={Img03}
        alt=''
        placeholder='blur'
        className='aspect-[4/3] h-auto w-full rounded-bl-[400px] rounded-tr-[400px] object-cover'
        sizes='50vw'
      />
      <Image
        src={Img04}
        alt=''
        placeholder='blur'
        className='aspect-[4/3] h-auto w-full rounded-bl-[400px] rounded-tr-[400px] object-cover'
        sizes='50vw'
      />
      <Image
        src={Img05}
        alt=''
        placeholder='blur'
        className='aspect-[4/3] h-auto w-full rounded-bl-[400px] rounded-tr-[400px] object-cover'
        sizes='50vw'
      />
      <Image
        src={Img06}
        alt=''
        placeholder='blur'
        className='aspect-[4/3] h-auto w-full rounded-bl-[400px] rounded-tr-[400px] object-cover'
        sizes='50vw'
      />
      {/* <Image
        src={Img07}
        alt=''
        placeholder='blur'
        className='aspect-[4/3] h-auto w-full rounded-bl-[400px] rounded-tr-[400px] object-cover'
        sizes='50vw'
      />
      <Image
        src={Img08}
        alt=''
        placeholder='blur'
        className='aspect-[4/3] h-auto w-full rounded-bl-[400px] rounded-tr-[400px] object-cover'
        sizes='50vw'
      /> */}
      <Image
        src={Img09}
        alt=''
        placeholder='blur'
        className='aspect-[4/3] h-auto w-full rounded-bl-[400px] rounded-tr-[400px] object-cover'
        sizes='50vw'
      />
      <Image
        src={Img10}
        alt=''
        placeholder='blur'
        className='aspect-[4/3] h-auto w-full rounded-bl-[400px] rounded-tr-[400px] object-cover'
        sizes='50vw'
      />
      <Image
        src={Img11}
        alt=''
        placeholder='blur'
        className='aspect-[4/3] h-auto w-full rounded-bl-[400px] rounded-tr-[400px] object-cover'
        sizes='50vw'
      />
      <Image
        src={Img12}
        alt=''
        placeholder='blur'
        className='aspect-[4/3] h-auto w-full rounded-bl-[400px] rounded-tr-[400px] object-cover'
        sizes='50vw'
      />
    </Carousel>
  )
}
