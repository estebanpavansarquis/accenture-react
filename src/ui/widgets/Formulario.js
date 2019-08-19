import React , {Component , Fragment} from "react"
import ListadoUsuarios from "./ListadoUsuarios"
import { connect } from "react-redux"
import { mostrarFormulario , handleChange , handleSubmit } from "../../api/actions"
import {bindActionCreators} from "redux"

class Formulario extends Component {

    render(){
        let {handleChange,handleSubmit,usuario, mostrarFormulario,mostrar} = this.props
        return(
            <Fragment>
                {mostrar
                ? <form onSubmit={handleSubmit}>
                    <div>
                        <input value={usuario} onChange={handleChange} type="text" placeholder="Usuario"/>
                    </div>
                    <button>Enviar!</button>
                </form>
                :null}
                
                <button onClick={mostrarFormulario}>Mostrar</button>
                <ListadoUsuarios/>
            </Fragment>
        )
    }
}

export default connect( 

    store => ({
        usuario : store.usuario,
        mostrar : store.mostrar
    }) ,

    dispatch => ({
        mostrarFormulario : bindActionCreators(mostrarFormulario,dispatch),

        handleChange : bindActionCreators(handleChange,dispatch),

        handleSubmit : bindActionCreators(handleSubmit,dispatch)
    }) 

)(Formulario)