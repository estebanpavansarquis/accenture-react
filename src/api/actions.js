export let sumarContador = () => 
    ({type:"CONTADOR_SUMAR"})

export let restarContador = () =>
    ({type:"CONTADOR_RESTAR"})

export let resetearContador = () =>
    ({type:"CONTADOR_RESETEAR"})

export let mostrarFormulario = () => 
    ({type:"FORMULARIO_MOSTRAR"})

export let handleChange = e => 
    ({type:"FORM_CHANGE",payload:e.target.value})

export let handleSubmit = e => {
    e.preventDefault()
    return {type:"FORM_SUBMIT"}
}

export let updateUser = i => 
    ({type:"USER_UPDATE",payload:i})

export let deleteUser = i => 
    ({type:"USER_DELETE",payload:i})

export let pedirUsuarios = () => {
    //redux-thunk me permite hacer async si y solo si retorno una funcion
    let url = "https://jsonplaceholder.typicode.com"

    return dispatch => {

        dispatch({type:"FETCH_INIT"})

        fetch(`${url}/users`)
        .then(res=>res.json())
        .then(res=>{
            let names = []
            for(const user of res){
                names.push(user.name)
            }
            dispatch({type:"FETCH_SUCCESS",payload:names})
        })
        .catch(err=>{
            dispatch({type:"FETCH_ERROR",payload:err})
        })
        
    }

}