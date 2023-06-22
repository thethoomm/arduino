import React from 'react'

interface props {
    label: string
}

export default function Button({ label }: props) {
  return (
    <button className='bg-blue-900 text-zinc-50 font-semibold'>{ label }</button>
  )
}
