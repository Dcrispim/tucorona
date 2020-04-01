import React, { useRef, SyntheticEvent, FormHTMLAttributes } from 'react';
import { Container } from './styles';
import { EventType } from '@testing-library/react';

const Verify = () => {
  const InputRef = useRef(null)


  interface ITarget extends EventTarget {
    [key: string]: any

  }
  interface IHandleSubmit {
    preventDefault: () => void,
    target: ITarget

  }
  const handleSubmit = (e: IHandleSubmit) => {
    e.preventDefault()
    window.location.replace(`/tucorona/result/${e.target.name.value}`)


  }

  return (
    <Container>
      <p>
        Em meio a pandemia cientistas descobriram como acessar dados das terras de universos
        paralelos. Se tiver curiosidade para saber sobre seu destino em outras realidades digite seu nome e descubra
      </p>
      <form onSubmit={handleSubmit}>
        <input ref={InputRef} name='name' id="name"></input>
        <button type='submit'>Consultar</button>
      </form>
      <p>
        É sempre bom lembrar que, apesar de serem muito parecidas em alguns aspectos, essas terras não saõ
        iguais a nossa então os dados tambem não refletirão nossa situação
      </p>
    </Container>
  );
}
export default Verify