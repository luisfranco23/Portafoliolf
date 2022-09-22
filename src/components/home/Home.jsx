import React from 'react'
import './style.css'
import image from '../../assets/sad.png'

const Home = () => {
  return (
    <div className='home'>
      <section className='home__section'>
        <h3 className='title'>
          Hola, soy</h3>
        <span className='name'>Luis Franco.</span>
        <h1 className='subtitle'>Developer Web Full-Satck.</h1>
        <p className='description'>
          Crear, estilizar y agregar funciones a la web es algo increible ya que podemos plasmar todas las ideas que tengas y sacarle el mayor provecho, me gusta estar creando proyectos y aprendiendo del mundo IT son muchas habilidades por adquirir y mejorar.
        </p>
        <a className='dowland' href='https://drive.google.com/file/d/1P1jG-CC9Hwa5re7nTH1cTnTjwepM4agE/view' target='_blank'>Descargar CV</a>
      </section>
      <main className='main'>
        <h2 className='main__subtitle'>Sobre mí </h2>
        <p className='description'>Mis habilidades técnicas se encuentran en constante crecimiento, he creado diferentes proyectos con los que puedes interactuar en la sección de proyectos, desarrolladas con React Js y sus librerias estilizadas con css y funcionalidades con JavaScript, mi experiencia la baso en mis proyectos tanto personales y proyectos pequeños en una intranet de una empresa.</p>
        <p className='description'>Me gusta estar en constante aprendizaje y trabajar en equipo ya que de esta forma puedo conocer nuevas culturas, formas de trabajo y experiencias que nos hacen mejor personas, soy proactivo y demuestro liderazgo en mi equipo.</p>
        <div className="profile__img">
          <img className='photo__me' src={image} alt="me" />
          <div className="margin">
          </div>
        </div>
        <aside>
          <h3 className='main__subtitle'>Habilidades</h3>
          <div className='skills'>
            <ul className='ul'>
              <li className='skill__item'>Html 5</li>
              <li className='skill__item'>Css 3</li>
              <li className='skill__item'>JavaScript (ES6+)</li>
              <li className='skill__item'>React Js</li>
            </ul>
            <ul className='ul'>
              <li className='skill__item'>Redux</li>
              <li className='skill__item'>Node Js</li>
              <li className='skill__item'>Express</li>
              <li className='skill__item'>PostgreSQL</li>
            </ul>
          </div>
        </aside>
        <section className='contacto'>
          <h3 className="main__subtitle">Contactame</h3>
          <p className='description'>
            Actualmente me encuentro en busqueda de mi primer empleo como developer, en caso tal de que tengas esa oportunidad y te gusta mi perfil, mis proyectos y/o habilidades puedes contactarme, en otro caso puedes dejarme mensaje por <span className='title'>LinkedIn</span> si tienes recomendaciones y/o preguntas .
          </p>
          <aside className='mail'>
            <a className='dowland' href="mailto:lafrancol05@gmail.com">¡Saludame!</a>
          </aside>
        </section>
      </main>
    </div>
  )
}

export default Home