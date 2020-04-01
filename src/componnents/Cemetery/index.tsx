import React, { useState } from 'react';
import Lapide from '../Lapide';
import { get_names, is_dead, Names, POPULATION, INFECTEDS, DEADS, ANOTHER_DEADS, PERCENT } from '../../const'
import Virus from '../Virus';
import { useParams } from 'react-router';
import { Container } from './styles';
import icoLapide from '../Lapide/lapide.png'
import icoVirus from '../Virus/virus.svg'

interface ILapides {
  List: string[],
  c_name: string,
  type?: 'infecteds' | 'deads',
  setId_name: (name: string) => void
}
const Lapides: React.FC<ILapides> = (props) => {
  let i = 0
  const { List, c_name, setId_name, type = 'infecteds' } = props
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>

      {
        type === 'infecteds' ? List.map(
          name => {
            if (name.toLowerCase() === c_name.toLowerCase()) {
              setId_name(`${name}-${i}`)

            }
            i++

            if ((window.innerWidth < 400 && i<200) || window.innerWidth>=400) {

              return <Virus key={i}
                name={name}
                id={`${name}-${i}`}
                rgb={name.toLowerCase() === c_name.toLowerCase() ? [255, 0, 0] : [0, 0, 0]} />
            }else if (i===200){
              return <h1> Entre Outros...</h1>
            }
          }


        ) : List.map(
          name => {
            if (name.toLowerCase() === c_name.toLowerCase()) {
              setId_name(`${name}-${i}`)

            }
            i++
            return <Lapide key={i} name={name} id={`${name}-${i}`} rgb={name.toLowerCase() === c_name.toLowerCase() ? [255, 0, 0] : [0, 0, 0]} />
          }


        )




      }





    </div>
  )
}


export default function Cemetery() {

  const [id_name, setId_name] = useState('')
  const { name } = useParams()
  const c_name = `${name?.slice(0, 1).toUpperCase()}${name?.slice(1).toLowerCase()}` || ''
  if (Names.indexOf(c_name) < 0) {
    Names.push(c_name)
  }
  const Lists: { [key: string]: string[] } = {
    infecteds: get_names(INFECTEDS),
    another_deads: get_names(ANOTHER_DEADS)

  }
  console.log(Lists)
  Lists.deads = [...get_names(DEADS, Lists.infecteds, Lists.infecteds.length), ...Lists.another_deads]

  if (Math.round(Math.random() * 100) <= 3.5) {
    Lists.deads.push(c_name)
    Lists.infecteds.push(c_name)
  }

  if (Math.round(Math.random() * 100) > 3.5 && Math.round(Math.random() * 100) < 7) {
    Lists.deads.push(c_name)

  }


  //Lists.deads.concat(Lists.another_deads)
  const Msg = {
    "infecteds": {
      "true": 'foi um dos infectados',
      "false": 'não ficou entre os infectados'
    },
    "deads": {
      "true": 'morreu!',
      "false": 'sobreviveu!'
    },
    "another_deads": {
      "true": 'mesmo assim',
      "false": ''
    }
  }

  const getMSG = (name: string, msg: 'infecteds' | 'another_deads' | 'deads') => {
    return Msg[msg][is_dead(name, Lists[msg]) ? 'true' : 'false']
  }

  const goToName = (_name: string) => {
    console.log(_name)
    window.scrollTo(0, document.getElementById(_name)?.getBoundingClientRect()?.y || 0 + 100)
  }

  return (

    <Container>
      <h1>
        {`${c_name}, na terra 
        ${Math.round(Math.random() * 1000)} 
        você ${getMSG(c_name, 'infecteds')} e  
        ${getMSG(c_name, 'deads')} ${getMSG(c_name, 'another_deads')}`}
      </h1>
      <h1>
        {`${is_dead(c_name, Lists.deads) ? 'Junto com eles...' : 'Mas eles não...'}`}
      </h1>

        <div>
          {`População: ${(POPULATION * PERCENT).toFixed(0)}`}
        </div>
      <div className='box-menu'>
        <div className='menu'>
          <img style={{
            marginLeft: 8, width: 24, height: 24,
          }} src={icoVirus} />
          <img style={{
            marginLeft: 8, width: 24, height: 24,
          }} src={icoLapide} />
          <img style={{ marginLeft: 8, width: 24, height: 24 }} src={icoLapide} />
        </div>
        <div className='menu'>
          <span className='menu'>{`Infectados: ${(POPULATION * INFECTEDS * PERCENT).toFixed(0)}  `}</span>
          <span className='menu'>{`Mortos pelo virus: ${(POPULATION * INFECTEDS * DEADS * PERCENT).toFixed(0)}  `}</span>
          <span className='menu'>{`Outros Mortos: ${(POPULATION * ANOTHER_DEADS * PERCENT).toFixed(0)}  `}</span>
        </div>
      </div>
        <div style={{ marginRight: 16 }}>
          {`Proporção de pessoas em relação nossa terra: ${(PERCENT * 100).toFixed(2)}%  `}
        </div>
      <br />

      <Lapides List={Lists.deads} c_name={c_name} setId_name={setId_name} type='deads' />
      <h1>
        Esse é só um lembrete de que por trás de cada número tem um nome. <br />
        Com Famílha, Com Amigos, Com vida. Fique em Casa! <br />
        {(c_name.toLowerCase().indexOf('jair') >= 0 && c_name.toLowerCase().indexOf('bolsonaro') >= 0) ? 'E pare de Falar Merda!' : ''}
      </h1>
      <Lapides List={Lists.infecteds} c_name={c_name} setId_name={setId_name} type='infecteds' />



    </Container>
  );
}