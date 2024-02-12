'use client'

import React, { useState, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import Alert from '@mui/material/Alert'
import IconButton from '@mui/material/IconButton'
import Collapse from '@mui/material/Collapse'
import Button from '@mui/material/Button'
import { classNames } from '@/utils/classNames'
import CloseIcon from '@mui/icons-material/Close'

interface CustomDevAlertProps {
  title?: string
  icon?: StaticImageData
  className?: string
  children?: React.ReactNode
  trigger?: React.ReactNode
  show?: boolean
}

export default function CustomDevAlert({
  title,
  icon,
  className,
  children,
  trigger,
  show = true,
}: CustomDevAlertProps) {
  const [open, setOpen] = useState(show)

  return (
    <div className={classNames('container shadow-md', className || '')}>
      <Collapse in={open}>
        <Alert
          icon={false}
          action={
            <IconButton
              aria-label='ferme'
              color='inherit'
              size='small'
              onClick={() => {
                setOpen(false)
              }}
            >
              <CloseIcon fontSize='inherit' />
            </IconButton>
          }
          sx={{ bgcolor: '#7C2248', color: 'white' }}
        >
          {icon && (
            <Image
              src={icon}
              alt=''
              width={48}
              height={48}
              className='float-left mr-2 brightness-0 invert'
            />
          )}
          {title && <h2 className='text-lg font-bold'>{title}</h2>}
          <div className='font-body text-base'>{children}</div>
        </Alert>
      </Collapse>
      {trigger && (
        <Button
          disabled={open}
          variant='outlined'
          onClick={() => {
            setOpen(true)
          }}
        >
          Re-open
        </Button>
      )}
    </div>
  )
}
