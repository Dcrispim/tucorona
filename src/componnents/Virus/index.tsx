import React, { useRef, useEffect } from 'react';
import icoVirus from './virus.svg'


// import { Container } from './styles';

interface Props{
	name:string,
	w?:number,
	h?:number
	style?:any,
	rgb?:number[],
	id?:string
}

const Virus:React.FC<Props> = (props) => {
	const {name, w=116, h=122} = props
	const bgH = name.length*8.5
	return (
		<div style={{justifyContent:'center' ,width: w , height: h  }}>
			<img src={icoVirus} style={{ width: w , height: h  }}/>
			
			<div style={{
				position:'relative', 
				top:-87, 
				left:h/2-bgH/2-2, 
				width: '100%'
				}}>
				
				<p style={{
					borderRadius:8,
					background:'#000',
					textAlign: 'center', 
					height:20, 
					width:name.length*8.5,
					color: '#FFF'
				}}>{name}</p>
				
				</div>
		</div>
  );
}

export default Virus