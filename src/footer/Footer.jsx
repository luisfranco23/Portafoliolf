import React, { useRef } from 'react'

const Footer = () => {

    const p = useRef()
    console.log(p)

  return (
    <footer className='footer'>
        <p ref={p}></p>
    </footer>
  )
}

export default Footer