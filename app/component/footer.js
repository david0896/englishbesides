import React from 'react'
import Link from 'next/link'

const footer = () => {
  return (
    <>
        <div className=' bg-[#705669] p-10'>
            <p className='text-center text-base text-white'>
                English Besides 2024 | power by <Link href="#" className="font-semibold">Codemallow</Link>
            </p>
        </div>
    </>
  )
}

export default footer