import React from 'react'
import './style.css'

const Footer = () => {

  return (
    <footer className='footer'>
      <aside className='icons'>
        <a className='icons__ico' href="http://github.com/luisfranco23" target='_blank'><i class='bx bxl-github'></i></a>
        <a className='icons__ico' href="http://github.com/luisfranco23" target='_blank'><i class='bx bxl-linkedin-square'></i></a>
        <a className='icons__ico' href="http://github.com/luisfranco23" target='_blank'><i class='bx bxl-codepen'></i></a>
        <a className='icons__ico' href="http://github.com/luisfranco23" target='_blank'><i class='bx bxl-gmail' ></i></a>
      </aside>
      <p className='copy'>Luis Franco &copy; 2022</p>
    </footer>
  )
}

export default Footer