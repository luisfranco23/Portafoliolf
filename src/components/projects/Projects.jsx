import React from 'react'
import ecommerce from '../../assets/projetcs/ecommerce.png'
import users from '../../assets/projetcs/users.png'
import clima from '../../assets/projetcs/clima.png'
import pokeapi from '../../assets/projetcs/pokeapi.png'
import rickandmorty from '../../assets/projetcs/rickandmorty.png'
import '../home/style.css'
import './style.css'


const Projects = () => {
  return (
    <section className='projetcs'>
      <div className="projetcs__description">
      <h1 className='subtitle'>Poryectos</h1>
      <p className='description'>
        Aquí puedes ver los proyectos realizados la mayoría con React Js ya que es uno de los mejores Framework's para front-end, consumo de API`S manejando peticiones con axios, librerias como react hook forms, redux, react router dom, filtros con JavaScript,Animaciones con Css, uso de git fortaleciendo el trabajo en equipo.
      </p>
      <p className='description'>
      Con el uso de estas herramientas podemos lograr muy buenos proyectos.
      </p>
      </div>
        <div className='target'>
          <h2 className='target__subtitle'>E-commerce</h2>
          <p className='target__description'>Consume una API utilizando React Js, axios, redux, rutas protegidas, autenticación con token, formularios, todas las funcionalidades para visualizar, añadir al carro de compras, eliminar y comprar, puedes usar el usuario de pruebas o crear tu propio usuario.</p>
          <img className='target__image' src={ecommerce} alt='ecommerce' />
          <div className="icons">
            <a className='icons__link' href="http://github.com/luisfranco/Pokedex" target='_blank'><i className='bx bxl-github'></i></a>
            <a className='icons__link' href="https://crud-users-js.netlify.app/" target='_blank'><i className='bx bx-link' ></i></a>
          </div>
        </div>
        <div className='target'>
          <h2 className='target__subtitle'>Pokedex</h2>
          <p className='target__description'>Consume pokeApi utilizando React js, props, filtros y rutas progidas con el fin de mostrar los pokemones y todas sus habilidades individualmente, metodos de JavaScript, librerias como axios, react hook form y react douter dom, paginación con JavaScript.</p>
          <img className='target__image' src={pokeapi} alt='ecommerce' />
          <div className="icons">
            <a className='icons__link' href="http://github.com/luisfranco/ecommerce" target='_blank'><i className='bx bxl-github'></i></a>
            <a className='icons__link' href="https://pokedexreactjsv2.netlify.app/" target='_blank'><i className='bx bx-link' ></i></a>
          </div>
        </div>
        <div className='target'>
          <h2 className='target__subtitle'>Usuarios App</h2>
          <p className='target__description'>Aquí puedes leer, crear, editar y eliminar usuarios (CRUD), cosume una API con axios uso de React Js manejando todas las peticiones http y excelente estilizado con css.</p>
          <img className='target__image' src={users} alt='ecommerce' />
          <div className="icons">
            <a className='icons__link' href="http://github.com/luisfranco/CRUD-USERS" target='_blank'><i className='bx bxl-github'></i></a>
            <a className='icons__link' href="http://" target='_blank'><i className='bx bx-link' ></i></a>
          </div>
        </div>
        <div className='target'>
          <h2 className='target__subtitle'>Rick And Morty</h2>
          <p className='target__description'>Puedes ver todos los planetas y sus habitantes, mostrando información detallada del mismo; consume una API, realizado con React Js y sus librerias.</p>
          <img className='target__image' src={rickandmorty} alt='ecommerce' />
          <div className="icons">
            <a className='icons__link' href="http://github.com/luisfranco/rickAndMorty" target='_blank'><i className='bx bxl-github'></i></a>
            <a className='icons__link' href="https://rickandmortywikijs.netlify.app/" target='_blank'><i className='bx bx-link' ></i></a>
          </div>
        </div>
        <div className='target'>
          <h2 className='target__subtitle'>Clima</h2>
          <p className='target__description'>Podemos obtener el estado del clima según tu ubicación y cambiar de ºC a ºF, de mis primeros proyectos consumiento una API y usando useState y useEffect.</p>
          <img className='target__image' src={clima} alt='ecommerce' />
          <div className="icons">
            <a className='icons__link' href="http://github.com/luisfranco/app-clima" target='_blank'><i className='bx bxl-github'></i></a>
            <a className='icons__link' href="https://climateappjs.netlify.app/" target='_blank'><i className='bx bx-link' ></i></a>
          </div>
        </div>
    </section>
  )
}

export default Projects