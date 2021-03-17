import React from 'react'
import Image from 'next/image'
import {Link} from '../../components/common/Link'

export default function Logo() {
  return (
    <Link href="/">
      <Image src="/images/Logo.svg" alt="Logo" width={500} height={70} />
    </Link>
  )
}
