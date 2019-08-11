import { createStore } from 'redux';

import { lista0 } from '../service/offSet0';
import { lista10 } from '../service/offSet10';

const initalState = {
	lista: lista0(),
	lista10: lista10(),
	busca: 0,
	listaBusca: [],
	total: 0
}

function lista(state = initalState, action) {
	if (action.type === 'busca') {
		let newLista = [];
		for (let i = 0; i < action.lista.length; i++) {
			if (action.lista[i].name.toUpperCase().indexOf(action.texto.toUpperCase()) !== -1) {
				newLista.push({
					id: action.lista[i].id,
					name: action.lista[i].name,
					email: action.lista[i].email,
					phone: action.lista[i].phone,
					amount: action.lista[i].amount,
					photo_url: action.lista[i].photo_url,
					status: action.lista[i].status
				})
			}
		}
		if (action.texto.length === 0) {
			return { ...state, listaBusca: newLista, busca: 0 }
		}
		return { ...state, listaBusca: newLista, busca: 1 }
	}
	return state
}

const store = createStore(lista);

export default store;