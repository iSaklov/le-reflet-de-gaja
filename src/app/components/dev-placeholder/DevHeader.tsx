'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { classNames } from '@/utils/classNames'
import HeaderButton from '@/components/UI/HeaderButton'
import Logo from '@/components/UI/Logo'
import Lotus from '@/assets/images/lotus.svg'
import CircleLeft from '@/assets/images/circle-left.svg'
import CircleRight from '@/assets/images/circle-right.svg'
import HeaderImg from '@/assets/images/header.png'
import PhoneIcon from '@/assets/images/icons/ph_phone-light.svg'
import InstagramIcon from '@/assets/images/icons/circum_instagram.svg'
import FacebookIcon from '@/assets/images/icons/circum_facebook.svg'
import WebIcon from '@/assets/images/icons/arcticons_emoji-web.svg'

export default function DevHeader() {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <header className='relative h-auto'>
      <div className='fixed inset-0 -z-10 min-h-screen w-full overflow-hidden md:min-h-[100vh]'>
        <Image
          src={HeaderImg}
          alt=''
          fill
          priority
          placeholder='blur'
          className='h-full w-full object-cover object-center'
        />
      </div>
      <div className='container mx-auto flex min-h-screen flex-col  items-center justify-center px-2 md:min-h-[100vh]'>
        <h2 className='text-center font-header text-3xl lowercase md:text-4xl'>
          Offrez-vous un moment <br className='hidden md:inline' /> de détente
        </h2>
        <div
          onClick={handleClick}
          className={classNames(
            'perspective-1000 preserve-3d relative h-auto w-full cursor-pointer transition-all duration-1000 md:max-w-xl',
            isFlipped ? 'rotateY-180 my-4 shadow-xl' : 'scale-75 shadow-lg'
          )}
        >
          <div className='backface-hidden absolute flex h-full w-full items-center justify-center bg-gaja-gradient p-2 md:p-4'>
            <Logo />
          </div>
          <div className='backface-hidden rotateY-180 text-gaja-gradient flex h-full w-full flex-col items-center justify-center gap-y-2 bg-white p-2 pb-4 md:p-4 md:pb-6'>
            <h2 className='bg-gradient-to-r from-burgundy-sunset to-deep-purple bg-clip-text text-center font-display text-xl text-transparent md:text-2xl'>
              Le Reflet de Gaja <br /> Clara Launay
            </h2>
            <div className='flex w-full'>
              <div className='relative flex flex-shrink-0 items-center justify-center'>
                <p
                  className={classNames(
                    'z-10 text-nowrap p-4 text-center text-xs text-burgundy-sunset min-[414px]:text-[13px] min-[430px]:text-sm min-[540px]:p-6 min-[540px]:text-base md:text-lg'
                  )}
                >
                  Praticienne en <br /> massage du monde <br />
                  Spécialiste en massage <br /> femme enceinte & bébé
                </p>
                <Image src={CircleLeft} alt='' className='absolute w-full' />
              </div>
              <div className='flex-grow'>
                <Image src={Lotus} alt='Lotus' className='w-full' />
              </div>
              <div className='relative flex flex-shrink-0 items-center justify-center'>
                <ul
                  className={classNames(
                    'z-10 text-nowrap p-4 text-xs leading-loose text-deep-purple min-[414px]:text-sm min-[414px]:leading-6 min-[430px]:leading-7 min-[540px]:p-7 min-[540px]:text-base min-[540px]:leading-8 md:text-lg md:leading-9'
                  )}
                >
                  <li className='flex items-center first:ml-2 last:ml-2'>
                    <a
                      href='tel:+33763562215'
                      className='transition-transform duration-300 hover:scale-110'
                    >
                      <Image
                        src={PhoneIcon}
                        alt=''
                        width={24}
                        className='mr-1 inline-block w-5 min-[540px]:w-8'
                      />
                      07.63.56.22.15
                    </a>
                  </li>
                  <li className='flex items-center transition-transform duration-300 first:ml-2 last:ml-2'>
                    <a
                      href='https://instagram.com/refletdegaja'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='transition-transform duration-300 hover:scale-110'
                    >
                      <Image
                        src={InstagramIcon}
                        alt=''
                        width={24}
                        className='mr-1 inline-block w-5 min-[540px]:w-8'
                      />
                      .com/refletdegaja
                    </a>
                  </li>
                  <li className='flex items-center transition-transform duration-300 first:ml-2 last:ml-2'>
                    <a
                      href='https://facebook.com/refletdegaja'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='transition-transform duration-300 hover:scale-110'
                    >
                      <Image
                        src={FacebookIcon}
                        alt=''
                        width={24}
                        className='mr-1 inline-block w-5 min-[540px]:w-8'
                      />
                      .com/refletdegaja
                    </a>
                  </li>
                  <li className='flex items-center transition-transform duration-300 first:ml-2 last:ml-2'>
                    <Link
                      href='/'
                      className='transition-transform duration-300 hover:scale-110'
                    >
                      <Image
                        src={WebIcon}
                        alt=''
                        width={24}
                        className='mr-1 inline-block w-5 min-[540px]:w-8'
                      />
                      refletdegaja.fr
                    </Link>
                  </li>
                </ul>
                <Image src={CircleRight} alt='' className='absolute w-full' />
              </div>
            </div>
          </div>
        </div>
        <HeaderButton onClick={handleClick} isFlipped={isFlipped}>
          Réservez dès maintenant
        </HeaderButton>
      </div>
    </header>
  )
}
