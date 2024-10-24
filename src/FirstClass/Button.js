import React from 'react'

export default function Button(props) {
         const {title} = props
  return (
    <button className='w-24 py-1 bg-green-400'>{title}</button>
  )
}
