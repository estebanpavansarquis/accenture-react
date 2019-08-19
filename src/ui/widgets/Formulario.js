import React , {Component , Fragment} from "react"
import ListadoUsuarios from "./ListadoUsuarios"
import { connect } from "react-redux"
import { mostrarFormulario , handleChange , handleSubmit } from "../../api/actions"
import {bindActionCreators} from "redux"
import Button from '@material-ui/core/Button'

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
                    <Button>Enviar!</Button>
                </form>
                :null}
                
                <Button onClick={mostrarFormulario}> { mostrar ? 'Hide form' : 'Show form'} </Button>
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