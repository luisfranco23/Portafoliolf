import React, { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './style.css'

const Header = () => {

    const navbar = useRef()
    const openCloseNav = () => {
        navbar.current.classList.toggle('navbar__open')
    }

    return (
        <header className='header'>
            <h1 className='header__logo'>
                <Link to='/' className='link logo' >
                    &lt;LF
                    <span className='barra'>/</span>&gt;
                </Link>
            </h1>
            <div className="header__menu" onClick={openCloseNav}>
                <i className='bx bx-menu-alt-right'></i>
            </div>
            <nav className='navbar' ref={navbar}>
                <ul className="navbar__list">
                    <li className='navbar__link' onClick={openCloseNav}>
                        <NavLink to='/' className='link'>
                            <p>Sobre mi</p>
                        </NavLink>
                    </li>
                    <li className='navbar__link' onClick={openCloseNav}>
                        <NavLink to='/projects' className='link'>
                            <p>Projects</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header