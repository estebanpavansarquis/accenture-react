import React , { Component, Fragment } from "react"
import Usuario from "./Usuario"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { pedirUsuarios, updateUser, deleteUser } from "../../api/actions"

class ListadoUsuarios extends Component {
    render(){
        let {usuarios, updateUser, deleteUser, pedirUsuarios, usuarios_fetching, usuarios_fetched} = this.props
        return(
        <Fragment>
            <ul>
            {!usuarios.length
            ? <li >No hay usuarios</li>
            : usuarios.map((e,i)=>
            <div key={`usr${i}`} >
                <Usuario usuario={e}/>
                <button  onClick={ () => deleteUser(i) } > X </button>
                <button  onClick={ () => updateUser(i) } > Editar </button>
            </div>    
            )}
            </ul>
            <button key={'btn_get'} onClick={ () => {
                if(usuarios_fetched || usuarios_fetching) return;
                pedirUsuarios()
            }} > Get more users </button>
        </Fragment>
        )
    }
}

export default connect( 
    
    store => ({

        usuarios : store.usuarios,
        usuarios_rest : store.usuarios_rest

    }), 
    
    dispatch => ({
        pedirUsuarios : bindActionCreators(pedirUsuarios,dispatch),

        updateUser : bindActionCreators(updateUser,dispatch),

        deleteUser : bindActionCreators(deleteUser,dispatch)
    })

)(ListadoUsuarios)