'use client'
import type { FC } from 'react'
import classNames from '@/utils/classnames'
import Divider from '../divider'

type LogoSiteProps = {
  className?: string
}

const LogoSite: FC<LogoSiteProps> = ({
  className,
}) => {
  return (
    <img
      src={'/logo/logo.png'}
      className={classNames('block w-[22.651px] h-[24.5px]', className)}
      alt='DTCT'
    />
  )
}

export default LogoSite
