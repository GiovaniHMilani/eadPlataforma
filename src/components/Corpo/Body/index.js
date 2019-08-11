import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import './index.sass';
import ListItem from './ListItem';
import Container from './Container';
import { Icon } from 'antd';

export default function Body() {
  const pessoa = useSelector(state => state.lista);
  const pessoa10 = useSelector(state => state.lista10);

  const [lista, changeLista] = useState(true);
  let adim = 0;
  let inadim = 0;
  let valor = 0;

  
  let newArray = [...pessoa.users, ...pessoa10.users];

  function contArray(array) {
    for(let i = 0; i < array.length; i++ ){
      if(array[i].status === '0'){
        adim = adim + 1
        valor = valor + parseFloat(array[i].amount)
      } else {
        inadim = inadim + 1
        valor = valor + parseFloat(array[i].amount)
      }
    }
  }

  function altList() {
    changeLista(!lista);
  }


  return (
    <div className="body" onLoad={contArray(newArray)}>
      <div className="titulo">
        <div className="separator"></div>
        <p>Visão geral</p>
      </div>
      <div className="container-geral">
        <Container texto="Total de clientes" dados={pessoa.total} />
        <Container texto="Clientes inadimplentes" dados={inadim} />
        <Container texto="Clientes adimplentes" dados={adim} />
        <Container texto="Total arrecadado" dados={valor} />
      </div>

      <div className="titulo">
        <div className="separator"></div>
        <p>Clientes cadastrados</p>
      </div>
      <div className="lista-container">
        <ul className="lista">
          {lista ? pessoa.users.map(usuario => <ListItem key={usuario.id} user={usuario} />) : pessoa10.users.map(usuario => <ListItem key={usuario.id} user={usuario} />)}
        </ul>
        <div className="button-area">
          <button onClick={altList}><Icon type="left" style={{ color: '#fff' }} /></button>
          {lista ? <p><strong>1</strong> 2</p> : <p>1 <strong>2</strong></p>}
          <button onClick={altList}><Icon type="right" style={{ color: '#fff' }} /></button>
        </div>
      </div>
    </div>
  );
}
