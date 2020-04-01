import React, { useRef, useEffect } from 'react';
import icoLapide from './lapide.png'



export default function Lapide(props) {
	const { name, w = 116, h = 122 } = props
	const bgH = name.length * 8.5
	return (
		<div style={{ marginBottom:5, marginLeft:5,width: w || 116, height: h || 122 }}>
			<img src={icoLapide} />
			<h5 style={{ color: '#FFF', textAlign: 'center', position: 'relative', top: -60, left: 0 }}>{name}</h5>
		</div>
	);
}
