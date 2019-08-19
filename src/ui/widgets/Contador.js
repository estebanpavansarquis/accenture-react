import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { sumarContador , restarContador , resetearContador } from '../../api/actions'
import { bindActionCreators } from 'redux'
import Button from '@material-ui/core/Button'

class Contador extends React.Component{
    render(){
        let {contador,sumarContador,resetearContador,restarContador} = this.props
        return(
            <Fragment>
                <p>Contador : { contador }</p>
                <Button onClick={ sumarContador }>+</Button>
                <Button onClick={ restarContador }>-</Button>
                <Button onClick={ resetearContador }>Reset</Button>
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