import React from 'react'
import Input from './Input'

interface props {
    title: string
}

export default function Fieldset({ title }: props) {
  return (
    <div>
        <h1 className='w-56 text-2xl text-center font-semibold'>{ title }</h1>
        <div className='w-56 flex flex-row justify-around items-center '>
            <Input type='Max'/>
            <Input type='Min'/>
        </div>
    </div>
  )
}
