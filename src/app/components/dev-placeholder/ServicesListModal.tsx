'use client'

import React, { useState, ReactNode } from 'react'
import Image from 'next/image'
import Modal from '@mui/material/Modal'
import Logo from '@/assets/images/logo_gaja.svg'
import Close from '@/assets/images/icons/carbon_close-filled.svg'
import Vector from '@/assets/images/vector.svg'

interface ServicesListModalProps {
  trigger: ReactNode
}

const servicesData = [
  {
    name: 'Kobido',
    price: '79€',
    description: 'Illuminez votre visage avec la finesse japonaise',
  },
  {
    name: 'Californien',
    price: '79€',
    description: 'Une douce évasion vers le lâcher-prise, plénitude solaire',
  },
  {
    name: 'Lomi-Lomi',
    price: '93€',
    description:
      "À chaque mouvement, - un bercement puissant évoquant l'âme apaisante d’Hawaï",
  },
  {
    name: 'Ayurvédique',
    price: '93€',
    description:
      'Revitalisez votre corps avec l&apos;ancienne sagesse indienne',
  },
  {
    name: 'Réflexologie plantaire thaï',
    price: '79€',
    description: 'Stimulez vos points de pression pour un bien-être total',
  },
  {
    name: 'Suédois',
    price: '86€',
    description: 'Libérez les tensions avec des techniques de massage profond',
  },
  {
    name: 'Balinais',
    price: '93€',
    description:
      'Équilibrez votre esprit et votre corps avec des rituels balinais',
  },
  {
    name: 'Femme Enceinte / Bébé',
    price: '86€',
    description:
      'Délicatesse et attention, un massage doux pour des moments précieux',
  },
]

export default function ServicesListModal({ trigger }: ServicesListModalProps) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

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
            className='-mb-8'
          />
          <h2 className='font-display text-xl'>Prix et Services</h2>
          <div className='relative grid grid-cols-1 gap-4 rounded bg-white px-7 py-14 text-deep-purple shadow-md md:grid-cols-2'>
            {servicesData.map(({ name, price, description }) => (
              <div key={name} className='border-b-2 border-zinc-100 pb-4'>
                <div className='font-display flex items-end justify-between text-base uppercase'>
                  <h3>{name}</h3>
                  <span className='mx-2 flex-grow -translate-y-1.5 border-b border-dotted border-deep-purple' />
                  <h3>{price}</h3>
                </div>
                <p className='font-body text-sm'>{description}</p>
              </div>
            ))}
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
          <div className='font-cursive flex items-center justify-center gap-5 text-base'>
            <button className='bg-white px-5 py-0.5 text-deep-purple'>
              Appuyer
            </button>
            <span>
              Applique le code promo exclusif pour les visiteurs du site
            </span>
          </div>
        </div>
      </Modal>
    </div>
  )
}
