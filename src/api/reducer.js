let init = {
    contador : 0,
    links : ["usuarios","faq","contacto"],
    mostrar : true,
    usuario : "",
    usuarios : [],
    usuarios_rest : [],
    error : null , 
    usuarios_fetching : false,
    usuarios_fetched : false
}

let reducer = ( state = init , action ) => {
    switch(action.type){

        case "CONTADOR_SUMAR" : 
            return { ...state ,  contador : state.contador + 1 }

        case "CONTADOR_RESTAR" : 
            return { ...state ,  contador : state.contador - 1 }

        case "CONTADOR_RESETEAR" : 
            return { ...state ,  contador : 0 }

        case "FORMULARIO_MOSTRAR" : 
            return { ...state , mostrar : !state.mostrar }

        case "FORM_CHANGE" :
            return { ...state , usuario : action.payload }

        case "FORM_SUBMIT" :
            return { ...state , usuarios : [...state.usuarios , state.usuario], usuario : "" }
            
        case "USER_DELETE" :
            state.usuarios.splice(action.payload,1)
            return { ...state , usuarios : [...state.usuarios]}

        case "USER_UPDATE" :
            state.usuario = state.usuarios[action.payload]
            state.usuarios.splice(action.payload,1)
            return { ...state , usuarios : [...state.usuarios], usuario : state.usuario }
            
        case "FETCH_SUCCESS" : 
            return  {...state , usuarios_rest : action.payload, usuarios : [...state.usuarios,...action.payload]}

        case "FETCH_ERROR" :
            return  {...state , error : action.payload}
            
        default :
            return state
    }
}

export default reducer