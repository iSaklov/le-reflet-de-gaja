import Image from 'next/image'
// import Gaja from '@/assets/images/gaja.svg'
import Gaja from '@/assets/images/logo.svg'
import Vector from '@/assets/images/vector.svg'

export default function Logo() {
  return (
    <div className='flex items-center justify-center min-[430px]:gap-x-2 min-[540px]:gap-x-4'>
      <Image src={Gaja} alt='' className='h-auto w-32 md:w-36' />
      <div className='relative flex flex-col items-center justify-center gap-y-4 text-center'>
        <h1 className='font-display text-2xl tracking-wider md:text-3xl xl:text-3xl'>
          Le Reflet de <br /> <span className='text-6xl md:text-7xl'>Gaja</span>
        </h1>
        <Image
          src={Vector}
          alt=''
          className='absolute left-1/2 top-1/2 mt-2 h-[180px] w-auto -translate-x-1/2 -translate-y-1/3 rotate-90 transform brightness-0 invert md:mt-3 md:h-[200px]'
        />
        <h2 className='text-lg md:text-xl'>massage bien-être à domicile</h2>
      </div>
    </div>
  )
}
