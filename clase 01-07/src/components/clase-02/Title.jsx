import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  text-decoration: underline;
  color: ${prop => prop.color};
`

const Title = (props) => {
  return (
    <StyledTitle> { props.title } </StyledTitle>
  )
}

// Title.defaultProps = {

// }

export default Title