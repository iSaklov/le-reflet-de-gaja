'use client'

import React, { useState, useEffect, ReactNode } from 'react'
import Image from 'next/image'
import Modal from '@mui/material/Modal'
import Backdrop from '@mui/material/Backdrop'
import Fade from '@mui/material/Fade'
import Alert from '@mui/material/Alert'
import CustomDevAlert from '@/components/UI/CustomDevAlert'
import { classNames } from '@/utils/classNames'
import Logo from '@/assets/images/logo_gaja.svg'
import Close from '@/assets/images/icons/carbon_close-filled.svg'
import Vector from '@/assets/images/vector.svg'
import InstagramIcon from '@/assets/images/icons/circum_instagram.svg'
import FacebookIcon from '@/assets/images/icons/circum_facebook.svg'

interface ServicesListModalProps {
  trigger: ReactNode
}

const servicesData = [
  {
    name: 'Kobido',
    price: 79,
    description: 'Illuminez votre visage avec la finesse japonaise',
  },
  {
    name: 'Réflexologie plantaire thaï',
    price: 79,
    description: 'Stimulez vos points de pression pour un bien-être total',
  },
  {
    name: 'Californien',
    price: 79,
    description: 'Une douce évasion vers le lâcher-prise, plénitude solaire',
  },
  {
    name: 'Suédois',
    price: 86,
    description: 'Libérez les tensions avec des techniques de massage profond',
  },
  {
    name: 'Lomi-Lomi',
    price: 93,
    description:
      "À chaque mouvement, - un bercement puissant évoquant l'âme apaisante d’Hawaï",
  },
  {
    name: 'Balinais',
    price: 93,
    description:
      'Équilibrez votre esprit et votre corps avec des rituels balinais',
  },
  {
    name: 'Ayurvédique',
    price: 93,
    description: "Revitalisez votre corps avec l'ancienne sagesse indienne",
  },
  {
    name: 'Femme Enceinte / Bébé',
    price: 86,
    description:
      'Délicatesse et attention, un massage doux pour des moments précieux',
  },
]

export default function ServicesListModal({ trigger }: ServicesListModalProps) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [discountApplied, setDiscountApplied] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  const applyDiscount = () => {
    // setDiscountApplied(!discountApplied)
    // setShowAlert(false)
    setDiscountApplied(true)
  }

  useEffect(() => {
    if (discountApplied) {
      const timer = setTimeout(() => {
        setShowAlert(true)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [discountApplied])

  return (
    <div>
      <div onClick={handleOpen} className='cursor-pointer'>
        {trigger}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='services-modal-title'
        aria-describedby='services-modal-description'
        keepMounted
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        className='flex items-center justify-center md:overflow-y-auto'
      >
        <Fade in={open}>
          <div
            className={classNames(
              'relative flex h-full w-full flex-col items-center justify-start gap-y-5 overflow-y-scroll bg-gaja-gradient px-4 pb-10 pt-5 md:max-w-xl xl:max-w-2xl',
              showAlert ? 'md:h-full' : 'md:h-max'
            )}
          >
            <Image
              src={Close}
              alt='Fermer la liste des services'
              width={16}
              height={16}
              onClick={handleClose}
              className='absolute right-2 top-2 cursor-pointer transition-transform duration-300 hover:scale-110'
            />
            <Image
              src={Logo}
              alt='Logo le Reflet de Gaja'
              width={120}
              className={classNames(
                '-mb-8',
                discountApplied ? 'animate-pulse' : ''
              )}
            />
            <h2 id='services-modal-title' className='font-display text-xl'>
              Prix et Services
            </h2>
            <h3 id='services-modal-description' className='sr-only'>
              Découvrez la liste détaillée de nos services et les tarifs
              correspondants
            </h3>
            <div className='relative grid auto-rows-fr grid-cols-1 gap-y-4 rounded bg-white px-4 pb-8 pt-12 text-deep-purple shadow-md md:grid-cols-2 md:gap-x-8'>
              {servicesData.map(({ name, price, description }) => {
                const discountedPrice = Math.round(price * 0.7)

                return (
                  <div
                    key={name}
                    className='flex flex-col gap-y-1 border-b-2 border-zinc-100 pb-4'
                  >
                    <div className='flex items-end justify-between font-display uppercase'>
                      <h3>{name}</h3>
                      <span className='mx-2 flex-auto -translate-y-1.5 border-b border-dotted border-deep-purple' />
                      <div className='relative'>
                        <h3
                          className={classNames(
                            'absolute transform transition duration-500 ease-in-out',
                            discountApplied
                              ? '-translate-y-3/4 scale-105 opacity-100'
                              : 'scale-50 opacity-0'
                          )}
                        >{`${discountedPrice}€`}</h3>
                        <h3
                          className={classNames(
                            'transform transition duration-500 ease-in-out',
                            discountApplied
                              ? 'line-through decoration-burgundy-sunset'
                              : ''
                          )}
                        >{`${price}€`}</h3>
                      </div>
                    </div>
                    <p className='font-body text-sm'>{description}</p>
                  </div>
                )
              })}
              <Image
                src={Vector}
                alt=''
                className='absolute top-1/2 h-4/6 w-min -translate-y-1/2 transform md:left-1/2 md:-translate-x-1/2'
              />
            </div>
            <span className='text-justify font-body text-sm font-semibold'>
              * Nos tarifs couvrent une séance de massage de 1h. Veuillez
              prévoir jusqu&apos;à 1h30 en tout, incluant le temps pour un bain
              de pieds relaxant ainsi que l&apos;installation et le rangement de
              l&apos;équipement nécessaire.
            </span>
            <div className='relative flex w-full items-center justify-between gap-x-4 pl-[27.5px] font-cursive text-base xl:gap-x-8'>
              <button
                onClick={applyDiscount}
                className={classNames(
                  'relative box-border w-20 py-0.5 shadow-md transition duration-500 ease-in-out focus:outline-none',
                  discountApplied
                    ? 'pointer-events-none cursor-default border border-white bg-deep-purple text-white'
                    : //  ? 'border border-white bg-deep-purple text-white'
                      'border border-transparent bg-white text-deep-purple hover:bg-zinc-100'
                )}
              >
                {discountApplied ? 'Site30' : 'Appliquer'}
              </button>
              {discountApplied && (
                <span className='absolute left-0 top-full z-10 mt-1 transform text-center font-body text-xs'>
                  Veuillez mentionner ce code <br /> lors de la réservation
                </span>
              )}
              <span className='relative flex-auto md:whitespace-nowrap'>
                <span
                  className={classNames(
                    'absolute transition duration-500 ease-in-out',
                    discountApplied
                      ? 'translate-y-full opacity-0'
                      : '-translate-y-1/2 opacity-100'
                  )}
                >
                  Profitez de{' '}
                  <span className='relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500'>
                    <span className='relative text-white'>-30%</span>
                  </span>{' '}
                  exclusivement pour les visiteurs du site avec le code promo
                </span>
                <span
                  className={classNames(
                    'absolute transition duration-500 ease-in-out',
                    discountApplied
                      ? '-translate-y-1/2 opacity-100'
                      : 'translate-y-full opacity-0'
                  )}
                >
                  Offre de bienvenue : bénéficiez de -30% sur votre{' '}
                  <span className='relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500'>
                    <span className='relative text-white'>
                      première prestation
                    </span>
                  </span>
                </span>
              </span>
            </div>
            {showAlert && (
              <CustomDevAlert title='Restez Connectés' className='mt-4'>
                <p className='my-4 text-justify'>
                  Restez à l&apos;écoute pour nos offres spéciales dédiées à{' '}
                  <span className='relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-deep-purple'>
                    <span className='relative text-white'>
                      tous nos clients
                    </span>
                  </span>{' '}
                  en nous suivant sur les réseaux sociaux:
                </p>
                <div className='flex items-center justify-center gap-x-10'>
                  <a
                    href='https://instagram.com/refletdegaja'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='transition-transform duration-300 hover:scale-110'
                  >
                    <Image
                      src={InstagramIcon}
                      alt='lien vers Instagram'
                      width={32}
                      height={32}
                      className='brightness-0 invert'
                    />
                  </a>
                  <a
                    href='https://facebook.com/refletdegaja'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='transition-transform duration-300 hover:scale-110'
                  >
                    <Image
                      src={FacebookIcon}
                      alt='lien vers Facebook'
                      width={32}
                      height={32}
                      className='brightness-0 invert'
                    />
                  </a>
                </div>
              </CustomDevAlert>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
