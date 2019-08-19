import React, { Fragment } from "react"
import { connect } from "react-redux"
import { sumarContador , restarContador , resetearContador } from "../../api/actions"
import { bindActionCreators } from "redux"

class Contador extends React.Component{
    render(){
        let {contador,sumarContador,resetearContador,restarContador} = this.props
        return(
            <Fragment>
                <p>Contador : { contador }</p>
                <button onClick={ sumarContador }>+</button>
                <button onClick={ restarContador }>-</button>
                <button onClick={ resetearContador }>Reset</button>
            </Fragment>
        )
    }
}

let mapStateToProps = store => ({
    contador : store.contador
})

let mapDispatchToProps = dispatch => ({
    sumarContador : bindActionCreators(sumarContador,dispatch),
    restarContador : bindActionCreators(restarContador,dispatch),
    resetearContador : bindActionCreators(resetearContador,dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Contador)