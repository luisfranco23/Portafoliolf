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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, consequatur deserunt quisquam, tempora explicabo obcaecati iusto reprehenderit assumenda incidunt molestias ullam eligendi, nobis ad inventore harum. Reprehenderit dicta hic provident?
        </p>
        <a className='dowland' href='https://drive.google.com/file/d/1P1jG-CC9Hwa5re7nTH1cTnTjwepM4agE/view' target='_blank'>Descargar CV</a>
      </section>
      <main className='main'>
        <h2 className='main__subtitle'>Sobre mí </h2>
        <p className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore illo est rerum eius voluptas amet, veniam modi laboriosam hic consectetur debitis error qui, totam deleniti molestiae vel quas voluptatem nesciunt.</p>
        <p className='description'>Lorem, ipsum dolor sit amet consectetu r adipisicing elit. Ex magnam ipsa autem alias rerum minima, in excepturi iusto reprehenderit tempore saepe ea repellat ullam, odit, totam fugiat labore illum tenetur.</p>
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis ad in facere, obcaecati hic animi? Id voluptatibus sit assumenda placeat eligendi, optio, similique pariatur iste consequatur quaerat maxime? Assumenda, repellendus.
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