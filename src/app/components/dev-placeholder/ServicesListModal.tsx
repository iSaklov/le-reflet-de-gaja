'use client'

import React, { useState, ReactNode } from 'react'
import Image from 'next/image'
import Modal from '@mui/material/Modal'
import { classNames } from '@/utils/classNames'
import Logo from '@/assets/images/logo_gaja.svg'
import Close from '@/assets/images/icons/carbon_close-filled.svg'
import Vector from '@/assets/images/vector.svg'

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
    name: 'Californien',
    price: 79,
    description: 'Une douce évasion vers le lâcher-prise, plénitude solaire',
  },
  {
    name: 'Lomi-Lomi',
    price: 93,
    description:
      "À chaque mouvement, - un bercement puissant évoquant l'âme apaisante d’Hawaï",
  },
  {
    name: 'Ayurvédique',
    price: 93,
    description:
      'Revitalisez votre corps avec l&apos;ancienne sagesse indienne',
  },
  {
    name: 'Réflexologie plantaire thaï',
    price: 79,
    description: 'Stimulez vos points de pression pour un bien-être total',
  },
  {
    name: 'Suédois',
    price: 86,
    description: 'Libérez les tensions avec des techniques de massage profond',
  },
  {
    name: 'Balinais',
    price: 93,
    description:
      'Équilibrez votre esprit et votre corps avec des rituels balinais',
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
  const applyDiscount = () => {
    setDiscountApplied(true)
  }

  return (
    <div>
      <div onClick={handleOpen} className='cursor-pointer'>
        {trigger}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-title'
        aria-describedby='modal-description'
        className='flex items-center justify-center'
      >
        <div className='relative flex h-full w-full flex-col items-center justify-start gap-y-5 overflow-y-scroll bg-gaja-gradient px-5 pb-10 pt-5 md:h-max md:max-w-xl xl:max-w-2xl'>
          <Image
            src={Close}
            alt='fermer'
            width={16}
            height={16}
            onClick={handleClose}
            className='absolute right-4 top-4 cursor-pointer transition-transform duration-300 hover:scale-110'
          />
          <Image
            src={Logo}
            alt='Logo le Reflet de Gaja'
            width={120}
            className={classNames(
              '-mb-8',
              discountApplied ? 'animate-bounce' : ''
            )}
          />
          <h2 className='font-display text-xl'>Prix et Services</h2>
          <div className='relative grid grid-cols-1 gap-4 rounded bg-white px-7 py-14 text-deep-purple shadow-md md:grid-cols-2 md:gap-x-8'>
            {servicesData.map(({ name, price, description }) => {
              const discountedPrice = Math.round(price * 0.7)

              return (
                <div key={name} className='border-b-2 border-zinc-100 pb-4'>
                  <div className='font-display flex items-end justify-between text-base uppercase'>
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
              className='absolute top-1/2 w-4 -translate-y-1/2 transform md:left-1/2 md:w-2 md:-translate-x-1/2'
            />
          </div>
          <span className='font-body text-justify text-sm font-semibold'>
            * Nos tarifs couvrent une séance de massage de 1h. Veuillez prévoir
            jusqu&apos;à 1h30 en tout, incluant le temps pour un bain de pieds
            relaxant ainsi que l&apos;installation et le rangement de
            l&apos;équipement nécessaire.
          </span>
          <div className='font-cursive relative flex items-center justify-center gap-5 text-base'>
            <button
              onClick={applyDiscount}
              className={classNames(
                'relative w-24 bg-white px-4 py-0.5 text-deep-purple shadow-md focus:outline-none',
                discountApplied ? 'pointer-events-none cursor-default' : ''
              )}
            >
              <span
                className={classNames(
                  'transition duration-500 ease-in-out hover:bg-zinc-100',
                  discountApplied
                    ? 'opacity-0'
                    : 'absolute inset-0 flex items-center justify-center opacity-100'
                )}
              >
                Appliquer
              </span>
              <span
                className={classNames(
                  'transition duration-500 ease-in-out',
                  discountApplied
                    ? 'absolute inset-0 flex items-center justify-center bg-deep-purple text-white opacity-100 ring-1 ring-white ring-offset-0'
                    : 'opacity-0'
                )}
              >
                Site30
              </span>
            </button>
            {discountApplied && (
              <span className='font-body absolute left-0 top-full mt-1 -translate-x-5 transform whitespace-nowrap text-center text-xs'>
                Veuillez mentionner ce code <br /> lors de la réservation
              </span>
            )}
            <span>
              Applique le code promo{' '}
              <span className='relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500'>
                <span className='relative text-white'>-30%</span>
              </span>{' '}
              exclusif <br className='md:hidden' /> pour les visiteurs du site
            </span>
          </div>
        </div>
      </Modal>
    </div>
  )
}
