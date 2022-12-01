import React from 'react'

const Propiedades = (props) => {
  return (
    <>
      <ul className={props.className}>
        <li> { props.string } </li>
        <li> { props.number } </li>
        <li> { props.booleano ? 'True' : 'False' } </li>
        <li> { props.array.join(',') } </li>
        <li> { props.objeto.nombre + ' - ' + props.objeto.apellido} </li>
        <li> { props.array.map(props.funcion) } </li>
        <li> { props.elementoReact } </li>
        {props.booleano && <li> { props.componenteReact } </li>}
      </ul>
    </>
  )
}



const funcion = () => {
  console.log('Soy una funcion')
}

Propiedades.defaultProps = {
  string: 'Hola mundo',
  objeto: {
    nombre: 'Nahuel',
    apellido: 'Pasquale'
  },
  array: [],
  funcion: funcion,
}

export default Propiedades