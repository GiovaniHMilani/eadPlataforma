import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from 'antd';

import './index.sass'

export default function Header() {
  const pessoa = useSelector(state => state.lista.users);
  const pessoa10 = useSelector(state => state.lista10.users);
  const [busca, changeBusca] = useState('');
  const dispatch = useDispatch();

  function handleChange(event) {
    changeBusca(event.target.value)
    const newList = [...pessoa, ...pessoa10]
    if (event.target.value.length === 0) {
      dispatch({ type: 'busca', texto: '', lista: newList })
    } else {
      dispatch({ type: 'busca', texto: event.target.value, lista: newList })
    }
  }

  return (
    <div className="header">
      <input value={busca} onChange={(event) => handleChange(event)} />
      <Icon type="bell" theme="filled" style={{ fontSize: '18px', color: '#878787' }} />
      <img src={pessoa[3].photo_url} alt="Foto Pessoa" />
      <Icon type="down" style={{ fontSize: '9px', color: '#878787' }} />
    </div>
  );
}
