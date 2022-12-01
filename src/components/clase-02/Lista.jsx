import React from 'react'
import Propiedades from './Propiedades'
import '../../App.css'
import Title from './Title'

const Lista = () => {
  const arr = [1,2,3]
  return (
    <>
      <Propiedades
        className='lista'
        string='Esto es un string'
        number={20}
        booleano
        array={arr}
        // objeto={ {nombre:'Nahu'} }
        // funcion={num => num * num}
        funcion={num => {
          console.log('NUM ==> ', num * num);
          return <li key={(num * num).toString()}> { num * num } </li>
        }}
        elementoReact={<i> Esto es un elemento React </i>}
        componenteReact={<Title title='Ahora soy un li'/>}
      />
    </>
  )
}

export default Lista