import React from 'react'
import { Link } from 'react-router-dom'
import sad from '../../assets/sad.png'
import './style404.css'

const Page404 = () => {
  return (
    <section className='section__404'>
      <img className='img__404' src={sad} alt="404" />
      <h1 className='title__404'>404</h1>
      <p className='subtitle__404'>Ooops, page not found</p>
      <p className='paragraph__404'>We're sorry. the page you requested could not be found. Plase go back to the homepage</p>
      <Link to='/' className='link__404'>
        <p className='button__404'>
          Home
        </p>
      </Link>
    </section>
  )
}

export default Page404